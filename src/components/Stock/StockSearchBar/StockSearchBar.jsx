import React, { useState} from 'react';
import AutoCompleteSuggestion from './AutoCompleteSuggestion/AutoCompleteSuggestion';
import { fetchStockSymbol } from '../../../services/StockService';

const StockSearchBar = ({ onConfirm }) => {
  const [textInput, setTextInput] = useState('');

  const handleAddStockData = async () => {
    try {
      const retrievedStocks = await fetchStockSymbol(textInput);
      onConfirm(retrievedStocks); 
    } catch (error) {
      console.error('Error fetching retrievedStocks:', error);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setTextInput(suggestion['1. symbol']);    
    onConfirm({ stockName: suggestion['2. name'], stockSymbol: suggestion['1. symbol'] });

  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value.toUpperCase())}
        placeholder="Enter stock symbol"
      />
      <button onClick={handleAddStockData}>Add</button>
      {textInput && <AutoCompleteSuggestion query={textInput} onSelect={handleSelectSuggestion} />}
    </div>
  );
};

export default StockSearchBar;