import React from "react";
import { Carousel, Container } from "react-bootstrap";
import slider1 from '../images/slide1.svg'
import slider2 from '../images/slide2.svg'
import slider3 from '../images/slide3.svg'

const Home = () => {
  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
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
            src={slider2}
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
            src={slider3}
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
