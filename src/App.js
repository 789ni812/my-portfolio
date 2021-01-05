import React from "react";
import Header from "./components/Header/header";
import ContentIntroduction from "./components/ContentIntroduction/ContentIntroduction";

// Material-ui
import Grid from "@material-ui/core/Grid";

// playing
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

import TimelineWorkHistory from "./components/TimelineWorkHistory/TimelineWorkHistory";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid item xs={12}>
        <Header data-test="component-Header" />
      </Grid>
      <Grid container spacing={8} alignitems="center" justify="center">
        {/* START CONTENT SWITCH */}
        <Grid item>
          <ContentIntroduction data-test="component-ContentIntroduction" />
          <TimelineWorkHistory data-test="component-timelineWorkHistory" />
        </Grid>
        {/* END CONTENT SWITCH */}
      </Grid>
    </ThemeProvider>
  );
};
export default App;
