import { fetchNewsData } from "../../services/NewsService";
import { useState, useEffect } from "react";
import InformationCard from "../InformationCard/InformationCard";
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

    }
]
const News = () => {
    const [newsDataRetrieved, setNewsDataRetrieved] = useState([]);

    const [testNewsData, setTestNewsData] = useState(newsData);
    const [selectedNews, setSelectedNews] = useState(newsData[0]);

    const [textInput, setTextInput] = useState('');
    const retrieveNewsData = async () => {
        const retrievedData = await fetchNewsData(textInput);
        console.log(retrievedData)
        setNewsDataRetrieved(retrievedData.feed);
    }

    return (
        <Container fluid>
            {/* { newsDataRetrieved ? <Row>
                <Col sm={12} className="news-list-column">
                    {newsDataRetrieved.map((newsItem, index) => (
                        <InformationCard
                            title={newsItem.title}
                            bodyText={newsItem.summary}
                            source={newsItem.source}
                            sourceDomain={newsItem.source_domain}
                            image={newsItem.banner_image}
                            newsUrl={newsItem.url}
                        />
                    ))}
                </Col>

            </Row> : "Unable to retrieve news data currently"
            } */}
            {/* Refactor search bar */}
            <div className="search-bar">
            <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value.toUpperCase())}
                placeholder="Enter stock symbol"
            />
            <button onClick={retrieveNewsData}>Add</button>
            {/* {textInput && <AutoCompleteSuggestion query={textInput} onSelect={handleSelectSuggestion} />} */}
            </div>
            { testNewsData ? <Row>
                            <Col sm={12} className="news-list-column">
                                {testNewsData.map((newsItem, index) => (
                                    <InformationCard
                                        title={newsItem.title}
                                        bodyText={newsItem.summary}
                                        source={newsItem.source}
                                        sourceDomain={newsItem.source_domain}
                                        image={newsItem.banner_image}
                                        newsUrl={newsItem.url}
                                    />
                                ))}
                            </Col>

                        </Row> : "Unable to retrieve news data currently"
                        }
        </Container>
    )
}

export default News;