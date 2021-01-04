import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/core/Snackbar";

const TimelineWorkHistory = () => {
  return (
    <div data-test="component-timelineDemo">
      <VerticalTimeline>
        <VerticalTimelineElement
          data-test="dt-AvailableForWork"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Available for work
          </h3>
          <p>
            Currently working on a few React and Drupal 9 project. I am also
            seeking employment.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-Panlogic"
          className="vertical-timeline-element--work"
          date="2020 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Digital Project Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Panlogic</h4>
          <p>Digital Project Manager focusing on Drupal based projects</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-Ensemble"
          className="vertical-timeline-element--work"
          date="2016 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Project Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ensemble Systems. UK
          </h4>
          <p>
            Responsible for the smooth running of multiple client projects,
            working closely with clients, stakeholders and developers to ensure
            agile projects and budgets are on track, facilitating and running
            all relevant project meetings across several time zones. A varied
            role requiring a strong technical background, good communication
            skills and a heavy focus on agile principles.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-Tictrac"
          className="vertical-timeline-element--work"
          date="2014 - 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Agile Project Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Tictrac</h4>
          <p>
            Grew the project management function for one of the UK’s fastest
            growing start-ups in the self-tracking and healthcare space
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-ElectricWord"
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Development Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Electric Word PLC
          </h4>
          <p>
            Hired and trained a new web development team in agile methodologies.
            Migrated around 50 websites over to new Drupal 7 platforms with
            improved subscription and e-commerce functionality as well as
            improving the user experience, SEO techniques and editor
            environments.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-AVG"
          className="vertical-timeline-element--education"
          date="2009 - 2010"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Web Delivery Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            AVG Technologies
          </h4>
          <p>
            Successful hiring of a web team in Prague, focusing on optimizing
            the global web presence, revenue and user experience. Working
            closely with the CEO and VP of web marketing and managing a team of
            developers, designers, copywriters and marketing specialists to
            shape a centre of excellence for the web.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-LGT"
          className="vertical-timeline-element--education"
          date="2006 - 2009"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Developer/Head of Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            London Gifted & Talented
          </h4>
          <p>
            Developing and maintaining over 50 educational websites. Responsible
            for managing a team of developers, contract programmers and content
            developers through strict development processes to tight budgets and
            timelines. Manage all servers and IT infrastructure.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-Moneynet"
          className="vertical-timeline-element--education"
          date="2001 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Senior Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Moneynet</h4>
          <p>
            Senior Developer for one of the largest online independent finance
            sites in the UK, powering several finance portals for companies such
            as Financial Times and The Independent.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-BudgetDirect"
          className="vertical-timeline-element--education"
          date="2000 - 2001"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            E-Commerce Project Manager/Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Budget Direct</h4>
          <p>
            Responsible for design, build, market and maintenance of e-commerce
            websites for B2B and B2C.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-BBC"
          className="vertical-timeline-element--education"
          date="2000 - 2000"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer/Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            BBC Sport Online
          </h4>
          <p>In charge of all graphics for the BBC sport website</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-MinistryOfSound"
          className="vertical-timeline-element--education"
          date="2000 - 2000"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ministry of Sound
          </h4>
          <p>
            Web developer to help maintain current website alongside a team of
            journalists and coders.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-Unreal"
          className="vertical-timeline-element--education"
          date="1999 - 2000"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Managing Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Unreal Internet Design Solutions Ltd
          </h4>
          <p>Ran web design company with a colleague</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-selfEmployed"
          className="vertical-timeline-element--education"
          date="1997 - 1999"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Self Employed Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Self employed</h4>
          <p>Web design and development for ad-hoc projects</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          data-test="dt-soundEngineer"
          className="vertical-timeline-element--education"
          date="1997 - 1999"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Resident Sound Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Union Bar/The Crypt
          </h4>
          <p>Resident sound engineer for a live venue</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimelineWorkHistory;
