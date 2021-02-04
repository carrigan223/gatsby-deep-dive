import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Bootstrap from "../svg/bootstrap.svg";
import Css from "../svg/css-3.svg";
import Express from "../svg/express.svg";
import Gatsby from "../svg/gatsby.svg";
import Git from "../svg/git-icon.svg";
import GitKraken from "../svg/gitkraken.svg";
import Html from "../svg/html-5.svg";
import Javascript from "../svg/javascript.svg";
import MongoDB from "../svg/mongodb.svg";
import Netlify from "../svg/netlify.svg";
import NextJS from "../svg/nextjs.svg";
import NodeJS from "../svg/nodejs.svg";

const StyledBootstrap = styled(Bootstrap)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledCss = styled(Css)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledExpress = styled(Express)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledGatsby = styled(Gatsby)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledGit = styled(Git)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledGitKraken = styled(GitKraken)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledHtml = styled(Html)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledJavascript = styled(Javascript)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledMongoDB = styled(MongoDB)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledNetlify = styled(Netlify)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledNextJS = styled(NextJS)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;
const StyledNodeJS = styled(NodeJS)`
  height: 50px;
  width: 50px;
  margin: 2rem;
`;

const IconCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const IconGrid = () => {
  return (
    <Container>
      <Row>
        <IconCol xs={12}>
          <StyledBootstrap />
          <StyledCss />
          <StyledExpress />
          <StyledGatsby />
        </IconCol>
        <IconCol xs={12}>
          <StyledGit />
          <StyledGitKraken />
          <StyledHtml />
          <StyledJavascript />
        </IconCol>
        <IconCol xs={12}>
          <StyledMongoDB />
          <StyledNetlify />
          <StyledNextJS />
          <StyledNodeJS />
        </IconCol>
      </Row>
    </Container>
  );
};

export default IconGrid;
