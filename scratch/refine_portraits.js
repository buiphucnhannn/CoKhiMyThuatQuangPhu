const sharp = require('sharp');
const fs = require('fs');

async function refine() {
  // 1. Clean Uncle Ho front bust (bac_ho_baokhang1.jpg)
  const img = sharp('scratch/bac_ho_baokhang1.jpg');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const c = info.channels;

  // Mask array: 1 = background, 0 = statue
  const isBg = new Uint8Array(w * h);

  // Any pixel with low brightness is background
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * c;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Exclude top text, top-right logo, bottom-left text
      if (y < 125 || (x > 1050 && y < 220) || (x < 330 && y > 950)) {
        isBg[y * w + x] = 1;
        continue;
      }

      // Background watermark text is gray/dark: r < 55, g < 55, b < 55
      // The bronze statue is warm: r is high, r > g + 5, r > 65
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      if (brightness < 50) {
        isBg[y * w + x] = 1;
      }
    }
  }

  // Flood fill from edges to clean any isolated gray noise in background
  const queue = [];
  const visited = new Uint8Array(w * h);

  // Push border pixels
  for (let x = 0; x < w; x++) {
    queue.push(0 * w + x);
    queue.push((h - 1) * w + x);
    visited[0 * w + x] = 1;
    visited[(h - 1) * w + x] = 1;
  }
  for (let y = 0; y < h; y++) {
    queue.push(y * w + 0);
    queue.push(y * w + (w - 1));
    visited[y * w + 0] = 1;
    visited[y * w + (w - 1)] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const pos = queue[head++];
    const x = pos % w;
    const y = Math.floor(pos / w);
    const idx = (y * w + x) * c;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    // If it's not the statue (brightness < 62 or not bronze color)
    if (brightness < 62 || (r < 75 && g < 65)) {
      isBg[pos] = 1;

      // Check 4 neighbors
      const neighbors = [
        pos - 1, pos + 1, pos - w, pos + w
      ];
      if (x > 0 && !visited[pos - 1]) { visited[pos - 1] = 1; queue.push(pos - 1); }
      if (x < w - 1 && !visited[pos + 1]) { visited[pos + 1] = 1; queue.push(pos + 1); }
      if (y > 0 && !visited[pos - w]) { visited[pos - w] = 1; queue.push(pos - w); }
      if (y < h - 1 && !visited[pos + w]) { visited[pos + w] = 1; queue.push(pos + w); }
    }
  }

  // Now apply clean studio background
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pos = y * w + x;
      if (isBg[pos] === 1) {
        const idx = pos * c;
        // Studio dark charcoal / subtle warm vignette
        const distFromCenter = Math.hypot((x - w / 2) / (w / 2), (y - h * 0.4) / (h * 0.5));
        const bgR = Math.round(Math.max(8, 16 - distFromCenter * 6));
        const bgG = Math.round(Math.max(9, 17 - distFromCenter * 6));
        const bgB = Math.round(Math.max(13, 24 - distFromCenter * 8));

        data[idx] = bgR;
        data[idx + 1] = bgG;
        data[idx + 2] = bgB;
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: c } })
    .extract({ left: 160, top: 110, width: 960, height: 1060 })
    .resize(600, 750, { fit: 'cover' })
    .jpeg({ quality: 96 })
    .toFile('public/images/generated/card_bac_ho_highres.jpg');

  console.log('Saved card_bac_ho_highres.jpg');

  // 2. Refine Grandparents portrait bust
  // tuong_tho_ong_ba.jpg (896x1200)
  // Heads are at y=160 to y=450. Chest/collar are at y=450 to y=620.
  // Hands start at y=680.
  // So height 500 starting at top 150 captures exactly heads + shoulders + chest!
  await sharp('public/images/generated/tuong_tho_ong_ba.jpg')
    .extract({ left: 60, top: 140, width: 776, height: 530 })
    .resize(600, 750, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 96 })
    .toFile('public/images/generated/card_tuong_tho_highres.jpg');

  console.log('Saved card_tuong_tho_highres.jpg');
}

refine();
