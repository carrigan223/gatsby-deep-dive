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
    grey: "#999",
    black: "#1a1a1a",
    red: "#e61428",
  },
};//theme seeting breakpoints, colors space, fonts, and fontsize for use as proo

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Box as="header" px={[3, 5]}>
        silly header
      </Box>
      <Box as="main" px={[3, 5]}>
        {children}
      </Box>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
