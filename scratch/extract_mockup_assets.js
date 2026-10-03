const sharp = require('sharp');

async function extractAssets() {
  const mockupPath = 'C:\\Users\\buiph\\.gemini\\antigravity-ide\\brain\\44df78b3-335c-4c1e-8fd3-3f40d6be99eb\\.user_uploaded\\media_1791013722739.png';
  const meta = await sharp(mockupPath).metadata();
  console.log('Mockup size:', meta.width, 'x', meta.height);

  // 1. Extract Bronze Warrior from CTA Section (left side of CTA banner)
  // CTA is around y = 290 to 450. Warrior is at x = 15 to 280, y = 295 to 445
  await sharp(mockupPath)
    .extract({ left: 16, top: 290, width: 285, height: 155 })
    .resize(570, 310)
    .jpeg({ quality: 96 })
    .toFile('public/images/generated/cta_bronze_warrior.jpg');

  console.log('Extracted cta_bronze_warrior.jpg');

  // 2. Extract Calligraphy "Quảng Phú" signature & slogan area
  // Located at x = 650 to 850, y = 100 to 220
  await sharp(mockupPath)
    .extract({ left: 660, top: 100, width: 180, height: 100 })
    .resize(360, 200)
    .png()
    .toFile('public/images/generated/quang_phu_signature.png');

  console.log('Extracted quang_phu_signature.png');

  // 3. Extract Right Gold Decorative Clouds / Motif on wave
  // Located at x = 650 to 860, y = 200 to 290
  await sharp(mockupPath)
    .extract({ left: 680, top: 215, width: 170, height: 80 })
    .resize(340, 160)
    .png()
    .toFile('public/images/generated/clients_gold_clouds.png');

  console.log('Extracted clients_gold_clouds.png');

  // 4. Extract Parade background for ClientsSection
  // Located at x = 450 to 850, y = 70 to 280
  await sharp(mockupPath)
    .extract({ left: 450, top: 70, width: 400, height: 210 })
    .resize(800, 420)
    .jpeg({ quality: 96 })
    .toFile('public/images/generated/clients_parade_bg.jpg');

  console.log('Extracted clients_parade_bg.jpg');
}

extractAssets();
