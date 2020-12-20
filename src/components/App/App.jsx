import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReactBreakpoints from "react-breakpoints";
import ReactGA from "react-ga";

/** Helpers */
import breakpoints from "helpers/breakpoints";

/** Custom Theme */
import theme from "theme";

/** Custom Layout */
import ScrollToTop from "components/Layout/ScrollToTop";
import Layout from "components/Layout/Layout";

function App() {
  ReactGA.initialize('UA-37661466-3');
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={{...theme}}>
        <ReactBreakpoints breakpoints={breakpoints}>
          <Layout />
        </ReactBreakpoints>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
