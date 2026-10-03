const sharp = require('sharp');
const fs = require('fs');

async function createMasterBg() {
  const width = 1920;
  const height = 950;

  const bgSvg = Buffer.from(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Base luxury dark bronze metallic gradient (warm, rich, never flat black) -->
    <radialGradient id="bgBase" cx="60%" cy="45%" r="75%">
      <stop offset="0%" stop-color="#3D2C1E" />
      <stop offset="35%" stop-color="#2A2128" />
      <stop offset="70%" stop-color="#201D26" />
      <stop offset="100%" stop-color="#181720" />
    </radialGradient>

    <!-- Warm golden ambient spotlight behind cards -->
    <radialGradient id="cardGlow" cx="72%" cy="48%" r="52%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.28" />
      <stop offset="40%" stop-color="#B8860B" stop-opacity="0.14" />
      <stop offset="85%" stop-color="#1A1822" stop-opacity="0.0" />
      <stop offset="100%" stop-color="#181720" stop-opacity="0.0" />
    </radialGradient>

    <!-- Top golden ambient glow under the top curve (so top curve is never black) -->
    <radialGradient id="topCurveGlow" cx="50%" cy="5%" r="55%">
      <stop offset="0%" stop-color="#E5C158" stop-opacity="0.20" />
      <stop offset="30%" stop-color="#C59B27" stop-opacity="0.12" />
      <stop offset="70%" stop-color="#8C6218" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#181720" stop-opacity="0" />
    </radialGradient>

    <!-- Bottom golden ambient glow above the bottom curve (so bottom curve is never black) -->
    <radialGradient id="bottomCurveGlow" cx="50%" cy="95%" r="55%">
      <stop offset="0%" stop-color="#E5C158" stop-opacity="0.22" />
      <stop offset="30%" stop-color="#C59B27" stop-opacity="0.13" />
      <stop offset="70%" stop-color="#8C6218" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#181720" stop-opacity="0" />
    </radialGradient>

    <!-- Diagonal sunbeams / light rays from top right -->
    <linearGradient id="sunbeam1" x1="100%" y1="0%" x2="25%" y2="100%">
      <stop offset="0%" stop-color="#FFF4D0" stop-opacity="0.25" />
      <stop offset="25%" stop-color="#D4AF37" stop-opacity="0.12" />
      <stop offset="65%" stop-color="#B8860B" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#181720" stop-opacity="0" />
    </linearGradient>

    <linearGradient id="sunbeam2" x1="90%" y1="0%" x2="45%" y2="100%">
      <stop offset="0%" stop-color="#FFF6D8" stop-opacity="0.20" />
      <stop offset="30%" stop-color="#E5C158" stop-opacity="0.10" />
      <stop offset="100%" stop-color="#181720" stop-opacity="0" />
    </linearGradient>

    <!-- Concentric golden art arcs with rich metallic gradients -->
    <linearGradient id="goldArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF0BE" stop-opacity="0.55" />
      <stop offset="30%" stop-color="#E5C158" stop-opacity="0.40" />
      <stop offset="65%" stop-color="#B8860B" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#8C6218" stop-opacity="0.08" />
    </linearGradient>
  </defs>

  <!-- 1. Rich Bronze Base Fill -->
  <rect width="${width}" height="${height}" fill="url(#bgBase)" />

  <!-- 2. Warm ambient golden spotlight behind cards -->
  <rect width="${width}" height="${height}" fill="url(#cardGlow)" />

  <!-- 3. Top and Bottom curve ambient lighting (ensures curves are warm & glowing bronze) -->
  <rect width="${width}" height="${height}" fill="url(#topCurveGlow)" />
  <rect width="${width}" height="${height}" fill="url(#bottomCurveGlow)" />

  <!-- 4. Diagonal light rays from top right -->
  <polygon points="1000,0 1920,0 1920,700 600,${height} 350,${height}" fill="url(#sunbeam1)" />
  <polygon points="1380,0 1920,0 1920,450 1050,${height} 800,${height}" fill="url(#sunbeam2)" />

  <!-- 5. Concentric sweeping golden arcs on left and flowing across top and bottom -->
  <g stroke="url(#goldArcGrad)" fill="none">
    {/* Bottom left ripples */}
    <ellipse cx="60" cy="${height - 20}" rx="380" ry="380" stroke-width="2.2" />
    <ellipse cx="60" cy="${height - 20}" rx="500" ry="500" stroke-width="1.4" stroke-dasharray="16,8" />
    <ellipse cx="60" cy="${height - 20}" rx="640" ry="640" stroke-width="2.0" />
    <ellipse cx="60" cy="${height - 20}" rx="780" ry="780" stroke-width="1.2" stroke-dasharray="14,6" />
    <ellipse cx="60" cy="${height - 20}" rx="940" ry="940" stroke-width="1.6" />
    <ellipse cx="60" cy="${height - 20}" rx="1120" ry="1120" stroke-width="1.1" opacity="0.7" />
    <ellipse cx="60" cy="${height - 20}" rx="1320" ry="1320" stroke-width="1.0" opacity="0.5" />

    {/* Top left ripples */}
    <ellipse cx="40" cy="20" rx="360" ry="360" stroke-width="1.8" opacity="0.6" />
    <ellipse cx="40" cy="20" rx="520" ry="520" stroke-width="1.4" stroke-dasharray="12,6" opacity="0.5" />
    <ellipse cx="40" cy="20" rx="680" ry="680" stroke-width="1.9" opacity="0.45" />
    <ellipse cx="40" cy="20" rx="860" ry="860" stroke-width="1.2" stroke-dasharray="10,6" opacity="0.35" />
    <ellipse cx="40" cy="20" rx="1040" ry="1040" stroke-width="1.5" opacity="0.30" />
  </g>
</svg>
`);

  await sharp(bgSvg)
    .jpeg({ quality: 96 })
    .toFile('public/images/generated/services_master_bg.jpg');

  console.log('Upgraded rich bronze master background saved successfully!');
}

createMasterBg();
