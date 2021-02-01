import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

///////

const CustomNav = styled(Navbar)`
  box-shadow: -2px 8px 8px -4px #999;
  /* padding-top: 7rem; */
  padding-bottom: 2rem;
  background-color: black;
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
  padding: 0.45rem;
  text-decoration: none;
  text-shadow: 0 0 2px silver, 0 0 2px silver, 0 0 7px silver, 0 0 1px silver;

  :hover {
    text-decoration: underline;
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
  color: white;
  text-shadow: 5px 4px 4px grey;
  color: white;
  text-decoration: none;
  padding-left: 1rem;
  font-family: "Rajdhani";
  font-size: 5rem;
`;

const Header = () => {
  return (
    <CustomNav expand="lg" bg="dark">
      <StyledDiv>
        <Title>Andrew Carrigan</Title>
      </StyledDiv>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
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
          <NavLink
            paintDrip
            to="/projects/mccarron-auto"
            duration={1}
            color="yellow"
          >
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
  );
};

export default Header;
