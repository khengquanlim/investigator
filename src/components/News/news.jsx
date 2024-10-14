import { fetchNewsData } from "../../services/NewsService";
import { useState, useEffect } from "react";
import InformationCard from "../InformationCard/InformationCard";
import { Col, Row, Container } from "react-bootstrap";

import './news.css';
const API_KEY1 = process.env.API_KEY;
console.log("API_KEY ", API_KEY1)

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
    const [testNewsData, setTestNewsData] = useState(newsData);
    const [selectedNews, setSelectedNews] = useState(newsData[0]);
    const [newsDataRetrieved, setNewsDataRetrieved] = useState([]);
    useEffect(() => {
        const retrieveNewsData = async () => {
            const ticker = 'AAPL';
            const retrievedData = await fetchNewsData();
            console.log(retrievedData);
            setNewsDataRetrieved(retrievedData.feed);
        }
        retrieveNewsData();
    }, []);
    return (
        <Container fluid>
            { newsData ? <Row>
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
            }
            {/* Testing News
            <div> 
            {newsData ? 
            <div>
            {newsData.map((newsInfo, index) => ( 
                <div className="news-container">
                    <p key={index}>
                        <img src={newsInfo.banner_image} alt="banner news image" />
                        <div>{newsInfo.title}</div>
                        <div>{newsInfo.url}</div>
                    </p>
                </div>
            ))} 
            </div> : "Unable to retrieve news data currently"}

            </div> */}
        </Container>
    )
}
// feed
// : 
// Array(50)
// 0
// : 
// authors
// : 
// ['Ananya Gairola']
// banner_image
// : 
// "https://cdn.benzinga.com/files/images/story/2024/10/13/Apple-Vision-Pro.jpeg?width=1200&height=800&fit=crop"
// category_within_source
// : 
// "News"
// overall_sentiment_label
// : 
// "Somewhat-Bullish"
// overall_sentiment_score
// : 
// 0.220367
// source
// : 
// "Benzinga"
// source_domain
// : 
// "www.benzinga.com"
// summary
// : 
// "Apple Inc. AAPL is reportedly ramping up its efforts to compete with Meta Platforms Inc. META. The iPhone maker's discounted version of the first-generation mixed-reality headset, Vision Pro, could be ready by next year."
// ticker_sentiment
// : 
// (2) [{…}, {…}]
// time_published
// : 
// "20241014T020443"
// title
// : 
// "Apple's Low-Cost Vision Pro Could Hit The Shelves Next Year - Everything You Need To Know About iPhone Maker's Plan To Challenge Meta - Meta Platforms  ( NASDAQ:META ) "
// topics
// : 
// [{…}]
// url
// :
export default News;