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

const useStyles = makeStyles((theme) => ({
  listGridContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "flex",
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

      <Typography variant="h3">Open Quiz </Typography>
      <Typography variant="body1">
        A quiz app allowing the user to answer multiple choice questions based
        on a chosen category.
      </Typography>
      <img src={QuizApp} alt="Quiz App screenshot" width="175" height="175" />

      <ul>
        <li>Checks to see if an opentdb token exists in localstorage</li>
        <li>
          Fetching of OpenTDB token to ensure duplicate questions are not
          retrieved
        </li>
        <li>fetches questions based on user selected category</li>
        <li>
          Merges and then randomises the correct and incorrect answers together
        </li>
        <li>Manages round score and session score</li>
      </ul>

      <Typography variant="h4">Technology Stack</Typography>

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

      <hr />
      <Typography variant="h3">DevBob Database </Typography>
      <Typography variant="body1">
        Taking advantage of Drupal 9's CMS and headless capabilities. It makes
        sense to me to use Drupal 9 CMS environment for editors and admin to
        create and edit content. While JavaScript and React can interact with
        Drupal's headless capabilities. The combination of Drupal and React
        gives a rapid change environment and strong level of security.
      </Typography>
      <img src={DevBobApp} alt="Devbob screenshot" width="175" height="175" />

      <ul>
        <li>Easy and secure editor environment in Drupal</li>
        <li>
          Fast prototyping is helped with rapid creation of Content Types,
          Taxonomies, Topics and Authentication
        </li>
        <li>React fetches data from drupal to render on the front end</li>
        <li>Multiple front end environments utilise data stored in Drupal</li>
      </ul>

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

      <hr />
      <Typography variant="h3">Rainy's Cycle App </Typography>
      <Typography variant="body1">
        Location based realtime map and weather app to help cyclists naviagte
        directions and weather whilst out on a bike tour. Unlike many other
        apps, the focus is less on fitness and more on the enjoyment of getting
        lost on a bike and finding the best spot for a sandwich and a coffee.
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
    </>
  );
};

export default RecentProjects;
