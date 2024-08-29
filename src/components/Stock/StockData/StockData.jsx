import React, { useState, useEffect } from 'react';
import { fetchStockValueData } from '../../../services/StockService.jsx';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { createLineChartData, createCandlestickChartData, lineChartOptions, candleStickChartOptions } from '../StockUtils/StockUtils.jsx';
import 'chartjs-adapter-date-fns';
import './StockData.css';

Chart.register(...registerables, zoomPlugin);

const StockData = ({ retrievedStocks }) => {
  const [lineChartData, setLineChartData] = useState(null);
  const [candlestickChartData, setCandlestickChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (!retrievedStocks) return;

      setLoading(true);
      setError(null);
      try {
        const data = await fetchStockValueData(retrievedStocks.stockSymbol);
        const timeSeries = data['Time Series (Daily)'];

        if (timeSeries) {
          const lineData = createLineChartData(timeSeries);
          const candlestickData = createCandlestickChartData(timeSeries);

          setLineChartData(lineData);
          setCandlestickChartData(candlestickData);
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
  }, [retrievedStocks]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>{retrievedStocks.stockName}, {retrievedStocks.stockSymbol}</h2>
      <div className="chart-container">
        {lineChartData && (
          <Line
            data={lineChartData}
            options={lineChartOptions(lineChartData)}
          />
        )}
      </div>
      <div className="chart-container">
        {candlestickChartData && (
          <Line
            data={candlestickChartData}
            options={candleStickChartOptions(candlestickChartData)}
          />
        )}
      </div>
    </div>
  );
};

export default StockData;