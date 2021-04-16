import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import html_css_badge from "../img/html_css_badge.png";
import js_badge from "../img/js_badge.png";
import sql_nosql_badge from "../img/sql_nosql_badge.png";
import node_express from "../img/node_express.png";
import react_badge from "../img/react_badge.png";

const EducationScreen = () => {
  return (
    <Container fluid className="experience-screen text-center" id="education">
      <Row className="text-center justify-content-center py-4 ">
        <Col md={10}>
          <h2 className="text-secondary">Education</h2>
          <h4 className="text-secondary text-center">
            University of California, Irvine: School for Continuing Education;
            Coding BootCamp (November 2019)
          </h4>
          <div className="badges">
            <a
              href="https://www.credly.com/badges/1b88bd1a-8689-4d23-97ab-79c4e08fc5bc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={html_css_badge} alt="HTML/CSS Badge" />
            </a>

            <a
              href="https://www.credly.com/badges/4b3db9fa-4a55-4bcb-b27e-9dca90b534c7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={js_badge} alt="Javascript and jQuery Badge" />
            </a>

            <a
              href="https://www.credly.com/badges/6ca78f91-7d6d-4e51-9ad1-0873f9aaa44b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={node_express} alt="Node and Express Badge" />
            </a>

            <a
              href="https://www.credly.com/badges/83ff4351-8277-4de9-84c9-24f696e46b30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sql_nosql_badge} alt="SQL and NoSQL Badge" />
            </a>

            <a
              href="https://www.credly.com/badges/bb5a2b42-0c84-4384-8d20-fe4eb77954f1"
              target="_blank"
              rel="noopener noreferrer"
            ><img src={react_badge} alt="React.js Badge" /></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationScreen;
