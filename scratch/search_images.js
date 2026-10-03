const fs = require('fs');

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=5&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'CoKhiMyThuatApp/1.0 (test@example.com)' } });
  const data = await res.json();
  const pages = data?.query?.pages || {};
  return Object.values(pages).map(p => ({
    title: p.title,
    url: p.imageinfo?.[0]?.url,
    w: p.imageinfo?.[0]?.width,
    h: p.imageinfo?.[0]?.height
  })).filter(x => x.url && (x.url.endsWith('.jpg') || x.url.endsWith('.png')));
}

async function run() {
  console.log('--- 3D CAD ---');
  console.log(await searchCommons('CAD'));
  console.log('--- Consultation / Blueprints ---');
  console.log(await searchCommons('blueprint'));
  console.log('--- Delivery truck ---');
  console.log(await searchCommons('truck delivery'));
}

run();
