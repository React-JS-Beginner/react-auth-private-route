import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import features from "../images/features.svg";

const Features = () => {
  return (
    <Container className="w-75 mx-auto mb-5 pb-5">
      <h2 className="text-center mt-5 mb-5">Product Features</h2>
      <Row xs={3} md={3} className="g-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={features} />
              <Card.Body className="text-center">
                <Card.Title>Product Features</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <div className="text-center">
                <Button variant="outline-dark pe-4 ps-4">Order</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
