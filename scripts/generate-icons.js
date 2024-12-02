const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define the sizes we need
const sizes = {
  favicon: 32,
  logo192: 192,
  logo512: 512,
  ogImage: 1200
};

// Create a white square with "KR" text
const svg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="black"/>
  <text 
    x="256" 
    y="300" 
    font-family="Arial, sans-serif" 
    font-size="200" 
    font-weight="bold" 
    fill="white" 
    text-anchor="middle"
  >KR</text>
</svg>
`;

// Function to generate PNG from SVG
async function generateIcon(size, outputName) {
  try {
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, '..', 'public', outputName));
    console.log(`Generated ${outputName}`);
  } catch (error) {
    console.error(`Error generating ${outputName}:`, error);
  }
}

// Generate all sizes
async function generateAll() {
  // Generate PNG files
  await generateIcon(sizes.favicon, 'favicon.png');
  await generateIcon(sizes.logo192, 'logo192.png');
  await generateIcon(sizes.logo512, 'logo512.png');
  await generateIcon(sizes.ogImage, 'og-image.png');

  // Copy favicon.png to favicon.ico (this is a simple solution, browsers will handle it)
  fs.copyFileSync(
    path.join(__dirname, '..', 'public', 'favicon.png'),
    path.join(__dirname, '..', 'public', 'favicon.ico')
  );
  
  console.log('All icons generated successfully!');
}

generateAll();
