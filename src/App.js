import React from "react";
// Material-ui
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme.js";

// custom comps
import Header from "./components/ui/Header/header";
import ContentIntroduction from "./components/ContentIntroduction/ContentIntroduction";
import TimelineWorkHistory from "./components/TimelineWorkHistory/TimelineWorkHistory";
import Footer from "./components/ui/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header data-test="component-Header" />
      <ContentIntroduction data-test="component-ContentIntroduction" />
      {/* <TimelineWorkHistory data-test="component-timelineWorkHistory" /> */}
      <Footer data-test="component-Footer" />
    </ThemeProvider>
  );
};
export default App;
