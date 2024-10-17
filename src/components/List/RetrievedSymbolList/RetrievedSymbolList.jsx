import { Card } from "react-bootstrap";
import './RetrievedSymbolList.css';

const RetrievedSymbolList = ({ selectedStocks }) => {  // Destructure props here

    return (
        <div className="news-list-container">
            {selectedStocks.length > 0 ? (
                selectedStocks.map((stock, index) => (
                    <Card key={index} border="light" style={{ backgroundColor: "gray", marginTop: '1rem' }} className="news-card">
                        <Card.Body>
                            <Card.Title>{stock.stockName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">({stock.stockSymbol})</Card.Subtitle>
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