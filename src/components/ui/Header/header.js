import React, { useState } from "react";

import ContentIntroduction from "../../../components/ContentIntroduction/ContentIntroduction";
import TimelineWorkHistory from "../../../components/TimelineWorkHistory/TimelineWorkHistory";
import RecentProjects from "../../../components/RecentProjects/RecentProjects";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import HideOnScroll from "../../ui/HideOnScroll.jsx";
import BackToTop from "../../ui/BackToTop.jsx";
import ScrollToIntro from "../../ui/ScrollToSection.jsx";
import { KeyboardArrowUp } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const Header = () => {
  const classes = useStyles();

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="fixed" color="secondary">
          <Typography className={classes.logo}>
            StuartBradford<span className={classes.logoCom}>.com</span>
          </Typography>
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="Links to parts of page"
              centered
            >
              <Tab label="Intro" value="one" {...a11yProps("one")}></Tab>
              <Tab label="Recent Projects" value="two" {...a11yProps("two")} />
              <Tab
                label="Employment History"
                value="three"
                {...a11yProps("three")}
              />
            </Tabs>
          </Paper>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <div value={value} index="one" id="intro">
        <ContentIntroduction data-test="component-ContentIntroduction" />
      </div>
      <div value={value} index="two" id="recentProjects">
        <RecentProjects />
      </div>
      <div value={value} index="three" id="timelineWorkHistory">
        <TimelineWorkHistory />
      </div>
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
      <ScrollToIntro>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollToIntro>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Header;
