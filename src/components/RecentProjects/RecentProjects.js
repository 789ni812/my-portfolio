import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import {
  DiGithubBadge,
  DiHtml5,
  DiCss3,
  DiDrupal,
  DiMongodb,
  DiReact,
  DiNodejs,
  DiJavascript,
  DiDebian,
} from "react-icons/di";

import { AiFillApi } from "react-icons/ai";

import DevBobApp from "../../assets/images/Devbob-app.png";
import QuizApp from "../../assets/images/Quiz-app.png";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  listGridContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "flex",
  },
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },

  rounded: {
    width: 180,
    height: 180,
    color: "#fff",
    backgroundColor: green[500],
  },
}));

const RecentProjects = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3">Recent projects</Typography>
      <Typography variant="body2">
        Below are a few recent projects I've been working on. My current
        preferred development stack is using JavaScript, React, Material-ui{" "}
      </Typography>
      <Typography variant="subtitle2">
        You can find other work on my <DiGithubBadge>Github</DiGithubBadge>{" "}
        account. {/* //TODO Check Material-ui or react way to use hyperlinks */}
        <a href="https://github.com/789ni812">https://github.com/789ni812</a>
      </Typography>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item>
          <Card>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Open Quiz{" "}
              </Typography>
              <Typography variant="subtitle1">
                A quiz app allowing the user to answer multiple choice questions
                based on a chosen category.
              </Typography>

              <Grid
                container
                direction="row"
                spacing={3}
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <Avatar variant="rounded" className={classes.rounded}>
                    <img
                      src={QuizApp}
                      alt="Quiz App screenshot"
                      width="175"
                      height="175"
                    />
                  </Avatar>
                </Grid>
                <Grid item>
                  <ul>
                    <li>
                      Checks to see if an opentdb token exists in localstorage
                    </li>
                    <li>
                      Fetching of OpenTDB token to ensure duplicate questions
                      are not retrieved
                    </li>
                    <li>fetches questions based on user selected category</li>
                    <li>
                      Merges and then randomises the correct and incorrect
                      answers together
                    </li>
                    <li>Manages round score and session score</li>
                  </ul>
                </Grid>
              </Grid>

              <Typography variant="subtitle1">Technology Stack</Typography>

              <Grid
                container
                spacing={2}
                className={classes.listGridContainer}
                justify="space-around"
              >
                <Grid item>
                  <AiFillApi className={classes.icon} />
                  <br /> OpenTDB API
                </Grid>

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
                  <DiReact className={classes.icon} />
                  <br /> React
                </Grid>

                <Grid item>
                  <DiNodejs className={classes.icon} />
                  <br /> NodeJS
                </Grid>
                <Grid item>
                  <DiDrupal className={classes.icon} />
                  <br /> Drupal
                </Grid>
                <Grid item>
                  <DiDebian className={classes.icon} />
                  <br /> Debian
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Grid item>
            <Card>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  DevBob Database{" "}
                </Typography>
                <Typography variant="subtitle1">
                  A big fan of Drupal CMS since version 4.5 and I'm really
                  enjoying Drupal 9 CMS and it's headless capabilities when
                  using React on the front end. The combination of Drupal and
                  React gives a rapid change environment, easy author editing
                  and admin with a strong level of security.
                </Typography>

                <Grid
                  container
                  direction="row"
                  spacing={3}
                  justify="space-evenly"
                  alignItems="center"
                >
                  <Grid item>
                    <Avatar variant="rounded" className={classes.rounded}>
                      <img
                        src={DevBobApp}
                        alt="Devbob screenshot"
                        width="175"
                        height="175"
                      />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <ul>
                      <li>Easy and secure editor environment in Drupal</li>
                      <li>
                        Rapid creation of Content Types, Taxonomies, Topics and
                        Authentication
                      </li>
                      <li>
                        React fetches data from drupal to render on the front
                        end
                      </li>
                      <li>
                        Multiple front end environments utilise data stored in
                        Drupal
                      </li>
                    </ul>
                  </Grid>
                </Grid>

                <Typography variant="h4">Technology Stack</Typography>

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
                    <DiReact className={classes.icon} />
                    <br /> React
                  </Grid>
                  <Grid item>
                    <DiNodejs className={classes.icon} />
                    <br /> NodeJS
                  </Grid>
                  <Grid item>
                    <DiDrupal className={classes.icon} />
                    <br /> Drupal
                  </Grid>
                  <Grid item>
                    <AiFillApi className={classes.icon} />
                    <br /> Headless Drupal API
                  </Grid>

                  <Grid item>
                    <DiDebian className={classes.icon} />
                    <br /> Debian
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Rainy's Cycle App{" "}
                </Typography>
                <Typography variant="subtitle1">
                  Location based realtime map and weather app to help cyclists
                  naviagte directions and weather whilst out on a bike tour.
                  Unlike many other apps, the focus is less on fitness and more
                  on the enjoyment of getting lost on a bike and finding the
                  best spot for a sandwich and a coffee.
                </Typography>

                <Typography variant="h4">Technology Stack</Typography>

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
                    <DiReact className={classes.icon} />
                    <br /> React
                  </Grid>
                  <Grid item>
                    <DiNodejs className={classes.icon} />
                    <br /> NodeJS
                  </Grid>
                  <Grid item>
                    <AiFillApi className={classes.icon} />
                    <br /> Leaflet API
                  </Grid>

                  <Grid item>
                    <DiMongodb className={classes.icon} />
                    <br /> Mongo
                  </Grid>
                  <Grid item>
                    <DiDebian className={classes.icon} />
                    <br /> Debian
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RecentProjects;
