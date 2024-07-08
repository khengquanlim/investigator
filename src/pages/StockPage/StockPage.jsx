import React, { useState } from 'react';
import StockSearchBar from '../../components/Stock/StockSearchBar/StockSearchBar';
import StockData from '../../components/Stock/StockData/StockData';

const StockPage = () => {
    const [selectedStock, setSelectedStock] = useState(null);
    const [isFirstState, setIsFirstState] = useState(true);
    const handleConfirm = (retrievedStock) => {
        setIsFirstState (false);
        console.log("retrievedStock - ", retrievedStock);
        setSelectedStock(retrievedStock);
        console.log("selectedStock - ", selectedStock);
    };
    return (
    <div>
        <h1>Search here for the stocks you would like to follow:</h1>
        <StockSearchBar onConfirm={handleConfirm} />
        {isFirstState && <p>Yet to start searching, please write 'AAPL' then hit search!</p>}
        {selectedStock && <StockData retrievedStock={selectedStock} />}
    </div>
  );
};

export default StockPage;