import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const LinkContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Andrew Carrigan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer>
              <Link to="/">Home</Link>
              <Link to="/projects/mccarron-auto">Projects</Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col>
          <Link to="/about">
            <h1>Hello world</h1>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
