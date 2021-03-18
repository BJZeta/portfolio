import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import profile from "../img/profile.jpg";

const AboutMeScreen = () => {
  return (
    <div className="aboutscreen">
      <Row lg={3} className="justify-content-center">
        <Col>
          <img alt="Brandon Unzueta" className="profile-pic" src={profile} />
        </Col>
        <Col >
          <Col>
            <h3>About Me</h3>
            <p>
              My name is Brandon Unzueta, and I am a Full Stack React Developer.
              My coding skills include{" "}
              <strong>
                HTML, CSS, Javascript, Node, Express, MongoDB, Next.js, and
                React
              </strong>
            </p>
          </Col>
          <Row>
            <Col>
              <h3>Contact Information</h3>
              <p>Brandon Unzueta</p>
              <p>18014 1/2 Arline Ave</p>
              <p>Artesia, CA. 90701</p>
              <p>{`(562)788-0363`}</p>
              <p>unzueta.brandon@gmail.com</p>
            </Col>
            <Col>
              <Button className="resume-btn">Resume <i className="fas fa-file-alt"/></Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMeScreen;
