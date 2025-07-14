const fs = require('fs');
const path = require('path');
const tailwindcss = require('tailwindcss');

async function buildCSS() {
  try {
    // Read the input CSS
    const inputCSS = fs.readFileSync('./src/input.css', 'utf8');
    
    // Read HTML content to scan for classes
    const htmlContent = fs.readFileSync('./index.html', 'utf8');
    
    // Use the new Tailwind v4 API with content scanning
    const compiled = await tailwindcss.compile(inputCSS, {
      content: [htmlContent],
      base: '.'
    });
    
    // Build the CSS
    const result = compiled.build();
    
    console.log('Build result:', result);
    
    // Ensure public directory exists
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }
    
    // Write the output CSS
    if (result && result.css) {
      fs.writeFileSync('./public/styles.css', result.css);
    } else {
      console.error('No CSS output from build');
      process.exit(1);
    }
    
    console.log('✅ CSS built successfully!');
    console.log('📁 Output: ./public/styles.css');
  } catch (error) {
    console.error('❌ Error building CSS:', error);
    process.exit(1);
  }
}

buildCSS();