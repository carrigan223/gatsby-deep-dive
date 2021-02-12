import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";
import ReactTypingEffect from "react-typing-effect";

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
  font-family: "Righteous";
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

const StyledRow = styled(Row)`
  justify-content: center;
  height: 50%;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <>
      <StyledContainer fluid>
        <StyledRow>
          <ReactTypingEffect
            text={[
              "Hi, I'm Andrew welcome to my corner of the web",
              "I'm a Developer I love to code",
              "Stay a minute and look around",
              "have fun 🙂",
            ]}
            typingDelay={1500}
            speed={100}
            eraseDelay={1500}
            eraseSpeed={100}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        style={
                          i % 2 === 0
                            ? {
                                color: "black",
                                fontFamily: "Righteous",
                              }
                            : {
                                color: "teal",
                                fontFamily: "Righteous",
                              }
                        }
                      >
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </StyledRow>
        <StyledRow>
          <Fade bottom duration={3500}>
            <AniLink paintDrip to="/home" duration={1} color="teal">
              <StyledButton> Enter </StyledButton>
            </AniLink>
          </Fade>
        </StyledRow>
      </StyledContainer>
    </>
  );
};

export default LandingPage;
