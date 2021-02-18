import React from "react";
// Material-ui
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme";

// custom comps
import Header from "./components/ui/Header/header";

import Footer from "./components/ui/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header data-test="component-Header" />
      <Footer data-test="component-Footer" theme={theme} />
    </ThemeProvider>
  );
};
export default App;
