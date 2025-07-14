# Deploy ZENPULSAR to Cloudflare Workers

## Quick Deployment

1. **Install Wrangler CLI** (if not already installed):
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy the website**:
   ```bash
   wrangler publish
   ```

## Files Created

- `wrangler.toml` - Cloudflare Workers configuration
- `worker.js` - Complete website embedded in a worker script
- `build-worker.js` - Script to rebuild worker.js if you update HTML

## Your Website Will Be Available At:
- `https://zenpulsar-commodities.your-subdomain.workers.dev`

## Benefits:
- Global CDN distribution
- Automatic SSL/TLS certificates
- Fast loading worldwide
- No server management needed
- Built-in DDoS protection

## If You Update the HTML:
Run `node build-worker.js` then `wrangler publish`