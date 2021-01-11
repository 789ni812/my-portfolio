import { createMuiTheme } from "@material-ui/core/styles";

const sbPrimaryMain = "#2196f3";
const sbSecondaryMain = "#00bcd4";

export default createMuiTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: sbPrimaryMain,
      dark: "#1769aa",
      contrastText: "#fff",
    },
    secondary: {
      main: sbSecondaryMain,
      contrastText: "#000",
    },
  },
});
