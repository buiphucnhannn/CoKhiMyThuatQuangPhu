const sharp = require('d:/Career/CoKhiMyThuat/CoKhiMyThuatQuangPhu/node_modules/sharp');

const targetImg = 'C:/Users/buiph/.gemini/antigravity-ide/brain/44df78b3-335c-4c1e-8fd3-3f40d6be99eb/.user_uploaded/media_1791006103598.png';

async function cropLeftSketch() {
  await sharp(targetImg)
    .extract({ left: 0, top: 70, width: 80, height: 245 })
    .toFile('public/images/generated/services_left_sketch.jpg');

  console.log('Left sketch cropped successfully!');
}

cropLeftSketch().catch(err => console.error(err));
