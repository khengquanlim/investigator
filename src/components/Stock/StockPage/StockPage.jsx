import React, { useState } from 'react';
import StockSearchBar from '../StockSearchBar/StockSearchBar';
import StockData from '../StockData/StockData';

const StockPage = () => {
    const [selectedSymbol, setSelectedSymbol] = useState(''); 
    const [isFirstState, setIsFirstState] = useState(true);
    const handleConfirm = (symbol) => {
        setIsFirstState (false);
        setSelectedSymbol(symbol);
    };
    return (
    <div>
        <h1>Search here for the stocks you would like to follow:</h1>
        <StockSearchBar onConfirm={handleConfirm} />
        {isFirstState && <p>Yet to start searching, please write 'AAPL' then hit search!</p>}
        {selectedSymbol && <StockData symbol={selectedSymbol} />}
    </div>
  );
};

export default StockPage;