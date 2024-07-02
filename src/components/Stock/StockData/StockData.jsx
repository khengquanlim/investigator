import React, { useState, useEffect } from 'react';
import { fetchStockValueData } from '../../../services/StockService.jsx';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import './StockData.css';

Chart.register(...registerables);

const StockData = ({ symbol }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: 'white',  
        },
      },
      y: {
        ticks: {
          color: 'white',  
        },
      },
    }
  };
  
  useEffect(() => {
    const getData = async () => {
      if (!symbol) return;

      setLoading(true);
      setError(null);
      try {
        const data = await fetchStockValueData(symbol);
        const timeSeries = data['Time Series (Daily)'];
        
        if (timeSeries) {
          const labels = Object.keys(timeSeries).reverse();
          const highValues = labels.map(date => timeSeries[date]['2. high']);
          const lowValues = labels.map(date => timeSeries[date]['3. low']);

          setChartData({
            labels,
            datasets: [
              {
                label: 'High',
                data: highValues,
                borderColor: 'black',
                borderWidth: 1,
                fill: false,
              },
              {
                label: 'Low',
                data: lowValues,
                borderColor: 'red',
                borderWidth: 1,
                fill: false,
              },
            ],
          });
        } else {
          setError('Time Series data is not available.');
        }
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [symbol]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {chartData && (
      <div>
        <h2>{symbol}</h2>
        <div className="chart-container">
        <Line 
          data={chartData}
          options={options}
        />         
        </div>
      </div>
      )}
    </div>
  );
};

export default StockData;