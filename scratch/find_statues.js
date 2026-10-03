const fs = require('fs');

async function getDDGImages(query) {
  try {
    const reqUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(query) + '&t=h_&iar=images&iax=images&ia=images';
    const tokenRes = await fetch(reqUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const tokenHtml = await tokenRes.text();
    const vqdMatch = tokenHtml.match(/vqd=([0-9-]+)/) || tokenHtml.match(/vqd="([^"]+)"/);
    if (!vqdMatch) return [];
    const vqd = vqdMatch[1];
    const imgUrl = 'https://duckduckgo.com/i.js?l=us-en&o=json&q=' + encodeURIComponent(query) + '&vqd=' + vqd + '&f=,,,&p=1';
    const res = await fetch(imgUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    return [];
  }
}

async function run() {
  const queries = [
    'Ho Chi Minh bronze bust sculpture',
    'tượng bác hồ bán thân đúc đồng'
  ];
  for (const q of queries) {
    console.log('Searching for:', q);
    const results = await getDDGImages(q);
    for (let i = 0; i < Math.min(8, results.length); i++) {
      console.log(i, results[i].title, results[i].image);
    }
  }
}

run();
