import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar fixed="top" bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-items">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutme">About Me</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
