import React, { useState} from 'react';
import AutoCompleteSuggestion from './AutoCompleteSuggestion/AutoCompleteSuggestion';
import { fetchStockSymbol } from '../../../services/StockService';

const StockSearchBar = ({ onConfirm }) => {
  const [textInput, setTextInput] = useState('');

  const handleSearch = async () => {
    try {
      const retrievedStock = await fetchStockSymbol(textInput);
      onConfirm(retrievedStock); 
    } catch (error) {
      console.error('Error fetching retrievedStock:', error);
    }
  };

  const handleSelectSuggestion = (retrievedStock) => {
    setTextInput(retrievedStock);
    handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value.toUpperCase())}
        placeholder="Enter stock symbol"
      />
      <button onClick={handleSearch}>Search</button>
      {/* {textInput && <AutoCompleteSuggestion query={textInput} onSelect={handleSelectSuggestion} />} */}
    </div>
  );
};

export default StockSearchBar;