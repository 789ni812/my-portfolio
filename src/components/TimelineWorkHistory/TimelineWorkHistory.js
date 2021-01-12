import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CodeIcon from "@material-ui/icons/Code";
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
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  rootCard: {
    fontFamily: "Raleway",
    minWidth: 275,
  },
  rootTitleCurrent: {
    fontFamily: "Raleway",
    color: "#fff",
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
}));

const TimelineWorkHistory = () => {
  const classes = useStyles();
  return (
    <div data-test="component-timelineDemo">
      <Card className={classes.rootCard} variant="outlined">
        <CardContent className={classes.IntroText}>
          <h3 className={classes.rootTitle}>Employment history</h3>
          <VerticalTimeline>
            <VerticalTimelineElement
              data-test="dt-AvailableForWork"
              className="vertical-timeline-element--work"
              textClassName={classes.timelineTextAreaCurrent}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2021 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<CodeIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitleCurrent
                }`}
              >
                Available for work
              </h3>
              <p className={classes.textPCurrent}>
                Currently working on a few React based projects. I am also
                seeking employment.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Panlogic"
              className="vertical-timeline-element--work"
              textClassName={classes.timelineTextArea1}
              date="2020 - 2020"
              iconStyle={{ background: "#e91e63", color: "#fff" }}
              icon={<TouchAppIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Digital Project Manager
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Digital Project Manager focusing on Drupal based projects
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Ensemble"
              className="vertical-timeline-element--work"
              textClassName={classes.timelineTextArea2}
              date="2016 - 2020"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<CommuteIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Technical Project Manager
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Responsible for the smooth running of multiple client projects,
                working closely with clients, stakeholders and developers to
                ensure agile projects and budgets are on track, facilitating and
                running all relevant project meetings across several time zones.
                A varied role requiring a strong technical background, good
                communication skills and a heavy focus on agile principles.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Tictrac"
              className="vertical-timeline-element--work"
              date="2014 - 2016"
              textClassName={classes.timelineTextArea1}
              iconStyle={{ background: "#e91e63", color: "#fff" }}
              icon={<FavoriteIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Agile Project Manager
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Grew the project management function for one of the UK’s fastest
                growing start-ups in the self-tracking and healthcare space
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-ElectricWord"
              className="vertical-timeline-element--education"
              date="2010 - 2014"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<ExtensionIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Development Manager
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Hired and trained a new web development team in agile
                methodologies. Migrated around 50 websites over to new Drupal 7
                platforms with improved subscription and e-commerce
                functionality as well as improving the user experience, SEO
                techniques and editor environments.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-AVG"
              className="vertical-timeline-element--education"
              date="2009 - 2010"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BugReportIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Web Delivery Manager
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Successful hiring of a web team in Prague, focusing on
                optimizing the global web presence, revenue and user experience.
                Working closely with the CEO and VP of web marketing and
                managing a team of developers, designers, copywriters and
                marketing specialists to shape a centre of excellence for the
                web.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-LGT"
              className="vertical-timeline-element--education"
              date="2006 - 2009"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Developer/Head of Technology
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Developing and maintaining over 50 educational websites.
                Responsible for managing a team of developers, contract
                programmers and content developers through strict development
                processes to tight budgets and timelines. Manage all servers and
                IT infrastructure.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Moneynet"
              className="vertical-timeline-element--education"
              date="2001 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MonetizationOnIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Senior Developer
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Senior Developer for one of the largest online independent
                finance sites in the UK, powering several finance portals for
                companies such as Financial Times and The Independent.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-BudgetDirect"
              className="vertical-timeline-element--education"
              date="2000 - 2001"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<ShoppingCartIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                E-Commerce Project Manager/Developer
              </h3>
              <h4
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Budget Direct
              </h4>
              <p className={classes.textP}>
                Responsible for design, build, market and maintenance of
                e-commerce websites for B2B and B2C.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-BBC"
              className="vertical-timeline-element--education"
              date="2000 - 2000"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SportHandballIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Web Developer/Designer
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Web developer and designer for the BBC Sport platform.{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-MinistryOfSound"
              className="vertical-timeline-element--education"
              date="2000 - 2000"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<AlbumIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Web Developer
              </h3>
              <h4
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
              </h4>
              <p className={classes.textP}>
                Web developer to help maintain current website alongside a team
                of journalists and coders.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-Unreal"
              className="vertical-timeline-element--education"
              date="1999 - 2000"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BusinessIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Managing Director
              </h3>
              <h4
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Unreal Internet Design Solutions Ltd
              </h4>
              <p className={classes.textP}>
                Early adopters of the internet with a start up Web design &
                development company
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-selfEmployed"
              className="vertical-timeline-element--education"
              date="1997 - 1999"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<DevicesIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Self Employed Web Developer
              </h3>
              <h4
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Self employed
              </h4>
              <p className={classes.textP}>
                Web design and development for ad-hoc projects
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              data-test="dt-soundEngineer"
              className="vertical-timeline-element--education"
              date="1997 - 1999"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SettingsInputIcon />}
            >
              <h3
                className={`${"vertical-timeline-element-title"} ${
                  classes.rootTitle
                }`}
              >
                Resident Sound Engineer
              </h3>
              <h4
                className={`${"vertical-timeline-element-subtitle"} ${
                  classes.rootTitle2
                }`}
              >
                Union Bar/The Crypt
              </h4>
              <p className={classes.textP}>
                Resident sound engineer for a live venue
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineWorkHistory;
