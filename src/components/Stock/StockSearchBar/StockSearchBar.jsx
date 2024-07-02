import React, { useState, useEffect } from 'react';
import { fetchStockSymbol } from '../../../services/StockService';

const StockSearchBar = ({ onConfirm }) => {
  const [textInput, setTextInput] = useState('');

  const handleSearch = async () => {
    try {
      const symbol = await fetchStockSymbol(textInput);
      onConfirm(symbol); 
    } catch (error) {
      console.error('Error fetching stock symbol:', error);
    }
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
    </div>
  );
};

export default StockSearchBar;