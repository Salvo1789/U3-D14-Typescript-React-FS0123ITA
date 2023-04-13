import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Article } from "../interfaces/Article";
import { Link } from "react-router-dom";
const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const data = await response.json();
        setArticles(data.results);
      } else {
        console.log("error fetching articles");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {
            articles.map((article) => (
              <Col xs={12} md={6} key={article.id} className="mb-2 text-center">
                <Card
                  className="d-flex flex-column rounded"
                  style={{ height: 600, maxWidth: 500 }}
                >
                  <Card.Img
                    variant="top"
                    src={article.image_url}
                    style={{ height: 250 }}
                  />
                  <Card.Body className="bg-info">
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text className="text-light">
                      {article.summary}
                    </Card.Text>
                    <Link to={"/details/" + article.id}>
                      <Button variant="light" className="mt-auto border border-dark">
                        Vedi Dettagli
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ArticleList;
