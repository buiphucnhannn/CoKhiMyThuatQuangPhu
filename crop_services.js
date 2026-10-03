const sharp = require('d:/Career/CoKhiMyThuat/CoKhiMyThuatQuangPhu/node_modules/sharp');

const targetImg = 'C:/Users/buiph/.gemini/antigravity-ide/brain/44df78b3-335c-4c1e-8fd3-3f40d6be99eb/.user_uploaded/media_1791006103598.png';

async function cropCardPhotos() {
  // In 775x582:
  // Card 1 photo: left: 284, top: 147, width: 104, height: 110
  // Card 2 photo: left: 407, top: 147, width: 104, height: 110
  // Card 3 photo: left: 531, top: 147, width: 104, height: 110
  // Card 4 photo: left: 654, top: 147, width: 104, height: 110

  await sharp(targetImg)
    .extract({ left: 283, top: 148, width: 106, height: 112 })
    .toFile('public/images/generated/service_item_1.jpg');

  await sharp(targetImg)
    .extract({ left: 406, top: 148, width: 106, height: 112 })
    .toFile('public/images/generated/service_item_2.jpg');

  await sharp(targetImg)
    .extract({ left: 529, top: 148, width: 106, height: 112 })
    .toFile('public/images/generated/service_item_3.jpg');

  await sharp(targetImg)
    .extract({ left: 652, top: 148, width: 106, height: 112 })
    .toFile('public/images/generated/service_item_4.jpg');

  console.log('4 exact service photos cropped!');
}

cropCardPhotos().catch(err => console.error(err));
