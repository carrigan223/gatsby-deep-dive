import React from "react";
import { Box, Text, Flex } from "rebass";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

//component displaying next project header
const Heading = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: ${(props) => props.theme.fontSizes[3]}px;
  font-weight: normal;
`;

const BoxOne = styled(Box)`
  display: flex;
  justify-content: flex-start;
`;

const BoxTwo = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const NextProjectHeading = () => (
  <Flex>
    <BoxOne mb={5} p={3} width={1 / 2}>
      <Heading pt={3}>Next Project</Heading>
    </BoxOne>
    <BoxTwo mb={5} p={3} width={1 / 2} bg="primary">
      <AniLink paintDrip to="/home" duration={1} color="teal">
        <Heading pt={3}>Return To Home</Heading>
      </AniLink>
    </BoxTwo>
  </Flex>
);

export default NextProjectHeading;
