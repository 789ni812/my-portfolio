import { createMuiTheme } from "@material-ui/core/styles";

const sbBlue = "#0B72B9";
const sbOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${sbBlue}`,
      orange: `${sbOrange}`,
    },
    primary: {
      main: `${sbBlue}`,
    },
    seconday: {
      main: `${sbOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
