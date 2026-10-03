const sharp = require('d:/Career/CoKhiMyThuat/CoKhiMyThuatQuangPhu/node_modules/sharp');

const targetImg = 'C:/Users/buiph/.gemini/antigravity-ide/brain/44df78b3-335c-4c1e-8fd3-3f40d6be99eb/.user_uploaded/media_1791006103598.png';

async function cropAccurateCardPhotos() {
  // Card 1: float: top: 100, height: 135, width: 108
  await sharp(targetImg)
    .extract({ left: 282, top: 100, width: 108, height: 135 })
    .toFile('public/images/generated/service_card_photo_1.jpg');

  // Card 2: Uncle Ho: top: 96, height: 135, width: 108
  await sharp(targetImg)
    .extract({ left: 405, top: 96, width: 108, height: 135 })
    .toFile('public/images/generated/service_card_photo_2.jpg');

  // Card 3: Grandparents: top: 96, height: 135, width: 108
  await sharp(targetImg)
    .extract({ left: 528, top: 96, width: 108, height: 135 })
    .toFile('public/images/generated/service_card_photo_3.jpg');

  // Card 4: Soldier: top: 96, height: 135, width: 108
  await sharp(targetImg)
    .extract({ left: 651, top: 96, width: 108, height: 135 })
    .toFile('public/images/generated/service_card_photo_4.jpg');

  console.log('4 accurate card photos cropped!');
}

cropAccurateCardPhotos().catch(err => console.error(err));
