import { Chart } from 'chart.js';

export const createLineChartData = (timeSeries) => {
  const labels = Object.keys(timeSeries).reverse();
  const highValues = labels.map(date => timeSeries[date]['2. high']);
  const lowValues = labels.map(date => timeSeries[date]['3. low']);

  return {
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
  };
};

export const createCandlestickChartData = (timeSeries) => {
    const labels = Object.keys(timeSeries).reverse();

    const highData = labels.map((date) => ({
      x: date,
      y: parseFloat(timeSeries[date]["2. high"]),
    }));
  
    const lowData = labels.map((date) => ({
      x: date,
      y: parseFloat(timeSeries[date]["3. low"]),
    }));

    const candlestickData = labels.map((date) => {
      const dayData = timeSeries[date];
      return {
        x: date,
        o: parseFloat(dayData["1. open"]),
        h: parseFloat(dayData["2. high"]),
        l: parseFloat(dayData["3. low"]),
        c: parseFloat(dayData["4. close"]),
      };
    });
  
    const openCloseData = candlestickData.map(data => ({
      x: data.x,
      y: [data.o, data.c],
    }));
    
    return {
    labels,
    datasets: [
        {
        label: 'High',
        data: highData,
        borderColor: 'green',
        borderWidth: 1,
        type: 'line',
        fill: false,
        },
        {
        label: 'Low',
        data: lowData,
        borderColor: 'red',
        borderWidth: 1,
        type: 'line',
        fill: false,
        },
        {
        label: 'Open-Close',
        data: openCloseData,
        borderColor: 'blue',
        borderWidth: 6,
        type: 'bar',
        },
    ],
    };
};