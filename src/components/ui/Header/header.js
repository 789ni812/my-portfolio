import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    padding: "0.2em",
    fontSize: "1.75rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.50rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Typography className={classes.logo}>site.com</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Header;
