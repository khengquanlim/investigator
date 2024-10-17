import { useState } from "react";
import { Card } from "react-bootstrap";

import './RetrievedSymbolList.css';

const RetrievedSymbolList = ({ selectedStocks, setActiveStock, activeStock }) => {
    return (
        <div className="news-list-container">
            {selectedStocks.length > 0 ? (
                selectedStocks.map((stock, index) => (
                    <Card 
                        key={index} 
                        border="light" 
                        style={{
                            backgroundColor: activeStock === index ? "lightblue" : "gray", 
                            marginTop: '1rem' }} 
                        className="news-card"
                        onClick={() => setActiveStock(index)}
                    >
                        <Card.Body>
                            <Card.Title>{stock.stockName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{stock.stockSymbol}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No stocks selected.</p>
            )}
        </div>
    );
}

export default RetrievedSymbolList;