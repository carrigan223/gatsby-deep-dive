import React from "react";
import styled, { keyframes } from "styled-components";
const Breathe = () => {
  return (
    <Container>
      <Circle />
    </Container>
  );
};
export default Breathe;
const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;
const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-style: solid;
  background-color: red;
  border-width: 5px;
  border-radius: 50%;
  border-color: black;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

const Circle2 = styled.div`
  height: 90px;
  width: 90px;
  border-style: solid;
  background-color: red;
  border-width: 5px;
  border-radius: 50%;
  border-color: black;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`;
