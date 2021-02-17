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
    color: theme.palette.secondary.dark,
  },
  titleLight: {
    fontFamily: "Raleway",
    color: theme.palette.secondary.main,
    marginTop: "0.75em",
    marginBottom: "0.75em",
  },
  introCard: {
    fontFamily: "Raleway",
  },
  currentStatus: {
    fontFamily: "Raleway",
  },

  icon: {
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("sm")]: {
      height: "1em",
      width: "1em",
    },
  },
}));

const ContentIntroduction = (theme) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" component="h3" align="center">
        Current status: <span className={classes.wordHighlight}>Available</span>{" "}
        for work
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" component="h1" gutterBottom>
            Hi, I'm Stuart
          </Typography>
          <Typography variant="body1">
            A Javascript Full-stack Engineer and Technical Project Manager with
            20 years experience engineering and managing technical projects
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            variant="h4"
            component="h3"
            className={classes.titleLight}
          >
            Working as a...
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
            <Grid item>
              <Card
                variant="outlined"
                style={{ maxWidth: 700, marginBottom: 50, marginTop: 25 }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.titles}
                    align="center"
                    gutterBottom
                  >
                    Front End / Full Stack Developer
                  </Typography>
                  <Typography variant="body2" paragraph>
                    My current development environment is around the JavaScript
                    ecosystem:
                  </Typography>

                  <Grid
                    container
                    spacing={4}
                    direction="row"
                    justify="space-evenly"
                  >
                    <Grid item>
                      <DiHtml5 className={classes.icon} />
                      <Typography>HTML</Typography>
                    </Grid>
                    <Grid item>
                      <DiCss3 className={classes.icon} />
                      <Typography>CSS</Typography>
                    </Grid>
                    <Grid item>
                      <DiJavascript className={classes.icon} />
                      <Typography>JavaScript</Typography>
                    </Grid>
                    <Grid item>
                      <DiMongodb className={classes.icon} />
                      <Typography>Mongo</Typography>
                    </Grid>
                    <Grid item>
                      <DiReact className={classes.icon} />
                      <Typography>React</Typography>
                    </Grid>
                    <Grid item>
                      <DiNodejs className={classes.icon} />
                      <Typography>NodeJS</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <Typography
                  variant="h4"
                  component="h3"
                  className={classes.titleLight}
                  align="center"
                >
                  And a <span>...</span>
                </Typography>

                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.titles}
                    align="center"
                    gutterBottom
                  >
                    Technical Project / Development Manager
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    A skilled technical project manager and development manager.
                    Utilising Agile and Waterfall project management styles.
                    Experience working with/managing:
                  </Typography>
                  <Grid
                    container
                    spacing={4}
                    direction="row"
                    justify="space-evenly"
                  >
                    <Grid item>
                      <MdGroupAdd className={classes.icon} />
                      <Typography>Teams</Typography>
                    </Grid>

                    <Grid item>
                      <MdEuroSymbol className={classes.icon} />
                      <Typography>Budgets</Typography>
                    </Grid>

                    <Grid item>
                      <MdAssignmentInd className={classes.icon} />
                      <Typography>Projects</Typography>
                    </Grid>
                    <Grid item>
                      <MdTimer className={classes.icon} />
                      <Typography>Clients</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <CardContent>
            <Typography
              variant="h4"
              component="h3"
              className={classes.titleLight}
            >
              Across some great sectors...
            </Typography>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item>
                <Card
                  variant="outlined"
                  style={{ marginBottom: 50, marginTop: 25 }}
                >
                  <CardContent>
                    <Grid
                      container
                      spacing={4}
                      direction="row"
                      justify="space-evenly"
                    >
                      <Grid item>
                        <MdTrendingUp className={classes.icon} />
                        <Typography>Startups</Typography>
                      </Grid>

                      <Grid item>
                        <MdLocationCity className={classes.icon} />
                        <Typography>Government</Typography>
                      </Grid>

                      <Grid item>
                        <MdAccountBalance className={classes.icon} />
                        <Typography>Banks</Typography>
                      </Grid>

                      <Grid item>
                        <MdLocalHospital className={classes.icon} />
                        <Typography>Health</Typography>
                      </Grid>

                      <Grid item>
                        <MdLocalLibrary className={classes.icon} />
                        <Typography>Education</Typography>
                      </Grid>

                      <Grid item>
                        <MdPool className={classes.icon} />
                        <Typography>Sport</Typography>
                      </Grid>

                      <Grid item>
                        <MdShoppingCart className={classes.icon} />
                        <Typography>Ecommerce</Typography>
                      </Grid>

                      <Grid item>
                        <MdAudiotrack className={classes.icon} />
                        <Typography>Music</Typography>
                      </Grid>

                      <Grid item>
                        <MdBusiness className={classes.icon} />
                        <Typography>Global Brands</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Divider />
            </Grid>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
};

export default ContentIntroduction;
