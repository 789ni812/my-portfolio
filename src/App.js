import React from "react";
// Material-ui
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme";

// custom comps
import Header from "./components/ui/Header/header";

import Footer from "./components/ui/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        style={{
          margin: 0,
          width: "100%",
        }}
      >
        <Grid item>
          <Header data-test="component-Header" />
        </Grid>
        <Grid item>
          <Footer data-test="component-Footer" theme={theme} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default App;
