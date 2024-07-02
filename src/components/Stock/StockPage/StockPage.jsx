import React, { useState } from 'react';
import StockSearchBar from '../StockSearchBar/StockSearchBar';
import StockData from '../StockData/StockData';

const StockPage = () => {
    const [selectedSymbol, setSelectedSymbol] = useState('AAPL'); 
    const handleConfirm = (symbol) => {
        setSelectedSymbol(symbol);
    };
    return (
    <div>
      <StockSearchBar onConfirm={handleConfirm} />
      {selectedSymbol && <StockData symbol={selectedSymbol} />}
    </div>
  );
};

export default StockPage;