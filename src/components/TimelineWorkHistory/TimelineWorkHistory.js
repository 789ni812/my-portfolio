import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Typography, Card, CardContent, Grid } from "@material-ui/core";

import SettingsInputIcon from "@material-ui/icons/SettingsInputComponent";
import DevicesIcon from "@material-ui/icons/Devices";
import BusinessIcon from "@material-ui/icons/Business";
import AlbumIcon from "@material-ui/icons/Album";
import SportHandballIcon from "@material-ui/icons/SportsHandball";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BugReportIcon from "@material-ui/icons/BugReport";
import ExtensionIcon from "@material-ui/icons/Extension";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommuteIcon from "@material-ui/icons/Commute";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  rootCard: {
    fontFamily: "Raleway",
    minWidth: 275,
  },

  VerticalTimelineElementContent: {
    fontFamily: "Raleway",
    fontSize: "1.75em",
  },
  rootTitle: {
    fontFamily: "Raleway",
  },
  rootTitle2: {
    fontFamily: "Raleway",
    color: theme.palette.secondary.dark,
  },
  linkItem: {
    color: theme.palette.secondary.dark,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  dateText: {
    fontFamily: "Raleway",
  },
  dateTextCurrent: {
    fontFamily: "Raleway",
  },
  textP: {
    fontFamily: "Raleway",
    color: "#000",
  },
  textPCurrent: {
    fontFamily: "Raleway",
    color: "#fff",
  },
  timelineTextAreaCurrent: {
    background: theme.palette.primary.main,
  },
  titleLight: {
    fontFamily: "Raleway",
    color: theme.palette.secondary.main,
  },
  dateCurrent: {
    color: "white",
    margin: "1em",
  },
}));

