import * as React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form } from "react-bootstrap";
import Particles from "react-tsparticles";

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledForm = styled(Form)`
  padding-top: 5rem;
`;

const FormRow = styled(Row)`
  padding: 2rem 2rem 1rem 1rem;
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

const FormInputs = styled(Form.Control)`
    border-radius: 0;
`;

const ContactPage = () => {
  return (
    <Container>
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
      <Row>
        <Col>
          <HeaderContainer>
            <HeaderText>
              Drop a line for quotes, questions, or just to say hi .....
            </HeaderText>
          </HeaderContainer>
        </Col>
      </Row>

      <StyledForm>
        <FormRow>
          <Col>
            <FormInputs placeholder="Name" />
          </Col>
          <Col>
            <FormInputs placeholder="Email" />
          </Col>
        </FormRow>
        <FormRow>
          <Col>
            <FormInputs placeholder="Subject" />
          </Col>
        </FormRow>
        <FormRow>
          <Col>
            <Form.Control style={{borderRadius:0}} as="textarea" rows={10} />
          </Col>
        </FormRow>
      </StyledForm>
    </Container>
  );
};

export default ContactPage;
