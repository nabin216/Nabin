const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  favicon: [16, 32, 64],
  logo: [192, 512],
  ogImage: [1200, 630], // Open Graph image size
};

async function generateIcons() {
  const sourceImage = path.join(__dirname, '../src/assets/logo.png');
  const publicDir = path.join(__dirname, '../public');

  // Generate favicon.ico (multi-size)
  const faviconBuffer = await Promise.all(
    sizes.favicon.map(size => 
      sharp(sourceImage)
        .resize(size, size)
        .toBuffer()
    )
  );

  await sharp(faviconBuffer[0])
    .toFile(path.join(publicDir, 'favicon.ico'));

  // Generate PWA icons
  for (const size of sizes.logo) {
    await sharp(sourceImage)
      .resize(size, size)
      .toFile(path.join(publicDir, `logo${size}.png`));
  }

  // Generate Open Graph image
  await sharp(sourceImage)
    .resize(sizes.ogImage[0], sizes.ogImage[1])
    .extend({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: { r: 250, g: 165, b: 0, alpha: 1 } // #FAA500
    })
    .toFile(path.join(publicDir, 'og-image.jpg'));

  console.log('✅ Icons generated successfully!');
}

generateIcons().catch(console.error); 