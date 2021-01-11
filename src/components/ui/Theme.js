import { createMuiTheme } from "@material-ui/core/styles";

const sbGreen = "#00838f";
const sbBlue = "#2196f3";

export default createMuiTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00bcd4",

      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1rem",
  },
});
