// Build script to create worker.js with embedded HTML
const fs = require('fs');

// Read the HTML file
const htmlContent = fs.readFileSync('index.html', 'utf8');

// Escape the HTML content for JavaScript
const escapedHtml = htmlContent
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

// Create the worker.js content
const workerContent = `addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Health check endpoints
  if (url.pathname === '/health' || url.pathname === '/healthz') {
    return new Response('OK', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  
  // Serve the main HTML file for all routes
  if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname.endsWith('.html')) {
    return new Response(HTML_CONTENT, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }
  
  // Handle logo.png - you'll need to convert this to base64 or use a CDN
  if (url.pathname === '/logo.png') {
    return new Response('Logo not found - upload to Workers assets or use CDN', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  
  // Default to serving the main page
  return new Response(HTML_CONTENT, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

// Embedded HTML content
const HTML_CONTENT = \`${escapedHtml}\`;`;

// Write the worker.js file
fs.writeFileSync('worker.js', workerContent);

console.log('worker.js has been created successfully!');
console.log('You can now deploy with: wrangler publish');