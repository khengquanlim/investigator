import { fetchNewsData } from "../../services/NewsService";
import { useState, useEffect } from "react";
import InformationCard from "../InformationCard/InformationCard";
import { Col, Row, Container } from "react-bootstrap";

import './news.css';
const API_KEY1 = process.env.API_KEY;

const News = () => {
    const [newsDataRetrieved, setNewsDataRetrieved] = useState([]);
    useEffect(() => {
        const retrieveNewsData = async () => {
            const ticker = 'AAPL';
            const retrievedData = await fetchNewsData();
            setNewsDataRetrieved(retrievedData.feed);
        }
        retrieveNewsData();
    }, []);
    return (
        <Container fluid>
            { newsDataRetrieved ? <Row>
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
        </Container>
    )
}

export default News;