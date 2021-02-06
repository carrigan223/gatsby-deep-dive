import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import AboutNav from "../components/about-nav";
import Footer from "../components/footer";

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledMeAndNacho = styled(Img)`
  height: 390px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
  box-shadow: 1px 8px 8px 4px #999;
  border-radius: 15%;
`;

const StyledNachoSunset = styled(Img)`
  height: 390px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
  box-shadow: 1px 8px 8px 4px #999;
  border-radius: 15%;
`;

const PageTitile = styled("h1")`
  color: yellow;
  padding: 1.5rem;
  font-family: "Righteous";
  font-size: 4.5rem;
  background-color: gold;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, teal, gold, teal);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const StyledText = styled("p")`
  padding: 1.5rem;
  font-family: "Montserrat";
  font-size: 1.25rem;
`;

const StyledPicCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const AboutPage = () => {
  const { nacho, sunset, snooze } = useStaticQuery(graphql`
    query {
      nacho: file(relativePath: { eq: "me_and_nacho.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sunset: file(relativePath: { eq: "nacho_sunset.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snooze: file(relativePath: { eq: "snooze.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <StyledParticles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#f0f0f0",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#008080", "#FFFF00"],
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
                value_area: 800,
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
      <AboutNav />
      <Container fluid>
        <Row>
          <Col>
            <PageTitile>A little about me ...</PageTitile>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <StyledText>
              If you've made it this far you probaly already know my names
              Andrew Carrigan, I'm a developer from San Diego, Ca with a focus
              on the front end. I have experience with a multitude of libraries
              and framework and a passion for creation. I love learning new
              things and you can find me with my head buried in a computer more
              often then not. One of my favorite aspects of development is the
              endless supply of new technologies to experience.
            </StyledText>
          </Col>
          <Col md={6}>
            <StyledMeAndNacho
              fluid={nacho.sharp.fluid}
              alt="Andrew and Nacho"
            />
          </Col>
        </Row>
        <Row>
          <StyledPicCol md={6}>
            <StyledMeAndNacho
              fluid={snooze.sharp.fluid}
              alt="Andrew and Chelsea at Lunch"
            />
          </StyledPicCol>
          <Col md={6}>
            <StyledText>
              When not diving head first into code i love taking advantage of
              San Diego's wonderful weather, be that at the beach with my dog
              Nacho and partner in crime Chelsea, or finding new trails to
              explore hiking.
            </StyledText>
            <StyledText>
              Along with enjoying nature I am also a big basketball fan (while i
              live in san diego i'm origanlly from massachusetts, go celtics!),
              an avid gamer, and anime fan. On the more technical side I am also
              love learning about new technologies and have recently been
              learning about block chain development. Feel free to contact me
              with any question or if any techies have cool project ideas you
              want to colaborate on. Hopefully you enjoyed learning a little
              about me and feel free get ahold of me!
            </StyledText>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 8, offset: 2}}>
            <StyledNachoSunset
              fluid={sunset.sharp.fluid}
              alt="Nacho on the beach at sunset"
            />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default AboutPage;
