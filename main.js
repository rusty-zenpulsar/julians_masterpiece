// Main entry point for Replit Deployments
const { spawn } = require('child_process');

console.log('Starting ZENPULSAR microsite deployment...');

const server = spawn('node', ['server.js'], {
  stdio: 'inherit',
  env: { ...process.env, PORT: process.env.PORT || 5000 }
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code);
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down...');
  server.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down...');
  server.kill('SIGINT');
});