import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Nav, Navbar } from "react-bootstrap";

const CustomNav = styled(Navbar)`
  padding-bottom: 0.5rem;
  display: flex;
  align-items: space-evenly;
  flex-direction: column;
  border-bottom: 4px solid teal;
`;

const NavLink = styled(AniLink)`
  color: teal;
  font-size: 1.25rem;
  font-family: "Righteous";
  padding: 1rem 5rem 0rem 5rem;
  text-decoration: none;
  text-shadow: 0 0 2px gold, 0 0 2px gold, 0 0 4px gold, 0 0 2px gold;

  :hover {
    text-decoration: none;
    color: yellow;
  }

  &.current-page {
    text-decoration: underline;
  }
`;

const AboutNav = () => {
  return (
    <>
      <CustomNav expand="lg">
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
            <NavLink
              paintDrip
              to="/"
              duration={1}
              color="yellow"
            >
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
      </CustomNav>{" "}
    </>
  );
};

export default AboutNav;
