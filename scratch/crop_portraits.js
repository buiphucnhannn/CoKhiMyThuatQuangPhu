const sharp = require('sharp');
const fs = require('fs');

async function processBusts() {
  // 1. Process Uncle Ho bust (from bac_ho_baokhang1.jpg front view)
  // Crop around bust: left: 200, top: 120, width: 880, height: 980 -> 800x900
  const hoImg = sharp('scratch/bac_ho_baokhang1.jpg');
  // First crop the bust avoiding the top text and bottom text
  // Let's get raw pixels of bac_ho_baokhang1 to cleanly zero out background watermarks
  const { data, info } = await sharp('scratch/bac_ho_baokhang1.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // In the black background, watermarks have very low brightness (e.g. R,G,B < 35 or 40)
  // While the bronze statue has R > 60 and warm tones
  // Let's also black out top text region (y < 120) and circular logo (x > 1050, y < 200) and bottom left text (x < 320, y > 950)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // If in black background regions or text regions
      const isTopText = y < 125;
      const isLogo = x > 1050 && y < 220;
      const isBottomText = x < 320 && y > 950;
      const isBackground = (r < 38 && g < 38 && b < 38);

      if (isTopText || isLogo || isBottomText || isBackground) {
        data[idx] = 12;     // Clean dark studio tone #0C0D12
        data[idx + 1] = 13;
        data[idx + 2] = 18;
      }
    }
  }

  // Save cleaned Ho Chi Minh bust
  await sharp(data, { raw: { width, height, channels } })
    .extract({ left: 160, top: 100, width: 960, height: 1080 })
    .resize(600, 750, { fit: 'cover' })
    .jpeg({ quality: 95 })
    .toFile('scratch/test_bac_ho_clean.jpg');

  console.log('Saved test_bac_ho_clean.jpg');

  // Also do 3/4 angle version
  const { data: d2, info: i2 } = await sharp('scratch/bac_ho_baokhang.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 0; y < i2.height; y++) {
    for (let x = 0; x < i2.width; x++) {
      const idx = (y * i2.width + x) * i2.channels;
      const r = d2[idx];
      const g = d2[idx + 1];
      const b = d2[idx + 2];

      const isLogo = x > 1050 && y < 220;
      const isBackground = (r < 38 && g < 38 && b < 38);

      if (isLogo || isBackground) {
        d2[idx] = 12;
        d2[idx + 1] = 13;
        d2[idx + 2] = 18;
      }
    }
  }

  await sharp(d2, { raw: { width: i2.width, height: i2.height, channels: i2.channels } })
    .extract({ left: 160, top: 120, width: 960, height: 1080 })
    .resize(600, 750, { fit: 'cover' })
    .jpeg({ quality: 95 })
    .toFile('scratch/test_bac_ho_angle_clean.jpg');

  console.log('Saved test_bac_ho_angle_clean.jpg');

  // 2. Process Grandparents portrait bust
  // tuong_tho_ong_ba.jpg is 896x1200
  // Crop strictly to heads and chest/shoulders
  await sharp('public/images/generated/tuong_tho_ong_ba.jpg')
    .extract({ left: 80, top: 150, width: 736, height: 600 })
    .resize(600, 750, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 95 })
    .toFile('scratch/test_tuong_tho_portrait.jpg');

  console.log('Saved test_tuong_tho_portrait.jpg');
}

processBusts();
