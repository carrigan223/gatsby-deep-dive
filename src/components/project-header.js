import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import styled, { css } from "styled-components";

import AspectRatioBox from "./aspect-ratio-box";

const Title = styled(Heading)`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes[5]}px;
  margin: 0;
  @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: ${(props) => props.theme.fontSizes[6]}px;
  }
`;

const Description = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes[3]}px;
  line-height: 1.35em;
  margin: 0;
  @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: ${(props) => props.theme.fontSizes[4]}px;
  }
`;

const Category = styled(Text)`
  color: ${(props) => props.theme.colors.grey};
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: ${(props) => props.theme.fontSizes[3]}px;
  font-weight: normal;
  margin: 0;
`;

const HeroWrap = styled(Box)`
  ${(props) =>
    props.truncated &&
    css`
      max-height: 200px;
      overflow: hidden;
    `}
`;

const Hero = ({ truncated }) => (
  <HeroWrap mt={[4, 5]} truncated={truncated}>
    <AspectRatioBox ratio={8 / 5} />
  </HeroWrap>
);
const ProjectHeader = ({ project, truncated }) => (
  <Box>
    <Flex>
      <Box>
        <Title as="h1">title goes here</Title>
        <Box>
          <Category as="h3">category goes here</Category>
        </Box>
      </Box>
      <Box>
        <Box>
          <Description as="h2">description goes heree ...</Description>
        </Box>
      </Box>
    </Flex>
    <Hero truncated={truncated} />
  </Box>
);

export default ProjectHeader;
