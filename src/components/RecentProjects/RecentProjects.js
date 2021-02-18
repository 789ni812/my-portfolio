import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import {
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
import RainysCycleApp from "../../assets/images/rainyscyclesapp.png";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  titles: {
    fontFamily: "Raleway",
    color: theme.palette.secondary.dark,
  },
  titleLight: {
    fontFamily: "Raleway",
    color: theme.palette.secondary.main,
  },
  icon: {
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("sm")]: {
      height: "1em",
      width: "1em",
    },
  },
  linkItem: {
    color: theme.palette.secondary.dark,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

const RecentProjects = () => {
  const classes = useStyles();
  return (
    <>
      <Card variant="elevation">
        <CardContent>
          <Typography
            variant="h3"
            component="h1"
            className={classes.titles}
            gutterBottom
          >
            Recent projects
          </Typography>
          <Typography variant="body1" paragraph>
            Below are a few projects I've been working on recently.
          </Typography>
          {/*   <Typography variant="body2" paragraph>
            My preferred development stack is currently
            <br /> JavaScript, React, Material-ui on the front end.
          </Typography>
          <Typography variant="body2" paragraph>
            For the backend databses I've used a couple including
            <br /> Firebase, Mongo and Drupal (9 headless)
          </Typography>
          <Typography variant="body2" paragraph>
            I host my projects at Linode. They're similar to AWS and Azure.
            <br />
            it's allways been easy to spin up a new Linux server when requried
          </Typography> */}

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item>
              <Card
                variant="outlined"
                style={{
                  maxWidth: 450,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.titleLight}
                    gutterBottom
                  >
                    Rainy's Cycle App
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    <a
                      href="https://www.rainyscycles.co.uk"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      https://www.rainyscycles.co.uk
                    </a>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Location based cycle app with realtime updates to location,
                    heading, speed, altitude and weathe data. The focus is less
                    on fitness and more around the enjoyment of getting lost and
                    finding the best spot for a sandwich and a coffee.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    The MVP currently supports the cycle maps, realtime
                    navigation, speed and heading updates, Further updates will
                    be rolledout shortly
                  </Typography>
                  <Grid container direction="row" spacing={1}>
                    <Grid
                      item
                      component={"a"}
                      href="https://www.rainyscycles.co.uk"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Avatar
                        variant="circle"
                        src={RainysCycleApp}
                        alt="Quiz App Screenshot"
                        style={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item>
                      <List>
                        <ListItem>
                          <ListItemText>Browser based geolocation</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>
                            Merges OpenStreetMap and OpenCycleMap together
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>
                            Realtime updates to speed and heading via
                            geolocation
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>

                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.titles}
                    gutterBottom
                  >
                    Technology Stack
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
                      <DiReact className={classes.icon} />
                      <Typography>React</Typography>
                    </Grid>
                    <Grid item>
                      <DiNodejs className={classes.icon} />
                      <Typography>NodeJS</Typography>
                    </Grid>
                    <Grid item>
                      <AiFillApi className={classes.icon} />
                      <Typography>Leaflet API</Typography>
                    </Grid>
                    <Grid item>
                      <AiFillApi className={classes.icon} />
                      <Typography>OpenCycleMap API</Typography>
                    </Grid>
                    <Grid item>
                      <DiMongodb className={classes.icon} />
                      <Typography>Mongo</Typography>
                    </Grid>
                    <Grid item>
                      <DiDebian className={classes.icon} />
                      <Typography>Debian</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card variant="outlined" style={{ maxWidth: 450 }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.titleLight}
                    gutterBottom
                  >
                    Open Quiz
                  </Typography>

                  <Typography variant="body1" paragraph>
                    A quiz app allowing the user to answer multiple choice
                    questions based on a chosen category.
                  </Typography>
                  <Grid container direction="row" spacing={2}>
                    <Grid item style={{ maxWidth: 150 }}>
                      <Avatar
                        variant="circle"
                        src={QuizApp}
                        alt="Quiz App Screenshot"
                        style={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item style={{ maxWidth: 450 }}>
                      <List>
                        <ListItem>
                          <ListItemText>
                            Fetching of OpenTDB token to ensure duplicate
                            questions are not retrieved
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>
                            Checks to see if an opentdb token exists in
                            localstorage
                          </ListItemText>
                        </ListItem>

                        <ListItem>
                          <ListItemText>
                            Fetching of OpenTDB token to ensure duplicate
                            questions are not retrieved
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>
                            Fetches questions based on user selected category
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>
                            Merges and then randomises the correct and incorrect
                            answers together
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>
                            Manages round and session score
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.titles}
                    gutterBottom
                  >
                    Technology Stack
                  </Typography>
                  <Grid
                    container
                    spacing={4}
                    direction="row"
                    justify="space-evenly"
                  >
                    <Grid item>
                      <AiFillApi className={classes.icon} />
                      <Typography>API</Typography>
                    </Grid>

                    <Grid item>
                      <DiHtml5 className={classes.icon} />
                      <Typography> HTML</Typography>
                    </Grid>
                    <Grid item>
                      <DiCss3 className={classes.icon} />
                      <Typography> CSS</Typography>
                    </Grid>
                    <Grid item>
                      <DiJavascript className={classes.icon} />
                      <Typography> JavaScript</Typography>
                    </Grid>
                    <Grid item>
                      <DiReact className={classes.icon} />
                      <Typography> React</Typography>
                    </Grid>

                    <Grid item>
                      <DiNodejs className={classes.icon} />
                      <Typography> NodeJS</Typography>
                    </Grid>
                    <Grid item>
                      <DiDrupal className={classes.icon} />
                      <Typography> Drupal</Typography>
                    </Grid>
                    <Grid item>
                      <DiDebian className={classes.icon} />
                      <Typography> Debian</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card variant="outlined" style={{ maxWidth: 450 }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.titleLight}
                    gutterBottom
                  >
                    DevBob Database
                  </Typography>
                  <Typography variant="body1" paragraph>
                    A big fan of Drupal CMS since version 4.5 and I'm really
                    enjoying Drupal 9 CMS and it's headless capabilities when
                    using React on the front end. The combination of Drupal and
                    React gives a rapid change environment, easy author editing
                    and admin with a strong level of security.
                  </Typography>

                  <Grid container direction="row" spacing={2}>
                    <Grid item style={{ maxWidth: 150 }}>
                      <Avatar
                        variant="circle"
                        src={DevBobApp}
                        alt="Quiz App Screenshot"
                        style={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item style={{ maxWidth: 450 }}>
                      <List>
                        <ListItem>
                          <ListItemText>
                            Easy and secure editor environment in Drupal
                          </ListItemText>
                        </ListItem>

                        <ListItem>
                          <ListItemText>
                            Rapid creation of Content Types, Taxonomies, Topics
                            and Authentication
                          </ListItemText>
                        </ListItem>

                        <ListItem>
                          <ListItemText>
                            React fetches data from drupal to render on the
                            front end
                          </ListItemText>
                        </ListItem>

                        <ListItem>
                          <ListItemText>
                            Multiple front end environments utilise data stored
                            in Drupal
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>

                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.titles}
                    gutterBottom
                  >
                    Technology Stack
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
                      <DiReact className={classes.icon} />
                      <Typography>React</Typography>
                    </Grid>
                    <Grid item>
                      <DiNodejs className={classes.icon} />
                      <Typography>NodeJS</Typography>
                    </Grid>
                    <Grid item>
                      <DiDrupal className={classes.icon} />
                      <Typography>Drupal</Typography>
                    </Grid>
                    <Grid item>
                      <AiFillApi className={classes.icon} />
                      <Typography>API</Typography>
                    </Grid>

                    <Grid item>
                      <DiDebian className={classes.icon} />
                      <Typography>Debian</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default RecentProjects;
