# Cloudflare Workers Deployment Guide

## Files Created

1. **wrangler.toml** - Cloudflare Workers configuration file
2. **worker.js** - Main worker script with embedded HTML content
3. **build-worker.js** - Build script to regenerate worker.js when HTML changes

## Deployment Steps

### 1. Install Wrangler CLI
```bash
npm install -g wrangler
```

### 2. Login to Cloudflare
```bash
wrangler login
```

### 3. Deploy to Workers
```bash
wrangler publish
```

## Configuration Notes

- **Project Name**: `zenpulsar-commodities`
- **Environments**: Production and staging configured
- **Health Checks**: Available at `/health` and `/healthz`
- **Caching**: 1 hour cache for HTML content

## Updating Content

When you update `index.html`, run:
```bash
node build-worker.js
wrangler publish
```

## Custom Domain (Optional)

To use a custom domain:
1. Update the `zone_name` in `wrangler.toml`
2. Add your domain to Cloudflare
3. Configure DNS settings

## Logo Handling

The logo.png file needs to be either:
1. Converted to base64 and embedded in the worker
2. Uploaded to a CDN
3. Use Cloudflare Workers assets (requires paid plan)

## Benefits of Workers Deployment

- Global CDN distribution
- Extremely fast loading times
- Built-in DDoS protection
- Automatic SSL/TLS
- No server management required