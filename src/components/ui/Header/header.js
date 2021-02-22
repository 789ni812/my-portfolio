import React from "react";

import ContentIntroduction from "../../../components/ContentIntroduction/ContentIntroduction";
import TimelineWorkHistory from "../../../components/TimelineWorkHistory/TimelineWorkHistory";
import RecentProjects from "../../../components/RecentProjects/RecentProjects";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import HideOnScroll from "../../ui/HideOnScroll.jsx";
// import BackToTop from "../../ui/BackToTop.jsx";
// import { KeyboardArrowUp } from "@material-ui/icons";
// import Fab from "@material-ui/core/Fab";
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    fontFamily: "Raleway",
    fontSize: "1.75rem",
    color: "white",
    padding: "0.2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.50rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
  logoCom: {
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.50rem",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  // const handleChangeSection = (value) => {
  //   document
  //     .getElementById(value)
  //     .scrollIntoView({ behavior: "smooth", block: "start" });
  // };
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="fixed" color="secondary">
          <Typography className={classes.logo}>
            StuartBradford<span className={classes.logoCom}>.com</span>
          </Typography>
          {/* <Paper square>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              aria-label="Links to parts of page"
              centered
              value={0}
            >
              <Tab
                label="Intro"
                onClick={() => handleChangeSection("intro")}
              ></Tab>
              <Tab
                label="Recent Projects"
                onClick={() => handleChangeSection("recentProjects")}
              />
              <Tab
                label="Employment History"
                onClick={() => handleChangeSection("timelineWorkHistory")}
              />
            </Tabs>
          </Paper> */}
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <div index="intro" id="intro">
        <ContentIntroduction data-test="component-ContentIntroduction" />
      </div>
      <div index="recentProjects" id="recentProjects">
        <RecentProjects />
      </div>
      <div index="timelineWorkHistory" id="timelineWorkHistory">
        <TimelineWorkHistory />
      </div>
      {/* <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop> */}

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Header;
