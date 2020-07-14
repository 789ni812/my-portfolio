import React from 'react';




// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


import { DiHtml5, DiCss3, DiMongodb, DiReact, DiNodejs, DiJavascript } from "react-icons/di";

// Icons
import { MdEuroSymbol, MdFormatQuote, MdGroupAdd, MdAssignmentInd, MdTrendingUp, MdBusiness, MdTimer, MdShoppingCart, MdLocalHospital, MdLocationCity, MdLocalLibrary, MdAudiotrack, MdPool, MdAccountBalance } from 'react-icons/md';

const ContentIntroduction = () => {


    return (
        <>
            <Card>
                <CardContent>
                    <h1>Hi,</h1>
                    <h2>I'm Stuart</h2>
                    <MdFormatQuote />Over the past 20 yesrs I've helped some great companies build and deliver digital projects<MdFormatQuote />


                    <h2>Working as a...</h2>
                    <Card>
                        <h3>Front End Developer</h3>
                        <h4>Current Developing with the following technologies:</h4>
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
                    </Card>
                    <h2>And a <span >...</span></h2>
                    <Divider variant="middle" />
                    <Card>
                        <h3>Delivery Manager / Agile Project Manager</h3>
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
                    </Card>
                    <h2>Across some varied sectors including...</h2>
                    <Card>
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
                    </Card>
                    <Divider />
                </CardContent>
            </Card>
        </>
    )
}


export default ContentIntroduction;
