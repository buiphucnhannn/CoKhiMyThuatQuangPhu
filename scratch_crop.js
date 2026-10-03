const sharp = require('d:/Career/CoKhiMyThuat/CoKhiMyThuatQuangPhu/node_modules/sharp');

const targetImg = 'C:/Users/buiph/.gemini/antigravity-ide/brain/44df78b3-335c-4c1e-8fd3-3f40d6be99eb/.user_uploaded/media_1791006103598.png';

// Let's crop the 5 steps:
// In 775x582:
// Timeline steps are roughly around y=440 to 530, x distributed across 5 columns.
// Let's test the bounds for step 1:
async function cropAssets() {
  // Step 1: x: 50, y: 440, w: 125, h: 75
  // Step 2: x: 190, y: 440, w: 125, h: 75
  // Step 3: x: 330, y: 440, w: 125, h: 75
  // Step 4: x: 468, y: 440, w: 125, h: 75
  // Step 5: x: 605, y: 440, w: 125, h: 75

  await sharp(targetImg)
    .extract({ left: 52, top: 440, width: 125, height: 75 })
    .toFile('public/images/generated/process_step_1.jpg');

  await sharp(targetImg)
    .extract({ left: 191, top: 440, width: 123, height: 75 })
    .toFile('public/images/generated/process_step_2.jpg');

  await sharp(targetImg)
    .extract({ left: 328, top: 440, width: 124, height: 75 })
    .toFile('public/images/generated/process_step_3.jpg');

  await sharp(targetImg)
    .extract({ left: 466, top: 440, width: 124, height: 75 })
    .toFile('public/images/generated/process_step_4.jpg');

  await sharp(targetImg)
    .extract({ left: 604, top: 440, width: 123, height: 75 })
    .toFile('public/images/generated/process_step_5.jpg');

  console.log('5 steps cropped successfully!');

  // Service Cards (top: ~85, height: ~225, widths: ~115)
  // Card 1: x: 280, y: 85, w: 110, h: 220
  // Card 2: x: 405, y: 85, w: 110, h: 220
  // Card 3: x: 528, y: 85, w: 110, h: 220
  // Card 4: x: 650, y: 85, w: 110, h: 220
  await sharp(targetImg)
    .extract({ left: 280, top: 85, width: 112, height: 215 })
    .toFile('public/images/generated/service_card_1.jpg');

  await sharp(targetImg)
    .extract({ left: 404, top: 85, width: 112, height: 215 })
    .toFile('public/images/generated/service_card_2.jpg');

  await sharp(targetImg)
    .extract({ left: 528, top: 85, width: 112, height: 215 })
    .toFile('public/images/generated/service_card_3.jpg');

  await sharp(targetImg)
    .extract({ left: 651, top: 85, width: 112, height: 215 })
    .toFile('public/images/generated/service_card_4.jpg');

  console.log('4 service cards cropped successfully!');

  // Left sketch background for Services Section
  await sharp(targetImg)
    .extract({ left: 0, top: 60, width: 280, height: 260 })
    .toFile('public/images/generated/services_sketch_bg.jpg');

  console.log('Sketch background cropped successfully!');
}

cropAssets().catch(err => console.error(err));
