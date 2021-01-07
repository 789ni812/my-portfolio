import React from "react";

// Material UI
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
import styled from "styled-components";
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

const TitleWorkingAs = styled.h2`
  font-size: 24px;
  color: #47624fff;
`;

const ContentIntroduction = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1>Hi, I'm Stuart</h1>
      <p>Javascript (React) Engineer / Digital Project Manager</p>
      <p>20 years experience developing and managing digital projects</p>

      <h3 align="center">Current status: Available for work. </h3>
      <Card>
        <CardContent>
          <h3>Working as a...</h3>
          <Card>
            <CardContent>
              <TitleWorkingAs>Front End / Full Stack Developer</TitleWorkingAs>
              <h5>
                My current development environment is around the JavaScript
                ecosystem:
              </h5>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={2}>
                  <DiHtml5 /> HTML
                </Grid>
                <Grid item xs={6} sm={2}>
                  <DiCss3 /> CSS
                </Grid>
                <Grid item xs={6} sm={2}>
                  <DiJavascript /> JavaScript
                </Grid>

                <Grid item xs={6} sm={2}>
                  <DiMongodb /> Mongo
                </Grid>
                <Grid item xs={6} sm={2}>
                  <DiReact /> React
                </Grid>
                <Grid item xs={6} sm={2}>
                  <DiNodejs /> NodeJS
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <h3>
            And a <span>...</span>
          </h3>
          <Divider variant="middle" />

          <Card>
            <CardContent>
              <TitleWorkingAs>
                Digital Project / Development Manager
              </TitleWorkingAs>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={2}>
                  <MdGroupAdd /> Teams
                </Grid>

                <Grid item xs={6} sm={2}>
                  <MdEuroSymbol /> Budgets
                </Grid>

                <Grid item xs={6} sm={2}>
                  <MdAssignmentInd /> Projects
                </Grid>
                <Grid item xs={6} sm={2}>
                  <MdTimer /> Clients
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <h3>Across some great sectors</h3>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <MdTrendingUp /> Startups
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdLocationCity /> Government
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdAccountBalance /> Banks
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdLocalHospital /> Health
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdLocalLibrary /> Education
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdPool /> Sport
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdShoppingCart /> Ecommerce
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdAudiotrack /> Music
                </Grid>

                <Grid item xs={6} sm={3}>
                  <MdBusiness /> Global Brands
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Divider />
        </CardContent>
      </Card>
    </>
  );
};

export default ContentIntroduction;
