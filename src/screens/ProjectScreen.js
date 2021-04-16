import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import hero_dojo from "../img/hero_dojo.png";

const ProjectScreen = () => {
  return (
    <Container fluid id="projects">
      <h2 className="text-center">Projects</h2>

      <Row>
        <Col md={6} className="px-5">
          <h2 className="text-center">Hero DOJO</h2>
          <p className="lead">
            A web app that allows users to search for a superhero or villain of
            their choice, look up physical traits and stats on them, and
            allowing two characters to be pitted against one another to see who
            would win in a fight
          </p>
          <h4>Goal of App:</h4>
          <p className="lead text-center" >
            -Show my ability to work with third party APIs to create unique web
            applications
          </p>
          <p className="lead text-center" >
            -Use Javascript to create logic that compares/contrast values between two objects
          </p>
        </Col>
        <Col md={6}>
          <div className="img-container">
            <img src={hero_dojo} alt="Hero DOJO" />
            <div className="buttons">
              <Button className="mr-4" as="a">
                Launch App
              </Button>
              <Button
                as="a"
                href="https://github.com/BJZeta/superhero-dojo"
                target="_blank"
                rel="noopener noreferrer"
              >
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
