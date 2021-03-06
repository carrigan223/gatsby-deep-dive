import * as React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-tsparticles";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";
import RenderInBrowser from "react-render-in-browser";

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled("div")`
  padding-top: 3.5rem;
`;

const HeaderText = styled("h1")`
  color: yellow;
  //text-shadow: 5px 4px 4px grey;
  text-decoration: none;
  padding-left: 1rem;
  font-family: "Righteous";
  font-size: 3.5rem;
  background-color: yellow;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, black, teal);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;
`;

const StyledContainer = styled(Container)`
  padding-top: 2.5rem;
  padding-bottom: 6rem;
`;

const ContactPage = () => {
  return (
    <StyledContainer fliuid>
      <RenderInBrowser chrome only>
        <StyledParticles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#FFFFFF",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: ["#008080", "#FFFF00"],
              },
              links: {
                color: "#000000",
                distance: 100,
                enable: true,
                opacity: 0.75,
                width: 1.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 1000,
                },
                value: 90,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </RenderInBrowser>
      <Row>
        <Col>
          <HeaderContainer>
            <HeaderText>
              Drop a line for quotes, questions, or just to say hi .....
            </HeaderText>
          </HeaderContainer>
        </Col>
      </Row>
      <ContactForm />
      <Footer />
    </StyledContainer>
  );
};

export default ContactPage;
