import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass";

//css reset

import "../style/reset.css";

const theme = {
  fonts: {
    sans: "system-ui, sans-serif",
  },
  colors: {
    grey: "#999",
    black: "#1a1a1a",
    red: "#e61428",
  },
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Box as="header">Silly Header</Box>
      <Box as="main">{children}</Box>
    </>
  </ThemeProvider>
);

export default Layout;
