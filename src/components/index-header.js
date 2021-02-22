import React from "react";
import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import RenderInBrowser from "react-render-in-browser";

///////

const CustomNav = styled(Navbar)`
  box-shadow: -2px 8px 8px -4px #999;
  padding-bottom: 2rem;
  display: flex;
  align-items: space-evenly;
  flex-direction: column;
`;

const NavLink = styled(AniLink)`
  color: gold;
  font-size: 1.5rem;
  font-family: "Montserrat";
  padding: 1rem 5rem;
  text-decoration: none;
  text-shadow: 0px 3px 2px black, 0 1px 2px black, 0 0 0px black, 0 0 0px black;

  :hover {
    text-decoration: none;
    color: teal;
  }

  &.current-page {
    text-decoration: underline;
  }
`;

const StyledDiv = styled("div")`
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleShadow = styled("h1")`
  color: teal;
  font-family: "Righteous";
  font-size: 5rem;
  padding-left: 1rem;
  margin-top: none;
  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  -moz-transform: rotateX(210deg);
  -o-transform: rotateX(210deg);
  -webkit-transform: rotateX(210deg);
  transform: rotateX(210deg);
  perspective: 200px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    right top,
    right bottom,
    from(transparent),
    color-stop(10%, transparent),
    to(rgba(0, 0, 0, 0.4))
  );
  mask-image: linear-gradient(
    right top,
    right bottom,
    from(transparent),
    color-stop(20%, transparent),
    to(rgba(0, 0, 0, 0.4))
  );
`;

const Title = styled("h1")`
  color: yellow;
  text-decoration: none;
  padding-left: 1rem;
  font-family: "Righteous";
  font-size: 5rem;
  background-color: red;
  /* Create the gradient. */
  background-image: linear-gradient(45deg, black, teal);

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
  margin-bottom: 0;
`;

const Header = () => {
  return (
    <>
      <RenderInBrowser chrome only>
        {/* <StyledParticles
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
                value: ["#008080", "#FFD700"],
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
        /> */}
      </RenderInBrowser>
      <CustomNav expand="lg">
        <StyledDiv>
          <Title>Andrew Carrigan</Title>
          <TitleShadow>Andrew Carrigan</TitleShadow>
        </StyledDiv>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: null,
            borderColor: "teal",
            borderWidth: "2px",
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink paintDrip to="/home" duration={1} color="yellow">
              Home
            </NavLink>
            <NavLink paintDrip to="/about" duration={1} color="yellow">
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
          </Nav>
        </Navbar.Collapse>
      </CustomNav>
    </>
  );
};

export default Header;
