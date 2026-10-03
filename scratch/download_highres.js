const fs = require('fs');

async function getImageUrl(title) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'CoKhiApp/1.0' } });
  const data = await res.json();
  const pages = data?.query?.pages || {};
  for (const k in pages) {
    if (pages[k].imageinfo?.[0]?.url) {
      return pages[k].imageinfo[0];
    }
  }
  return null;
}

async function searchAndDownload(query, savePath) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'CoKhiApp/1.0' } });
  const data = await res.json();
  const items = data?.query?.search || [];
  console.log(`Query: ${query}, Found: ${items.length}`);
  for (const item of items) {
    if (!item.title.toLowerCase().endsWith('.jpg') && !item.title.toLowerCase().endsWith('.png')) continue;
    const info = await getImageUrl(item.title);
    if (info && info.url && info.width > 600) {
      console.log(`Downloading ${item.title} (${info.width}x${info.height})...`);
      const imgRes = await fetch(info.url, { headers: { 'User-Agent': 'CoKhiApp/1.0' } });
      const buf = Buffer.from(await imgRes.arrayBuffer());
      fs.writeFileSync(savePath, buf);
      console.log(`Saved to ${savePath}, size: ${buf.length}`);
      return true;
    }
  }
  return false;
}

async function main() {
  await searchAndDownload('architects reviewing blueprints table meeting', 'public/images/generated/step_consultation_highres.jpg');
  await searchAndDownload('Blender 3D software screenshot model', 'public/images/generated/step_3d_design_highres.jpg');
  await searchAndDownload('commercial truck highway red', 'public/images/generated/step_delivery_truck_highres.jpg');
}

main();
