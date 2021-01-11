import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    padding: "15px",
  },
  gridItem: {
    margin: "3em",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <h3>Want to get in touch?</h3>

      <p>I'm currently available for work so please feel free to contact me.</p>

      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <a href="https://www.linkedin.com/in/stuart-bradford-2a751b3/">
            <AiFillLinkedin /> LinkedIn
          </a>
        </Grid>
        <Grid item className={classes.gridItem}>
          <a href="mailto:bradfordstuart+sbs@gmail.com">
            <MdEmail /> Email
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
