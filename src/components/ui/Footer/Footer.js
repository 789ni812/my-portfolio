import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
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
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "1.50em",
    color: "#fff",
    textDecoration: "none",
    opacity: 1,
    "&:hover": {
      opacity: 0.5,
    },
  },
  linkItemText: {
    opacity: 0.3,
    "&:hover": {
      opacity: 0.1,
    },
  },
  mainContainer: {
    fontFamily: "Raleway",
    color: "#fff",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    color: "#fff",
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
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

      <Grid
        container
        justify="space-evenly"
        spacing={5}
        className={classes.mainContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.linkedin.com/in/stuart-bradford-2a751b3/"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.linkItem}
        >
          <AiFillLinkedin className={classes.icon} />
          <span className={classes.linkItemText}>Linkedin</span>
        </Grid>
        <Grid
          item
          component={"a"}
          href="mailto:bradfordstuart+sbs@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.linkItem}
        >
          <MdEmail className={classes.icon} />
          <span className={classes.linkItemText}>Email</span>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
