import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Particles from "react-tsparticles";

///////

const CustomNav = styled(Navbar)`
  box-shadow: -2px 8px 8px -4px #999;
  /* padding-top: 7rem; */
  padding-bottom: 2rem;
  /* background-color: black; */
  display: flex;
  align-items: space-evenly;
  flex-direction: column;
  /* linear-gradient(-135deg, rgb(0, 0, 0) 10%, transparent),
		repeating-linear-gradient(45deg, rgba(134, 40, 40, 1) 0%, rgba(31, 48, 94, 0.6) 5%, transparent 5%, transparent 10%),
		repeating-linear-gradient(-45deg, rgba(34, 76, 152, 0.4) 0%, rgba(31, 48, 94, 0.5) 5%, transparent 5%, transparent 10%);
	background-color: rgba(34, 76, 152, 0.25); */
`;

const NavLink = styled(AniLink)`
  color: gold;
  font-size: 1.25rem;
  font-family: "Montserrat";
  /* line-height: 1; */
  /* margin: 0 0.5rem 0 0; */
  padding: 1rem 5rem;
  text-decoration: none;
  text-shadow: 0 0 2px silver, 0 0 2px silver, 0 0 7px silver, 0 0 1px silver;

  :hover {
    text-decoration: none;
    color: teal;
  }

  &.current-page {
    text-decoration: underline;
  }
`;

const StyledDiv = styled("div")`
  /* background-color: green; */
  padding: 2rem;
  margin-top: 2rem;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled("h1")`
  color: yellow;
  //text-shadow: 5px 4px 4px grey;
  text-decoration: none;
  padding-left: 1rem;
  font-family: "Righteous";
  font-size: 5rem;
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, yellow, teal);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Header = () => {
  return (
    <>
      <StyledParticles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#008080",
            },
            links: {
              color: "#FFFF00",
              distance: 170,
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
      <CustomNav expand="lg">
        <StyledDiv>
          <Title>Andrew Carrigan</Title>
        </StyledDiv>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "yellow",
            borderColor: "teal",
            borderWidth: "2px",
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink
              paintDrip
              to="/projects/mccarron-auto"
              duration={1}
              color="yellow"
            >
              Home
            </NavLink>
            <NavLink
              paintDrip
              to="/projects/mccarron-auto"
              duration={1}
              color="yellow"
            >
              About
            </NavLink>
            <NavLink paintDrip to="/contact" duration={1} color="yellow">
              Contact
            </NavLink>
            <NavLink
              paintDrip
              to="/projects/mccarron-auto"
              duration={1}
              color="yellow"
            >
              Projects
            </NavLink>
            <NavLink
              paintDrip
              to="/projects/mccarron-auto"
              duration={1}
              color="yellow"
            >
              Articles
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </CustomNav>
    </>
  );
};

export default Header;
