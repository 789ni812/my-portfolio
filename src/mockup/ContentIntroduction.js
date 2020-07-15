import React from 'react';




// Material UI
import { Card, CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import { DiHtml5, DiCss3, DiMongodb, DiReact, DiNodejs, DiJavascript } from "react-icons/di";

// Icons
import { MdEuroSymbol, MdFormatQuote, MdGroupAdd, MdAssignmentInd, MdTrendingUp, MdBusiness, MdTimer, MdShoppingCart, MdLocalHospital, MdLocationCity, MdLocalLibrary, MdAudiotrack, MdPool, MdAccountBalance } from 'react-icons/md';

import lockDownStu from '../assets/images/lockdownStu-1.png';

const ContentIntroduction = () => {


    return (
        <>
            <Card>
                <CardContent>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" src={lockDownStu} />
                        }
                        title="Hi, I'm Stuart"
                        subheader="Over the past 20 yesrs I've helped some great companies build and deliver digital projects">
                    </CardHeader>



                    <h2>Working as a...</h2>
                    <Card>
                        <CardContent>
                            <h3>Front End / Full Stack Developer</h3>
                            <h4>Main development environment is around the JavaScript ecosystem:</h4>
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
                    <h2>And a <span >...</span></h2>
                    <Divider variant="middle" />
                    <Card>
                        <CardContent>
                            <h3>Development Manager / Digital Project Manager</h3>
                            <h4>Managing:</h4>
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
                                    <MdTimer />
                            Clients
                        </Grid>

                            </Grid>
                        </CardContent>
                    </Card>

                    <h2>Across some varied sectors including...</h2>
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={2}>
                                    <MdTrendingUp /> Startups
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <MdLocationCity /> Government
                    </Grid>

                                <Grid item xs={6} sm={2}>
                                    <MdAccountBalance /> Banks
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <MdLocalHospital /> Health
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <MdLocalLibrary /> Education
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <MdPool />Sport
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <MdShoppingCart /> Ecommerce
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <MdAudiotrack /> Music
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <MdBusiness /> Global Brands
                        </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    <Divider />
                </CardContent>
            </Card>
        </>
    )
}


export default ContentIntroduction;
