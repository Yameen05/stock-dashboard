import React, { useState, useEffect } from 'react';
import { StockData } from './types/stock';
import { fetchStockData } from './services/stockService';
import StockTable from './components/StockTable';
import StockChart from './components/StockChart';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const loadStockData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchStockData();
        setStocks(data);
      } catch (err) {
        setError('Failed to load stock data. Please try again later.');
        console.error('Error loading stock data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadStockData();

    // Refresh data every 30 seconds
    const interval = setInterval(loadStockData, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchStockData();
      setStocks(data);
    } catch (err) {
      setError('Failed to refresh stock data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">📉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Data</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={handleRefresh}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">📈 Stock Dashboard</h1>
            <p className="text-gray-600">Real-time stock market data and analytics</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
              >
                <span>🔄</span>
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
              
              <button
                onClick={() => setShowChart(!showChart)}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
              >
                <span>{showChart ? '📊' : '📈'}</span>
                {showChart ? 'Show Table' : 'Show Chart'}
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>

          {/* Content */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="space-y-6">
              {showChart ? (
                <StockChart stocks={stocks} />
              ) : (
                <StockTable stocks={stocks} />
              )}
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {stocks.filter(s => s.changePercent > 0).length}
                  </div>
                  <div className="text-gray-600">Gainers</div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {stocks.filter(s => s.changePercent < 0).length}
                  </div>
                  <div className="text-gray-600">Losers</div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {stocks.length}
                  </div>
                  <div className="text-gray-600">Total Stocks</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
