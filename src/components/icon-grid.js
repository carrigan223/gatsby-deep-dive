import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Modal } from "react-bootstrap";
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
import Zoom from "react-reveal/Zoom";

const StyledBootstrap = styled(Bootstrap)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledCss = styled(Css)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledExpress = styled(Express)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledGatsby = styled(Gatsby)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledGit = styled(Git)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledGitKraken = styled(GitKraken)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledHtml = styled(Html)`
  height: 60px;
  width: auto;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledJavascript = styled(Javascript)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledMongoDB = styled(MongoDB)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledNetlify = styled(Netlify)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledNextJS = styled(NextJS)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;
const StyledNodeJS = styled(NodeJS)`
  height: 60px;
  width: 60px;
  margin: 2rem;
  filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
  -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));

  :hover {
    -webkit-filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
    filter: drop-shadow(15px 16px 14px rgba(0, 128, 128, 0.7));
  }
`;

const IconCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const CustomModalBody = styled(Modal.Body)`
  background-image: linear-gradient(
    to top,
    rgba(225, 215, 0, 0.3),
    rgba(0, 128, 128, 0.2),
    white
  );
  border-radius: 1%;
`;

//styles above this line

const IconGrid = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");

  const handleClose = () => setShow(false);
  const handleOpen = () => {
    setShow(true);
  };

  const handleClick = (title, description) => () => {
    setTitle(title);
    setDescription(description);
    handleOpen();
  };

  const ModalTitle = styled(Col)`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid teal;
    font-family: "righteous";
    font-size: 2rem;
    filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
    -webkit-filter: drop-shadow(5px 6px 4px rgba(0, 0, 0, 0.7));
    padding-bottom: 0.75rem;
    color: teal;
  `;

  const ModalDescription = styled(Col)`
    color: black;
    padding: 1rem;
    font-family: "Amatic SC";
    font-size: 1.5rem;
    font-weight: bold;
  `;

  return (
    <Container>
      <Row>
        <Modal centered show={show} onHide={handleClose}>
          <CustomModalBody>
            <Row>
              <ModalTitle xs={12}>
                <text>{title}</text>
              </ModalTitle>
              <ModalDescription>{description}</ModalDescription>
            </Row>
          </CustomModalBody>
        </Modal>

        <IconCol xs={12}>
          <StyledBootstrap
            onClick={handleClick(
              "Bootstrap",
              "CSS framework directed at responsive, mobile-first front-end web development."
            )}
          />
          <StyledCss
            onClick={handleClick(
              "CSS",
              "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."
            )}
          />
          <StyledExpress
            onClick={handleClick(
              "Express",
              "Back end web application framework for Node.js, designed for building web applications and APIs."
            )}
          />
          <StyledGatsby
            onClick={handleClick(
              "Gatsby",
              "open-source static website generator (SSG) that is based on the frontend development framework React and makes use of Webpack and GraphQL technology."
            )}
          />
        </IconCol>
        <IconCol xs={12}>
          <StyledGit
            onClick={handleClick(
              "Git",
              "Git is a distributed version-control system for tracking changes in any set of files."
            )}
          />
          <StyledGitKraken
            onClick={handleClick(
              "GitKraken",
              "Intuitive Git GUI simplifies and streamlines Git processes."
            )}
          />
          <StyledHtml
            onClick={handleClick(
              "Html",
              "HTML5 is a markup language used for structuring and presenting content on the World Wide Web"
            )}
          />
          <StyledJavascript
            onClick={handleClick(
              "Javascript",
              "A programming language that conforms to the ECMAScript specification."
            )}
          />
        </IconCol>
        <IconCol xs={12}>
          <StyledMongoDB
            onClick={handleClick(
              "MongoDB",
              "A NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
            )}
          />
          <StyledNetlify
            onClick={handleClick(
              "Netlify",
              "A cloud computing company that offers hosting and serverless backend services for web applications and static websites."
            )}
          />
          <StyledNextJS
            onClick={handleClick(
              "NextJS",
              "An open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
            )}
          />
          <StyledNodeJS
            onClick={handleClick(
              "NodeJS",
              "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser."
            )}
          />
        </IconCol>
      </Row>
    </Container>
  );
};

export default IconGrid;
