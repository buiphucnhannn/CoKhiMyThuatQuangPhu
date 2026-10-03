const sharp = require('sharp');

async function createPerfectPortraits() {
  // 1. Grandparents Busts (Card 03)
  // Let's crop tuong_tho_ong_ba directly: width 776, height 700 (heads and chest, no hands)
  // And resize directly to 600x750
  await sharp('public/images/generated/tuong_tho_ong_ba.jpg')
    .extract({ left: 60, top: 120, width: 776, height: 750 })
    .resize(600, 750, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 96 })
    .toFile('public/images/generated/card_tuong_tho_highres.jpg');

  console.log('Saved card_tuong_tho_highres.jpg');

  // 2. Uncle Ho Bust (Card 02)
  // In bac_ho_baokhang1.jpg (1280x1280):
  // Let's clean the background watermarks and top/bottom text directly
  const { data, info } = await sharp('scratch/bac_ho_baokhang1.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const c = info.channels;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * c;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const isTopText = y < 130;
      const isLogo = x > 1030 && y < 230;
      const isBottomLeftText = x < 340 && y > 940;
      const isBg = (r < 46 && g < 46 && b < 46);

      if (isTopText || isLogo || isBottomLeftText || isBg) {
        data[idx] = 12;
        data[idx + 1] = 13;
        data[idx + 2] = 18;
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: c } })
    .extract({ left: 160, top: 110, width: 960, height: 1050 })
    .resize(600, 750, { fit: 'cover' })
    .jpeg({ quality: 96 })
    .toFile('public/images/generated/card_bac_ho_highres.jpg');

  console.log('Saved card_bac_ho_highres.jpg');
}

createPerfectPortraits();
