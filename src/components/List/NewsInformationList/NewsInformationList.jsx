import { Card, Button } from "react-bootstrap";
import './NewsInformationList.css';

const NewsInformationList = ({title, bodyText, image, source, sourceDomain, newsUrl}) => {

    return (
        <div className="news-list-container">
            <Card border="light" style={{ backgroundColor:"gray", marginTop: '1rem' }} className="news-card">
            <Card.Body>
                <div className="image-wrapper">
                    <Card.Img variant="top" src={image} className="news-image" />
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">({source}, {sourceDomain})</Card.Subtitle>
                <Card.Text>
                {bodyText}
                </Card.Text>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">
                        Read More
                    </Button>
                </a>
            </Card.Body>
            </Card>
        </div>
    )

}

export default NewsInformationList;