import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const StyledFooter = styled("footer")`
  color: teal;
  padding: 1.75rem;
`;

const FooterCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Josefin Sans";
  font-size: 0.85rem;
  border-top: 3px solid #ddd;
  padding-top: 1rem;
`;

const StyledLinks = styled("p")``;

const FooterNav = styled(AniLink)`
  font-family: "Josefin Sans";
  color: teal;
  padding-top: .75rem;
`;

const StyledHiOutlineMail = styled(HiOutlineMail)`
  font-size: 1rem;
  margin: 0.5rem;
  color: teal;
`;

const StyledOutlinePhone = styled(HiOutlinePhone)`
  font-size: 1rem;
  margin: 0.5rem;
  color: teal;
`;

const FooterTitle = styled("text")`
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  font-family: "Josefin Sans";
`;

const CreatorContainer = styled("div")`
  padding-top: 1rem;
  font-size: 0.75rem;
`;

const CreatorText = styled("text")`
  display: flex;
  justify-content: center;
`;

const ContactLinks = styled("a")`
  :hover {
    color: red;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <FooterCol md={4}>
          <div>
            <FooterTitle>ajc.netlify.app</FooterTitle>
            <StyledLinks>
              <FooterNav
                paintDrip
                to="/"
                duration={1}
                color="yellow"
              >
                Home
              </FooterNav>
              |
              <FooterNav
                paintDrip
                to="/projects/mccarron-auto"
                duration={1}
                color="yellow"
              >
                Projects
              </FooterNav>
              |
              <FooterNav
                paintDrip
                to="/contact"
                duration={1}
                color="yellow"
              >
                Contact
              </FooterNav>
              <FooterNav
                paintDrip
                to="/about"
                duration={1}
                color="yellow"
              >
                About
              </FooterNav>

              |
            </StyledLinks>
          </div>
        </FooterCol>
        <FooterCol md={4}>
          <ContactLinks href="mailto: carrigan223@gmail.com">
            <StyledHiOutlineMail />
          </ContactLinks>
          |
          <ContactLinks href="tel:+14136722507">
            <StyledOutlinePhone />
          </ContactLinks>
        </FooterCol>
        <FooterCol md={4}>
          <CreatorContainer>
            <CreatorText>SITE BY CARRIGAN WEB DESIGN</CreatorText>
            <CreatorText>ANDREW CARRIGAN 2020©</CreatorText>
          </CreatorContainer>
        </FooterCol>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
