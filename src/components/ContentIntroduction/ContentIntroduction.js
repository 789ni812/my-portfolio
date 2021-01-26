import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
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
    color: theme.palette.secondary.dark,
  },
  titleLight: {
    fontFamily: "Raleway",
    color: theme.palette.secondary.main,
  },
  rootCard: {
    fontFamily: "Raleway",
    minWidth: 275,
  },
  currentStatus: {
    fontFamily: "Raleway",

    color: "#555",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "3em",
      width: "3em",
    },
  },
  listGridContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "flex",
  },
}));

const ContentIntroduction = (theme) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h3 align="center" className={classes.currentStatus}>
        Current status: <span className={classes.wordHighlight}>Available</span>{" "}
        for work
      </h3>

      <Card className={classes.rootCard} variant="elevation">
        <CardContent className={classes.IntroText}>
          <h1>Hi, I'm Stuart</h1>
          <p>A Javascript Full-stack Engineer and Technical Project Manager</p>
          <p>
            with 20 years experience engineering and managing technical projects
          </p>
        </CardContent>
      </Card>

      <Card className={classes.rootCard} variant="outlined">
        <CardContent>
          <h3 className={classes.titleLight}>Working as a...</h3>

          <Card className={classes.rootCard}>
            <CardContent>
              <h3 className={classes.titles} align="center">
                Front End / Full Stack Developer
              </h3>
              <p>
                My current development environment is around the JavaScript
                ecosystem:
              </p>
              <Grid
                container
                spacing={2}
                className={classes.listGridContainer}
                justify="space-around"
              >
                <Grid item>
                  <DiHtml5 className={classes.icon} />
                  <br /> HTML
                </Grid>
                <Grid item>
                  <DiCss3 className={classes.icon} />
                  <br /> CSS
                </Grid>
                <Grid item>
                  <DiJavascript className={classes.icon} />
                  <br /> JavaScript
                </Grid>
                <Grid item>
                  <DiMongodb className={classes.icon} />
                  <br /> Mongo
                </Grid>
                <Grid item>
                  <DiReact className={classes.icon} />
                  <br /> React
                </Grid>
                <Grid item>
                  <DiNodejs className={classes.icon} />
                  <br /> NodeJS
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <h3 className={classes.titleLight} align="center">
            And a <span>...</span>
          </h3>

          <Card className={classes.rootCard} variant="elevation">
            <CardContent>
              <h3 className={classes.titles} align="center">
                Technical Project / Development Manager
              </h3>
              <p>
                A skilled technical project manager and development manager.
                Utilising Agile and Waterfall project management styles.
                Experience working with/managing:{" "}
              </p>
              <Grid
                container
                className={classes.listGridContainer}
                spacing={2}
                justify="space-around"
              >
                <Grid item>
                  <MdGroupAdd className={classes.icon} />
                  <br /> Teams
                </Grid>

                <Grid item>
                  <MdEuroSymbol className={classes.icon} />
                  <br /> Budgets
                </Grid>

                <Grid item>
                  <MdAssignmentInd className={classes.icon} />
                  <br /> Projects
                </Grid>
                <Grid item>
                  <MdTimer className={classes.icon} />
                  <br /> Clients
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <h3 className={classes.titleLight} align="right">
            Across some great sectors...
          </h3>

          <Card className={classes.rootCard} variant="elevation">
            <CardContent>
              <Grid
                container
                className={classes.listGridContainer}
                spacing={2}
                justify="space-around"
              >
                <Grid item>
                  <MdTrendingUp className={classes.icon} />
                  <br />
                  Startups
                </Grid>

                <Grid item>
                  <MdLocationCity className={classes.icon} />
                  <br /> Government
                </Grid>

                <Grid item>
                  <MdAccountBalance className={classes.icon} />
                  <br /> Banks
                </Grid>

                <Grid item>
                  <MdLocalHospital className={classes.icon} />
                  <br /> Health
                </Grid>

                <Grid item>
                  <MdLocalLibrary className={classes.icon} />
                  <br /> Education
                </Grid>

                <Grid item>
                  <MdPool className={classes.icon} />
                  <br /> Sport
                </Grid>

                <Grid item>
                  <MdShoppingCart className={classes.icon} />
                  <br /> Ecommerce
                </Grid>

                <Grid item>
                  <MdAudiotrack className={classes.icon} />
                  <br /> Music
                </Grid>

                <Grid item>
                  <MdBusiness className={classes.icon} />
                  <br /> Global Brands
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
