# ZENPULSAR Commodities Intelligence Microsite

## Files Included
- `index.html` - Main website file
- `logo.png` - ZENPULSAR logo
- `server.js` - Node.js server for deployment
- `package.json` - Node.js dependencies
- `package-lock.json` - Dependency lock file
- `Procfile` - Deployment configuration

## Deployment Options

### Option 1: Static Hosting (Easiest)
For **Netlify** or similar static hosts:
- Upload only `index.html` and `logo.png`
- Site will work immediately

### Option 2: Node.js Hosting
For **Vercel**, **Railway**, **Render**, or **Heroku**:
- Upload all files
- Platform will automatically run `npm start`
- Health checks available at `/health`

### Option 3: Manual Setup
1. Extract all files
2. Run `npm install`
3. Run `npm start`
4. Site available at http://localhost:5000

## Features
- Professional design with ZENPULSAR branding
- Responsive layout for mobile and desktop
- Contact form integration
- Smooth animations and scroll effects
- Health check endpoints for deployment monitoring

## Support
The site is self-contained and requires no external databases or APIs.