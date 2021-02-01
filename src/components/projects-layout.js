import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass";

import "../style/reset.css";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "system-ui, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 46],
  colors: {
    grey: "grey",
    black: "#1a1a1a",
    teal: "teal",
    white: "white",
  },
}; //theme setting breakpoints, colors space, fonts, and fontsize for use as proo

const ProjectLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Box as="header" px={[5, 5]} color="teal">
        Carrigan Web Designs
      </Box>
      <Box as="main" px={[3, 5]}>
        {children}
      </Box>
    </React.Fragment>
  </ThemeProvider>
);

export default ProjectLayout;
