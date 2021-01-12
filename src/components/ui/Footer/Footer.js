import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.secondary.dark,
    width: "100%",
    padding: "15px",
  },
  gridItem: {
    margin: "3em",
  },

  rootTitle: {
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
    fontSize: "2em",
  },

  textP: {
    textAlign: "center",
    fontFamily: "Raleway",
    color: "#fff",
  },

  linkItem: {
    fontSize: "1.50em",
    color: "#fff",
    textDecoration: "none",
    opacity: 1,
    "&:hover": {
      opacity: 0.7,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <h3 className={classes.rootTitle}>Want to get in touch?</h3>

      <p className={classes.textP}>
        I'm currently available for work so feel free to contact me.
      </p>

      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <a
            className={classes.linkItem}
            href="https://www.linkedin.com/in/stuart-bradford-2a751b3/"
          >
            <AiFillLinkedin /> LinkedIn
          </a>
        </Grid>
        <Grid item className={classes.gridItem}>
          <a
            className={classes.linkItem}
            href="mailto:bradfordstuart+sbs@gmail.com"
          >
            <MdEmail /> Email
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
