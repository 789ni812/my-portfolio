import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  logoText: {
    color: "red",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Typography className={classes.logoText}>
            StuartBradford.com
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
