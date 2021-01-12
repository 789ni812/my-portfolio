import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import {
  DiHtml5,
  DiCss3,
  DiMongodb,
  DiReact,
  DiNodejs,
  DiJavascript,
} from "react-icons/di";

// Icons
import {
  MdEuroSymbol,
  MdGroupAdd,
  MdAssignmentInd,
  MdTrendingUp,
  MdBusiness,
  MdTimer,
  MdShoppingCart,
  MdLocalHospital,
  MdLocationCity,
  MdLocalLibrary,
  MdAudiotrack,
  MdPool,
  MdAccountBalance,
} from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  titles: {
    fontFamily: "Raleway",
  },
  rootCard: {
    fontFamily: "Raleway",
    minWidth: 275,
  },
  currentStatus: {
    fontFamily: "Raleway",

    color: "#555",
  },
  wordHighlight: {
    color: theme.palette.primary.dark,
  },
}));

const ContentIntroduction = (theme) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography>
        <h3 align="center" className={classes.currentStatus}>
          Current status:{" "}
          <span className={classes.wordHighlight}>Available</span> for work
        </h3>
      </Typography>

      <Card className={classes.rootCard} variant="elevation">
        <CardContent className={classes.IntroText}>
          <h1>
            Hi, I'm <span className={classes.wordHighlight}>Stuart</span>
          </h1>
          <p>Javascript (React) Engineer / Digital Project Manager</p>
          <p>20 years experience developing and managing digital projects</p>
        </CardContent>
      </Card>

      <Card className={classes.rootCard} variant="outlined">
        <CardContent>
          <Typography color="secondary">
            <h3 className={classes.titles}>Working as a...</h3>
          </Typography>
          <Card className={classes.rootCard} variant="elevation">
            <CardContent>
              <h3 className={classes.titles}>
                Front End / Full Stack Developer
              </h3>
              <p>
                My current development environment is around the JavaScript
                ecosystem:
              </p>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={2}>
                  <DiHtml5 /> HTML
                </Grid>
                <Grid item xs={6} sm={2}>
                  <DiCss3 /> CSS
                </Grid>
                <Grid item xs={6} sm={2}>
                  <DiJavascript /> JavaScript
                </Grid>

                <Grid item xs={6} sm={2}>
                  <DiMongodb /> Mongo
                </Grid>
                <Grid item xs={6} sm={2}>
                  <DiReact /> React
                </Grid>
                <Grid item xs={6} sm={2}>
                  <DiNodejs /> NodeJS
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Typography align="center" color="secondary">
            <h3 className={classes.titles}>
              And a <span>...</span>
            </h3>
          </Typography>
          <Divider variant="middle" />

          <Card className={classes.rootCard} variant="elevated">
            <CardContent>
              <h3 className={classes.titles}>
                Digital Project / Development Manager
              </h3>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={2}>
                  <MdGroupAdd /> Teams
                </Grid>

                <Grid item xs={6} sm={2}>
                  <MdEuroSymbol /> Budgets
                </Grid>

                <Grid item xs={6} sm={2}>
                  <MdAssignmentInd /> Projects
                </Grid>
                <Grid item xs={6} sm={2}>
                  <MdTimer /> Clients
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Typography align="right" color="secondary">
            <h3 className={classes.titles}>Across some great sectors...</h3>
          </Typography>
          <Card className={classes.rootCard} variant="elevated">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <MdTrendingUp /> Startups
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdLocationCity /> Government
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdAccountBalance /> Banks
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdLocalHospital /> Health
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdLocalLibrary /> Education
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdPool /> Sport
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdShoppingCart /> Ecommerce
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdAudiotrack /> Music
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdBusiness /> Global Brands
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Divider />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ContentIntroduction;
