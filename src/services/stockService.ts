// import axios from 'axios';
import { StockData } from '../types/stock';

// Using Alpha Vantage demo API key - in production, use environment variables
// const API_KEY = 'demo';
// const BASE_URL = 'https://www.alphavantage.co/query';

// Popular stock symbols to display
// const STOCK_SYMBOLS = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'META', 'NVDA', 'NFLX'];

export const fetchStockData = async (): Promise<StockData[]> => {
  try {
    // Since Alpha Vantage has rate limits, we'll simulate data for demo
    // In production, you'd make actual API calls
    const mockData: StockData[] = [
      {
        symbol: 'AAPL',
        price: 175.43,
        change: 2.15,
        changePercent: 1.24,
        companyName: 'Apple Inc.'
      },
      {
        symbol: 'GOOGL',
        price: 2847.63,
        change: -15.42,
        changePercent: -0.54,
        companyName: 'Alphabet Inc.'
      },
      {
        symbol: 'MSFT',
        price: 378.85,
        change: 5.67,
        changePercent: 1.52,
        companyName: 'Microsoft Corporation'
      },
      {
        symbol: 'AMZN',
        price: 3342.88,
        change: -8.23,
        changePercent: -0.25,
        companyName: 'Amazon.com Inc.'
      },
      {
        symbol: 'TSLA',
        price: 248.42,
        change: 12.35,
        changePercent: 5.23,
        companyName: 'Tesla Inc.'
      },
      {
        symbol: 'META',
        price: 331.26,
        change: -2.14,
        changePercent: -0.64,
        companyName: 'Meta Platforms Inc.'
      },
      {
        symbol: 'NVDA',
        price: 875.28,
        change: 18.45,
        changePercent: 2.15,
        companyName: 'NVIDIA Corporation'
      },
      {
        symbol: 'NFLX',
        price: 445.87,
        change: -3.21,
        changePercent: -0.71,
        companyName: 'Netflix Inc.'
      }
    ];

    // Add some randomness to simulate real-time data
    return mockData.map(stock => ({
      ...stock,
      price: stock.price + (Math.random() - 0.5) * 10,
      change: stock.change + (Math.random() - 0.5) * 2,
      changePercent: stock.changePercent + (Math.random() - 0.5) * 0.5
    }));

  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw new Error('Failed to fetch stock data');
  }
};

// Function to fetch real data from Alpha Vantage (commented out due to rate limits)
/*
export const fetchRealStockData = async (symbol: string): Promise<StockData> => {
  const response = await axios.get(BASE_URL, {
    params: {
      function: 'GLOBAL_QUOTE',
      symbol: symbol,
      apikey: API_KEY
    }
  });

  const quote = response.data['Global Quote'];
  return {
    symbol: quote['01. symbol'],
    price: parseFloat(quote['05. price']),
    change: parseFloat(quote['09. change']),
    changePercent: parseFloat(quote['10. change percent'].replace('%', ''))
  };
};
*/