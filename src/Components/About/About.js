import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="w-75 mx-auto mt-5 pt-5">
      <Card className="text-center">
        <Card.Header>Accusantium</Card.Header>
        <Card.Body>
          <h3>Lorem Ipsum Dolor</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aut
            officia fugiat, culpa modi quibusdam rerum sit minus fuga expedita
            molestias libero maxime dolor mollitia veritatis laboriosam amet
            sint earum nulla cumque aspernatur. Ad veritatis, fugit labore minus
            laborum inventore quae accusamus mollitia culpa ab sapiente
            voluptatibus voluptate quos necessitatibus est temporibus enim nemo
            aperiam? Mollitia distinctio odit velit earum dolorem ipsum, culpa
            fuga sit dolores quam similique repellat odio nobis necessitatibus
            harum tenetur qui sint tempore repellendus in! Illum quo ullam
            cumque soluta facilis omnis ducimus fuga maxime explicabo molestiae
            odit, officia provident reprehenderit dolores obcaecati repellendus
            earum quos velit tenetur necessitatibus accusantium doloribus.
            Laboriosam ab enim vitae perferendis qui excepturi, iste aut sunt
            ullam inventore facilis accusamus? Nemo consequatur voluptatibus
            non, libero nam similique hic? Beatae, pariatur debitis?
          </p>
        </Card.Body>
        <Card.Footer className="text-muted">Since 1998</Card.Footer>
      </Card>
    </Container>
  );
};

export default About;
