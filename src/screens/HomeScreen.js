import React from "react";
import { Row } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Row lg="12" className="justify-content-center">
        <h4>Hello, My Name is</h4>
      </Row>
      <Row lg="12" className="justify-content-center">
        <h1>Brandon Unzueta</h1>
      </Row>
      <Row lg="12" className="justify-content-center ">
        <h4>React Developer</h4>
      </Row>
    </div>
  );
};

export default HomeScreen;
