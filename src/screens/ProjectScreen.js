import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import hero_dojo from "../img/hero_dojo.png";

const ProjectScreen = () => {
  return (
    <Container fluid>
      <h2 className="text-center">Projects</h2>

      <Row>
        <Col md={6}>
          <h2 className="text-center">Hero DOJO</h2>
          <p>
            A web app that allows users to search for a superhero or villain of
            their choice, look up physical traits and stats on them, and
            allowing two characters to be pitted against one another to see who
            would win in a fight
          </p>
        </Col>
        <Col md={6}>
          <div className="img-container">
            <img src={hero_dojo} alt="Hero DOJO" />
            <div className="buttons">
              <Button className="mr-4" as="button">Launch App</Button>
              <Button as="button">
                Source Code <i className="fab fa-github" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectScreen;
