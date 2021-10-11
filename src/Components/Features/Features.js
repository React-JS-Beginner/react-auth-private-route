import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import features from "../images/features.svg";

const Features = () => {
  return (
    <Container className="mt-5 mb-5 pb-5">
      <Row xs={3} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={features} />
              <Card.Body>
                <Card.Title>Product Features</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="outline-secondary">Order</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
