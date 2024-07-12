import React, { useState } from 'react';
import StockSearchBar from '../../components/Stock/StockSearchBar/StockSearchBar';
import StockData from '../../components/Stock/StockData/StockData';

const StockPage = () => {
    const [selectedStocks, setSelectedStocks] = useState([]);
    const [isFirstState, setIsFirstState] = useState(true);
    const handleConfirm = (retrievedStocks) => {
        setIsFirstState (false);
        if (selectedStocks.length < 5) {
          setSelectedStocks([...selectedStocks, retrievedStocks]);
        } else {
          alert("You can only add up to 5 stocks.");
        }
    };
    return (
    <div>
        <h1>Search here for the stocks you would like to follow:</h1>
        <p>Type 'APPLE' or 'TESLA' and hit add if you are sure of the symbol.</p>
        <p>If not, wait for the auto complete to complete in a few seconds and select from there.</p>
        <StockSearchBar onConfirm={handleConfirm} />
        {isFirstState && <p>Yet to start searching, please write 'AAPL' then hit search!</p>}
        {selectedStocks.map((stock, index) => (
                <StockData key={index} retrievedStocks={stock} />
        ))}
    </div>
  );
};

export default StockPage;