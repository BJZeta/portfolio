import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import profile from "../img/profile.jpg";

const AboutMeScreen = () => {
  return (
    <Container fluid className="aboutscreen" id="aboutme">
      <Row lg={3} md={1} className="justify-content-center mt-3">
        <Col className="profile-pic">
          <img alt="Brandon Unzueta" src={profile} />
        </Col>
        <Col>
          <h3>About Me</h3>
          <p>
            My name is Brandon Unzueta, and I am a Full Stack React Developer.
            My skills in software include{" "}
            <strong>
              HTML, CSS, Javascript, Node, Express, MongoDB, Next.js, and React
            </strong>
          </p>
        </Col>
        <Col className="text-center">
          <h3>Contact Information</h3>
          <p>Brandon Unzueta</p>
          <p>18014 1/2 Arline Ave</p>
          <p>Artesia, CA. 90701</p>
          <p>{`(562)788-0363`}</p>
          <p>unzueta.brandon@gmail.com</p>
          <Button className="resume-btn">
            Resume <i className="fas fa-file-alt" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMeScreen;
