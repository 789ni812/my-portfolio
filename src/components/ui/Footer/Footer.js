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
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <h3 align="center">Want to get in touch?</h3>

      <p>I'm currently available for work so please feel free to contact me.</p>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <a href="https://www.linkedin.com/in/stuart-bradford-2a751b3/">
            <AiFillLinkedin /> LinkedIn
          </a>
        </Grid>
        <Grid item xs={6} sm={3}>
          <a href="mailto:bradfordstuart+sbs@gmail.com">
            <MdEmail /> Email
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
