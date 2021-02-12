import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";

///////

const StyledContainer = styled(Container)`
  background-color: white;
  position: fixed;
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
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

const Rule = styled.hr`
  background: teal;
  height: 5px;
  border: 0;
`;

const StyledButton = styled(Button)`
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #ffffff;
  background-color: teal;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 128, 128, 0.4);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 1rem;
  :hover {
    background-color: gold;
    box-shadow: 0px 15px 20px rgba(255, 215, 0, 0.4);
    color: teal;
    transform: translateY(-7px);
  }
`;

const LandingPage = () => {
  return (
    <>
      <StyledContainer fluid>
        <Row>
          <Col>
            <StyledP>
              Welcome to my corner of the web, stay a minute take your shoes off
              look around. Hope you enjoy your visit feel free to contact me
              with any questions.{" "}
              <span role="img" aria-label="happy emoji">
                🙂
              </span>
            </StyledP>
            <Fade right duration={2000}>
              <AniLink paintDrip to="/" duration={1} color="yellow">
                <StyledButton> Enter </StyledButton>
              </AniLink>
            </Fade>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default LandingPage;
