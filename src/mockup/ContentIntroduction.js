import React from 'react';




// MAterial UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


import { DiHtml5, DiCss3, DiMongodb, DiReact, DiNodejs, DiJavascript } from "react-icons/di";

// Icons
import { MdEuroSymbol, MdFormatQuote, MdGroupAdd, MdAssignmentInd, MdBusiness, MdTimer, MdShoppingCart, MdLocalHospital, MdLocationCity, MdLocalLibrary, MdAudiotrack, MdAccountBalance } from 'react-icons/md';

const ContentIntroduction = () => {


    return (
        <>
            <Card>
                <CardContent>
                    <h1>Hi,</h1>
                    <h2>I'm Stuart</h2>
                    <MdFormatQuote />Over the past 20 yesrs I've helped some great companies build and deliver digital projects<MdFormatQuote />


                    <h2>Working as:</h2>

                    <h3>Front End Developer</h3>
                Currently I'm loving the JavaScript ecosystem.

            <h4>Current Developing in:</h4>
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

                    <Divider />

                    <h3>Delivery Manager / Agile Project Manager</h3>
                    <h4>Managing:</h4>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={2}>
                            <MdGroupAdd />Teans
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





                    <p>Working with some great people across varied sectors</p>




                    <h3>including: </h3>

                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={2}>
                            Startups
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
                            Sport
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
                    <Divider />
                </CardContent>
            </Card>
        </>
    )
}


export default ContentIntroduction;
