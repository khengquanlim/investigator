import { fetchNewsData } from "../../services/NewsService";
import { useState, useEffect } from "react";
import NewsInformationList from "../List/NewsInformationList/NewsInformationList";
import RetrievedSymbolList from "../List/RetrievedSymbolList/RetrievedSymbolList";
import StockSearchBar from "../Stock/StockSearchBar/StockSearchBar";
import { Col, Row, Container } from "react-bootstrap";

import './news.css';
const API_KEY1 = process.env.API_KEY;
const newsData = [
    {
        authors: ['Ananya Gairola'],
        banner_image: "https://cdn.benzinga.com/files/images/story/2024/10/13/Apple-Vision-Pro.jpeg?width=1200&height=800&fit=crop",
        category_within_source : "News",
        source : "Benzinga",
        source_domain : "www.benzinga.com",
        title : "Apple's Low-Cost Vision Pro Could Hit The Shelves Next Year - Everything You Need To Know About iPhone Maker's Plan To Challenge Meta - Meta Platforms  ( NASDAQ:META ) ",
        summary : "Apple Inc. AAPL is reportedly ramping up its efforts to compete with Meta Platforms Inc. META. The iPhone maker's discounted version of the first-generation mixed-reality headset, Vision Pro, could be ready by next year.",
        time_published : "20241014T020443",
        topics : [
            {relevance_score:  "1.0",
            topic: "Technology"}
        ],
        url : "https://www.benzinga.com/news/24/10/41306527/apples-low-cost-vision-pro-could-hit-the-shelves-next-year-everything-you-need-to-know-about-iphone"

    },
    {
        authors: ['test'],
        banner_image: "https://cdn.benzinga.com/files/images/story/2024/10/13/Apple-Vision-Pro.jpeg?width=1200&height=800&fit=crop",
        category_within_source : "News",
        source : "test",
        source_domain : "www.test.com",
        title : "Test PLNT ",
        summary : "Apple Inc. AAPL is reportedly ramping up its efforts to compete with Meta Platforms Inc. META. The iPhone maker's discounted version of the first-generation mixed-reality headset, Vision Pro, could be ready by next year.",
        time_published : "20241014T020443",
        topics : [
            {relevance_score:  "1.0",
            topic: "Technology"}
        ],
        url : "https://www.benzinga.com/news/24/10/41306527/apples-low-cost-vision-pro-could-hit-the-shelves-next-year-everything-you-need-to-know-about-iphone"

    },
]
const mockStockDataList = [
    {
        stockName: "Apple",
        stockSymbol: "AAPL"
    },
    {
        stockName: "Planet Fitness",
        stockSymbol: "PLNT"
    },
]
const News = () => {
    const [newsDataRetrieved, setNewsDataRetrieved] = useState([]);
    const [selectedStocks, setSelectedStocks] = useState([]);
    const [isFirstState, setIsFirstState] = useState(true);
    const [activeStock, setActiveStock] = useState(null); 

    const [textInput, setTextInput] = useState('');

    const retrieveNewsData = async () => {
        console.log(activeStock)
        console.log(selectedStocks[activeStock])
        // if (activeStock !== null && selectedStocks[activeStock]) {
        if (activeStock !== null && selectedStocks[activeStock]) {
            const stockSymbol = selectedStocks[activeStock].stockSymbol;
            const retrievedData = await fetchNewsData(stockSymbol);
            console.log(retrievedData);
            //for testing, use mock data if hit api limit 
            if(retrievedData.Information) {
                setNewsDataRetrieved(newsData); 
                console.log(newsDataRetrieved);
            } else {
                setNewsDataRetrieved(retrievedData.feed || []); 
            }
        }
    };

    useEffect(() => {
        retrieveNewsData();
    }, [activeStock, selectedStocks]);
    
    const handleConfirm = (retrievedStocks) => {
        setIsFirstState(false);
        
        if (!retrievedStocks || typeof retrievedStocks !== 'object') {
            console.error('Invalid stock format');
            return;
        }

        if (selectedStocks.length < 5) {
            console.error('retrievedStocks', retrievedStocks);
            setSelectedStocks([...selectedStocks, retrievedStocks]);
        } else {
            alert("You can only add up to 5 stocks.");
        }
    };

    return (
        <Container fluid>
            <div className="search-bar">
            <StockSearchBar onConfirm={handleConfirm}/>
            {/* {textInput && <AutoCompleteSuggestion query={textInput} onSelect={handleSelectSuggestion} />} */}
            </div>
            <Row>
                <Col sm={3} className="news-list-column">
                    <RetrievedSymbolList 
                        // selectedStocks={selectedStocks}
                        // use mock data if api limit
                        selectedStocks={selectedStocks} 
                        setActiveStock={setActiveStock}
                        activeStock={activeStock}
                    />
                </Col>
                <Col sm={9} className="news-list-column">
                    {newsDataRetrieved.length > 0 ? (
                        newsDataRetrieved.map((newsItem, index) => (
                            <NewsInformationList
                                key={index}
                                title={newsItem.title}
                                bodyText={newsItem.summary}
                                source={newsItem.source}
                                sourceDomain={newsItem.source_domain}
                                image={newsItem.banner_image}
                                newsUrl={newsItem.url}
                            />
                        ))
                    ) : (
                        <p>No news data available for the selected stock.</p>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default News;