import { Chart } from 'chart.js';

const calculateMinMaxYValues = (data) => {
  if (!Array.isArray(data.datasets)) {
    console.error('Expected data.datasets to be an array.');
    return { min: undefined, max: undefined };
  }

  const allYValues = data.datasets.flatMap(dataset => {
    if (!Array.isArray(dataset.data)) {
      console.error('Expected dataset.data to be an array.');
      return [];
    }

    return dataset.data.map(point => {
      const y = parseFloat(point.y);
      if (isNaN(y)) {
        console.warn('Non-numeric y-value encountered:', point.y);
      }
      return y;
    }).filter(y => !isNaN(y));
  });

  const minY = allYValues.length ? Math.min(...allYValues) : undefined;
  const maxY = allYValues.length ? Math.max(...allYValues) : undefined;

  return { min: minY, max: maxY };
};

export const lineChartOptions = (data) => {
  const { min, max } = calculateMinMaxYValues(data);
  return {
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
        min: min,
        max: max,
      },
    },
  }
};

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

export const candleStickChartOptions = (data) => {
  const { min, max } = calculateMinMaxYValues(data);

  return {
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
        min: min,
        max: max,
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: false,
          },
          mode: 'xy',
        },
      },
    },
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
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 6,
        type: 'bar',
        fill: true,
        },
    ],
    };
};