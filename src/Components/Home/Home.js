import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Welcome</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Welcome</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Welcome</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
