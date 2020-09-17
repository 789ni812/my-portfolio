import React from 'react';


// Material UI
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


import { DiHtml5, DiCss3, DiMongodb, DiReact, DiNodejs, DiJavascript } from "react-icons/di";
import styled from "styled-components";
// Icons
import { MdEuroSymbol, MdGroupAdd, MdAssignmentInd, MdTrendingUp, MdBusiness, MdTimer, MdShoppingCart, MdLocalHospital, MdLocationCity, MdLocalLibrary, MdAudiotrack, MdPool, MdAccountBalance, MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai'


const TitleWorkingAs = styled.h2`
font-size: 24px;
    color: #47624fff;
    `;


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #47624fff;
  border-radius: 3px;
  display: block;
  a:link {
      color: black;
    text-decoration: none;
  }
  
  a:visited {
    color: black;
    text-decoration: none;
  }
  
  a:hover {
    color: #47624fff;
    text-decoration: underline;
  }
  
  a:active {
    color: black;
    text-decoration: none;
  }

  `;




const ContentIntroduction = () => {

    return (
        <>
            <h1>Hi, I'm Stuart</h1>
            <h2>For the last 20 years, I've worked with some great people to develop, project manage and deliver digital projects.</h2>

            <h3 align="center">Current status: Available for work. </h3>
            <Card>

                <CardContent>

                    <h3>Working as a...</h3>

                    <Card>
                        <CardContent>
                            <TitleWorkingAs>Digital Project Manager / Development Manager</TitleWorkingAs>
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



                    <h3>And a <span >...</span></h3>
                    <Divider variant="middle" />


                    <Card>
                        <CardContent>
                            <TitleWorkingAs>Front End / Full Stack Developer</TitleWorkingAs>
                            <h5>My current development environment is around the JavaScript ecosystem:</h5>
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

                    <h3 align="center">Want to get in touch?</h3>
                    <Card>
                        <CardContent>
                            <p>I'm currently available for work so please feel free to contact me.</p>

                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={3}>
                                    <Button>
                                        <a href="https://www.linkedin.com/in/stuart-bradford-2a751b3/"><AiFillLinkedin /> LinkedIn
                                    </a>


                                    </Button>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Button>
                                        <a href="mailto:bradfordstuart+sbs@gmail.com">
                                            <MdEmail /> Email
                                        </a>


                                    </Button>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                </CardContent>

            </Card>
        </>
    )
}


export default ContentIntroduction;
