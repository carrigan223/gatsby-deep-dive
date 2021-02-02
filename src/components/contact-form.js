import * as React from "react";
import styled from "@emotion/styled";
import { Form, Row, Col, Button } from "react-bootstrap";

const StyledForm = styled(Form)`
  padding-top: 5rem;
`;

const FormRow = styled(Row)`
  padding: 2rem 2rem 1rem 1rem;
`;

const FormInputs = styled(Form.Control)`
  border-radius: 30;
  font-family: "Fredoka One";
`;

const ButtonCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  font-family: "Fredoka One";
  font-size: 1.5rem;
  background-color: teal;
  color: yellow;
  border: none;

  :hover {
    background-color: yellow;
    color: teal;
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
          <Form.Control
            style={{ borderRadius: 30, fontFamily: "Fredoka One" }}
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
        </ButtonCol>
      </FormRow>
    </StyledForm>
  );
};

export default ContactForm;
