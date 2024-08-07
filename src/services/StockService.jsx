import axios from 'axios';

const API_KEY = 'process.env.API_KEY';
const API_KEY_BACKUP = 'process.env.API_KEY_BACKUP';
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStockValueData = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}/query`, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        apikey: API_KEY,
      },
    });
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const fetchStockSymbol = async (textInput) => {
  const searchURL = `${BASE_URL}/query`;
  try {
    const response = await axios.get(searchURL, {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: textInput,
        apikey: API_KEY_BACKUP,
      },
    });
    if (response.data && response.data.bestMatches && response.data.bestMatches.length > 0) {
      const symbol = response.data.bestMatches[0]['1. symbol'];
      return symbol;
    } else {
      throw new Error('No matching symbols found.');
    }
  } catch (error) {
    console.error('Error fetching stock symbol:', error);
    throw error;
  }
};