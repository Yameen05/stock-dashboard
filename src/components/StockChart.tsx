import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { StockData } from '../types/stock';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StockChartProps {
  stocks: StockData[];
}

const StockChart: React.FC<StockChartProps> = ({ stocks }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Stock Performance (%)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: stocks.map(stock => stock.symbol),
    datasets: [
      {
        label: 'Change %',
        data: stocks.map(stock => stock.changePercent),
        backgroundColor: stocks.map(stock => 
          stock.changePercent >= 0 ? 'rgba(34, 197, 94, 0.8)' : 'rgba(239, 68, 68, 0.8)'
        ),
        borderColor: stocks.map(stock => 
          stock.changePercent >= 0 ? 'rgba(34, 197, 94, 1)' : 'rgba(239, 68, 68, 1)'
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StockChart;