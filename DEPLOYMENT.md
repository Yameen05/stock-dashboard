# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect it's a React app and deploy it
5. Your app will be live at `https://your-app-name.vercel.app`

### 2. Netlify

1. Run `npm run build` to create the production build
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder to deploy
4. Or connect your GitHub repo for automatic deployments

### 3. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d build"`
3. Run: `npm run deploy`
4. Enable GitHub Pages in your repo settings

## Environment Variables (Optional)

If you want to use a real stock API:

1. Create a `.env` file in the root directory
2. Add your API key: `REACT_APP_STOCK_API_KEY=your_api_key_here`
3. Update the stockService.ts to use `process.env.REACT_APP_STOCK_API_KEY`

## Build Commands

- Development: `npm start`
- Production build: `npm run build`
- Test locally: `npm run deploy` (serves build folder locally)

## Performance Tips

- The app is already optimized with:
  - Code splitting
  - Lazy loading
  - Efficient re-renders
  - Responsive images
  - Minified CSS/JS

## Monitoring

After deployment, you can monitor your app with:

- Vercel Analytics (built-in)
- Google Analytics
- Sentry for error tracking
