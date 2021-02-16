import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/index-header";
import Footer from "../components/footer";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import IconGrid from "../components/icon-grid";
import Github from "../svg/github-icon.svg";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";

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
  color: #131313;
  letter-spacing: 0.15em;
`;
const StyledP2 = styled("p")`
  padding: 1rem;
  font-family: "Amatic SC";
  font-size: 1.75rem;
  display: flex;
  justify-content: center;
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

const StyledMe = styled(Img)`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 8px 8px 4px #999;
  margin-bottom: 2.5rem;
`;

const Rule = styled.hr`
  background: teal;
  height: 5px;
  border: 0;
`;

const CenterItem = styled("div")`
  display: flex;
  justify-content: center;
`;

const StyledGit = styled(Github)`
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
`;

const HomePage = () => {
  const { me } = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Header />

      <StyledContainer fluid>
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            <Fade bottom cascade duration={1500}>
              <StyledQuote>
                Most good programmers do programming not because they expect to
                get paid or get adulation by the public, but because it is fun
                to program. - Linus Torvalds
              </StyledQuote>
            </Fade>
          </Col>
          <Col sm={12}>
            <Roll left duration={2000}>
              <StyledMe fluid={me.sharp.fluid} alt="picture of Andrew" />
            </Roll>
          </Col>
          <Col sm={12}>
            <Zoom bottom duration={2500}>
              <StyledP>
                Hello welcome to my little slice of the internet, i'm Andrew
                Carrigan, a Front End Developer currently residing in sunny San
                Diego. I have an unquenchable thirst for knowledge and a passion
                for creating. If im not jumping down the JS rabbit hole you can
                usually find me at the beach with either a dog or surfboard.
                Feel free to{" "}
                <StyledAni paintDrip to="/contact" duration={1} color="teal">
                  Contact
                </StyledAni>{" "}
                me whether intersted in my services for your project or just to
                say hi!
              </StyledP>
            </Zoom>
          </Col>
          <Col xs={12}>
            <StyledP2>
              Experince with a multitude of Technologies for creating amazing
              user experiences
            </StyledP2>
          </Col>
          <Col xs={12}>
            <StyledMe alt="automotive service Exellence insignia" />
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 1, span: 5 }}>
            <Rule />
            <IconGrid />
            <Rule />
          </Col>
          <Zoom bottom duration={3000}>
            <Col>
              <StyledP2>Feel free to check out my Github!</StyledP2>
              <CenterItem>
                <a href="https://github.com/carrigan223">
                  <StyledGit />
                </a>
              </CenterItem>
            </Col>
          </Zoom>
        </Row>
        <Footer />
      </StyledContainer>
    </>
  );
};

export default HomePage;
