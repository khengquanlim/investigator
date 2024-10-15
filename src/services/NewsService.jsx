import axios from 'axios';
const API_KEY = 'process.env.API_KEY';
const API_KEY_BACKUP = 'process.env.API_KEY_BACKUP';
const BASE_URL = 'https://www.alphavantage.co/query';
const searchAlphaVantageURL = `${BASE_URL}/query`;

export const fetchNewsData = async (symbol) => {
    try {
        const response = await axios.get('https://www.alphavantage.co/query', {
            params: {
              function: 'NEWS_SENTIMENT',
              tickers: symbol,
              apikey: API_KEY,
            },
          });
        return response.data;
    } catch (error) {
        console.log("Error from retrieving news data: ", error);
    }
}