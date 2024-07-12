import axios from 'axios';

const API_KEY = 'process.env.API_KEY';
const API_KEY_BACKUP = 'process.env.API_KEY_BACKUP';
const BASE_URL = 'https://www.alphavantage.co/query';

const searchAlphaVantageURL = `${BASE_URL}/query`;
export const fetchStockValueData = async (symbol) => {
  try {
    const response = await axios.get(searchAlphaVantageURL, {
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
  try {
    const response = await axios.get(searchAlphaVantageURL, {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: textInput,
        apikey: API_KEY,
      },
    });
    console.log("What is the response.data --- " , response.data );
    console.log("What is the response.data --- " , response.data.bestMatches[0] );
    if (response.data && response.data.bestMatches && response.data.bestMatches.length > 0) {
      const stockSymbol = response.data.bestMatches[0]['1. symbol'];
      const stockName = response.data.bestMatches[0]['2. name'];
      return {stockName, stockSymbol};
    } else {
      throw new Error('No matching symbols found.');
    }
  } catch (error) {
    console.error('Error fetching stock symbol:', error);
    throw error;
  }
}

export const fetchStockSuggestions = async (query) => {
  try {
    const response = await axios.get(searchAlphaVantageURL, {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: query,
        apikey: API_KEY,
      },
    });
    const matches = response.data.bestMatches.slice(0, 10);
    return matches;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}