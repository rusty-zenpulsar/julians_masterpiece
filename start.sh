#!/bin/bash
echo "Starting ZENPULSAR microsite..."
echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Starting server on port ${PORT:-5000}..."
exec node server.js