const sharp = require('d:/Career/CoKhiMyThuat/CoKhiMyThuatQuangPhu/node_modules/sharp');

const targetImg = 'C:/Users/buiph/.gemini/antigravity-ide/brain/44df78b3-335c-4c1e-8fd3-3f40d6be99eb/.user_uploaded/media_1791006103598.png';

async function cropPreciseSteps() {
  // Step 1: Drafting consultation table
  await sharp(targetImg)
    .extract({ left: 54, top: 457, width: 121, height: 58 })
    .toFile('public/images/generated/step_consultation_pill.jpg');

  // Step 2: 3D CAD Monitor
  await sharp(targetImg)
    .extract({ left: 192, top: 457, width: 121, height: 58 })
    .toFile('public/images/generated/step_3d_design_pill.jpg');

  // Step 3: Welding sparks
  await sharp(targetImg)
    .extract({ left: 330, top: 457, width: 121, height: 58 })
    .toFile('public/images/generated/step_welding_pill.jpg');

  // Step 4: Polishing relief
  await sharp(targetImg)
    .extract({ left: 468, top: 457, width: 121, height: 58 })
    .toFile('public/images/generated/step_finishing_pill.jpg');

  // Step 5: Red Delivery Truck
  await sharp(targetImg)
    .extract({ left: 605, top: 457, width: 121, height: 58 })
    .toFile('public/images/generated/step_delivery_truck_pill.jpg');

  // Left golden sketch lines for Services section background
  await sharp(targetImg)
    .extract({ left: 12, top: 75, width: 250, height: 240 })
    .toFile('public/images/generated/services_sketch_bg.jpg');

  console.log('Precise step capsules cropped successfully!');
}

cropPreciseSteps().catch(err => console.error(err));
