import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/index-header";
import Breathe from "../components/breathe";
import Footer from "../components/footer";
import AniLink from "gatsby-plugin-transition-link/AniLink";

///////

const StyledContainer = styled(Container)`
  position: relative;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(229, 235, 235);
  background: linear-gradient(
    49.2deg,
    rgba(229, 235, 235, 0.9906337535014006) 46%,
    rgba(254, 254, 254, 1) 48%
  );
`;

const StyledP = styled("p")`
  padding: 1rem;
  font-family: "Amatic SC";
  font-size: 1.75rem;
`;

const StyledQuote = styled("p")`
  padding: 3rem 1rem;
  font-family: "Amatic SC";
  font-size: 1.75rem;
  font-style: italic;
  font-weight: bolder;
`;

const StyledAni = styled(AniLink)`
  color: teal;
  :hover {
    color: teal;
  }
`;

const HomePage = () => {
  return (
    <>
      <Header />
      <StyledContainer fluid>
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            <StyledQuote>
              Most good programmers do programming not because they expect to
              get paid or get adulation by the public, but because it is fun to
              program. - Linus Torvalds
            </StyledQuote>
          </Col>
          <Col xs={12}>
            <StyledP>
              Hello welcome to my little slice of the internet, i'm Andrew
              Carrigan a Front End Developer currently residing in sunny San
              Diego. I have an unquenchable thirst for knowledge and a passion
              for creating. If im not jumping down the JS rabbit hole you can
              usually find me at the beach with either a dog or surfboard. Feel
              free to{" "}
              <StyledAni paintDrip to="/contact" duration={1} color="teal">
                Contact
              </StyledAni>{" "}
              me whether intersted in my services for your project or just to
              say hi!
            </StyledP>
          </Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
          <Col xs={12}>Hello world</Col>
        </Row>
        <Footer />
      </StyledContainer>
    </>
  );
};

export default HomePage;
