import * as React from "react";
import styled from "@emotion/styled";
import { Form, Row, Col, Button } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const StyledForm = styled(Form)`
  padding-top: 5rem;
`;

const FormRow = styled(Row)`
  padding: 2rem 2rem 1rem 1rem;
`;

const FormInputs = styled(Form.Control)`
  border-radius: 30;
  font-family: "Fredoka One";
  box-shadow: 0px 8px 15px rgba(0, 128, 128, 0.4);
`;

const ButtonCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #ffffff;
  background-color: teal;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 128, 128, 0.4);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 1rem;
  :hover {
    background-color: gold;
    box-shadow: 0px 15px 20px rgba(255, 215, 0, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

const ContactForm = () => {
  return (
    <StyledForm
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />

      <FormRow>
        <Col>
          <FormInputs placeholder="Name" type="text" name="name" />
        </Col>
        <Col>
          <FormInputs placeholder="Email" type="email" name="email" />
        </Col>
      </FormRow>
      <FormRow>
        <Col>
          <FormInputs placeholder="Subject" type="text" name="subject" />
        </Col>
      </FormRow>
      <FormRow>
        <Col>
          <FormInputs
            placeholder="What can I help you with..."
            as="textarea"
            rows={10}
            name="message"
            type="text"
          />
        </Col>
      </FormRow>
      <FormRow>
        <ButtonCol>
          <StyledButton variant="secondary" type="submit">
            Submit
          </StyledButton>
          <AniLink paintDrip to="/" duration={1} color="yellow">
            <StyledButton> Back to Home </StyledButton>
          </AniLink>
        </ButtonCol>
      </FormRow>
    </StyledForm>
  );
};

export default ContactForm;
