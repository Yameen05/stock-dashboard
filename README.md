# Internship Project: Stock Price Dashboard

A modern, responsive stock price dashboard built with React, TypeScript, and Tailwind CSS as part of an internship project demonstrating full-stack development skills.

## Features

### Core Requirements ✅
- **Stock Data Table**: Displays stock symbols, prices, and percentage changes
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop
- **Real-time Updates**: Auto-refreshes every 30 seconds
- **Deployment Ready**: Configured for Vercel/Netlify/GitHub Pages

### Bonus Features 🚀
- **Loading States**: Elegant spinner while fetching data
- **Interactive Charts**: Bar chart showing stock performance using Chart.js
- **Search & Sort**: Filter stocks by symbol/company name and sort by any column
- **Error Handling**: Graceful error boundaries and retry mechanisms
- **Statistics Dashboard**: Shows gainers, losers, and total stocks count
- **Auto-refresh**: Data updates automatically every 30 seconds
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **HTTP Client**: Axios
- **Build Tool**: Create React App

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stock-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## API Integration

Currently uses mock data for demonstration. To integrate with a real API:

1. Get an API key from Alpha Vantage, Finnhub, or similar service
2. Update the `stockService.ts` file with your API endpoint and key
3. Uncomment the real API implementation

## Project Structure

```
src/
├── components/          # React components
│   ├── StockTable.tsx   # Main data table
│   ├── StockChart.tsx   # Chart visualization
│   ├── LoadingSpinner.tsx
│   └── ErrorBoundary.tsx
├── services/            # API services
│   └── stockService.ts  # Stock data fetching
├── types/               # TypeScript types
│   └── stock.ts
└── App.tsx             # Main application component
```

## Features Showcase

- **Responsive Table**: Hides company names on mobile for better UX
- **Smart Sorting**: Click column headers to sort data
- **Real-time Search**: Filter stocks as you type
- **Visual Indicators**: Color-coded gains/losses with percentage badges
- **Chart Toggle**: Switch between table and chart views
- **Error Recovery**: Retry buttons and graceful error handling
- **Performance**: Optimized re-renders and efficient data updates

## About This Project

This project was developed as part of an internship to demonstrate:
- Modern React development with TypeScript
- Responsive UI/UX design with Tailwind CSS
- API integration and data visualization
- Error handling and user experience best practices
- Production deployment and DevOps skills

## License

MIT License - feel free to use this project for learning or commercial purposes.