const TimelineWorkHistory = () => {
  const classes = useStyles();
  return (
    <>
      <Card variant="elevation">
        <CardContent>
          <Typography
            variant="h3"
            component="h1"
            className={classes.titleLight}
            gutterBottom
          >
            Employment history
          </Typography>
          <VerticalTimeline>
            <VerticalTimelineElement
              data-test="dt-AvailableForWork"
              className="vertical-timeline-element--work"
              textClassName={classes.timelineTextAreaCurrent}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2021 - present"
              dateClassName={classes.dateCurrent}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<CodeIcon />}
            >
              <Typography
                variant="h4"
                component="h2"
                className={classes.VerticalTimelineElementContent}
                gutterBottom
                style={{ color: "white" }}
              >
                {" "}
                Available for work
              </Typography>
              <Typography variant="body1" className={classes.textPCurrent}>
                Currently availble for work, In the meantime I'm working on a
                few React based projects to keep the engineering oil flowing
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Panlogic"
              className="vertical-timeline-element--work"
              textClassName={classes.timelineTextArea1}
              date="2020 - 2020"
              iconStyle={{ background: "#e91e63", color: "#fff" }}
              icon={<TouchAppIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Technical Project Manager
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Panlogic :{" "}
                <a
                  className={classes.linkItem}
                  href="https://www.panlogic.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.panlogic.co.uk
                </a>
              </Typography>
              <Typography variant="body1">
                Led on Drupal (and other) CMS / technology client deliveriables.
              </Typography>
              <Typography variant="body1">
                Worked directly with clients to manage scope, planning, delivery
                and maintenance of multiple projects
              </Typography>
              <Typography variant="body1">
                Helped out with QA and development tasks when required
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Ensemble"
              className="vertical-timeline-element--work"
              textClassName={classes.timelineTextArea2}
              date="2016 - 2020"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<CommuteIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Technical Project Manager
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Ensemble Systems. UK :{" "}
                <a
                  className={classes.linkItem}
                  href="https://www.ensemble.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ensemble.co.uk
                </a>
              </Typography>

              <Typography variant="body1">
                Responsible for the smooth running of multiple client projects,
                working closely with clients, stakeholders and developers to
                ensure agile projects and budgets are on track. A varied role
                requiring a strong technical background, good communication
                skills and a heavy focus on agile principles.
              </Typography>

              <Typography variant="body1">
                Lead developer for smaller projects and prototypes to help
                reduce resource bottlenecks
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Tictrac"
              className="vertical-timeline-element--work"
              date="2014 - 2016"
              textClassName={classes.timelineTextArea1}
              iconStyle={{ background: "#e91e63", color: "#fff" }}
              icon={<FavoriteIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Agile Project Manager
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Tictrac :{" "}
                <a
                  className={classes.linkItem}
                  href="https://tictrac.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tictrac.com
                </a>
              </Typography>
              <Typography variant="body1">
                Grew the project management function for one of the UK’s fastest
                growing start-ups in the self-tracking and healthcare space
                (2015)
              </Typography>
              <Typography variant="body1">
                Accountable for the successful management of multi-disciplinary
                teams to customise and deliver software-as-a-service
              </Typography>
              <Typography variant="body1">
                Utilising Agile methodoliges to ensure successful continuous
                deployments across Web, Android and IOS
              </Typography>
              <Typography variant="body1">
                Lead developer for smaller projects and prototypes to help
                reduce resource bottlenecks
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-ElectricWord"
              className="vertical-timeline-element--education"
              date="2010 - 2014"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<ExtensionIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Web Development Manager
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Electric Word PLC <br />
                <a
                  className={classes.linkItem}
                  href="https://www.sportbusiness.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sportbusiness.com
                </a>{" "}
                : <br />
                <a
                  className={classes.linkItem}
                  href="https://www.optimus-education.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  optimus-education.com
                </a>
              </Typography>
              <Typography variant="body1">
                Hired and trained new web development team in agile
                methodologies. Migrated around 30+ websites over to the (then
                new) Drupal 7 platforms with improved subscription and
                e-commerce functionality as well as improving the user
                experience, SEO techniques and editor environments.
              </Typography>
              <Typography variant="body1">
                Another varied role requiring a combination of hands on
                engineering and technical project management
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-AVG"
              className="vertical-timeline-element--education"
              date="2009 - 2010"
              iconStyle={{
                background: "rgb(233, 30, 99)",
                color: "#fff",
              }}
              icon={<BugReportIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Web Delivery Manager
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                AVG Technologies :{" "}
                <a
                  className={classes.linkItem}
                  href="http://www.avg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  avg.com
                </a>
              </Typography>
              <Typography variant="body1">
                Successful hiring of a new global marketing web team in Prague,
                focusing on optimizing the global web presence, revenue and user
                experience. Working closely with the CEO and VP of marketing.
                managing a team of developers, designers, copywriters and
                marketing specialists to shape a centre of excellence for the
                web.
              </Typography>
              <Typography variant="body1">
                Accountable for the successful rebrand and continuous rollout
                AVG's global web platforms
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-LGT"
              className="vertical-timeline-element--education"
              date="2006 - 2009"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<SchoolIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Developer/Head of Technology
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                London Gifted & Talented :{" "}
                <a
                  className={classes.linkItem}
                  href="https://londongt.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  londongt.org
                </a>
              </Typography>
              <Typography variant="body1">
                Developing and maintaining over 50 drupal based educational
                websites. Responsible for managing a team of developers,
                contract programmers and content developers through strict
                development processes to tight budgets and timelines. Manage all
                servers and IT infrastructure.
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Moneynet"
              className="vertical-timeline-element--education"
              date="2001 - 2006"
              iconStyle={{
                background: "rgb(233, 30, 99)",
                color: "#fff",
              }}
              icon={<MonetizationOnIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Web Developer
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Moneynet :{" "}
                <a
                  className={classes.linkItem}
                  href="http://www.moneynet.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  moneynet.co.uk
                </a>
              </Typography>
              <Typography variant="body1">
                Senior Developer for one of the largest online independent
                finance sites in the UK, powering several finance portals for
                companies such as Financial Times and The Independent.
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-BudgetDirect"
              className="vertical-timeline-element--education"
              date="2000 - 2001"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<ShoppingCartIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Developer
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Budget Direct
              </Typography>
              <Typography variant="body1">
                Responsible for design, build, market and maintenance of
                e-commerce websites for B2B and B2C.
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-BBC"
              className="vertical-timeline-element--education"
              date="2000 - 2000"
              iconStyle={{
                background: "rgb(233, 30, 99)",
                color: "#fff",
              }}
              icon={<SportHandballIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Web Developer
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                BBC Sport Online :{" "}
                <a
                  className={classes.linkItem}
                  href="http://news.bbc.co.uk/sport/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BBC Sport
                </a>
              </Typography>
              <Typography variant="body1">
                Web developer and designer for the BBC Sport platform.{" "}
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-MinistryOfSound"
              className="vertical-timeline-element--education"
              date="2000 - 2000"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<AlbumIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Web Developer
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Ministry of Sound :{" "}
                <a
                  className={classes.linkItem}
                  href="https://www.ministryofsound.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ministryofsound.com
                </a>
              </Typography>
              <Typography variant="body1">
                Web developer to help maintain current website alongside a team
                of journalists and coders.
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Unreal"
              className="vertical-timeline-element--education"
              date="1999 - 2000"
              iconStyle={{
                background: "rgb(233, 30, 99)",
                color: "#fff",
              }}
              icon={<BusinessIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Web Developer / Managing Director
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Unreal Internet Design Solutions Ltd
              </Typography>
              <Typography variant="body1">
                Early adopters of the internet with a start up Web design &
                development company
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-selfEmployed"
              className="vertical-timeline-element--education"
              date="1997 - 1999"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<DevicesIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Web Developer
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Freelance
              </Typography>
              <Typography variant="body1">
                Web design and development for ad-hoc projects
              </Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-soundEngineer"
              className="vertical-timeline-element--education"
              date="1997 - 1999"
              iconStyle={{
                background: "rgb(233, 30, 99)",
                color: "#fff",
              }}
              icon={<SettingsInputIcon />}
            >
              <Typography
                variant="h6"
                component="h2"
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Resident Sound Engineer
              </Typography>
              <Typography
                variant="subtitle1"
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Union Bar/The Crypt
              </Typography>
              <Typography variant="body1">
                Resident sound engineer for a live venue
              </Typography>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </CardContent>
      </Card>
    </>
  );
};

export default TimelineWorkHistory;
