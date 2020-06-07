import React from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const ContentIntroduction = () => {

    return (
        <>
            <h1>Home</h1>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h1" component="h2" color="textSecondary" gutterBottom>
                        Front End Developer and Javascript Engineer
                      </Typography>

                    <Typography color="#555555" variant="h5" align="right" gutterBottom>
                        "With a fair amount of previous"
                      </Typography>
                    <hr />


                    <Typography variant="h2" color="textPrimary" gutterBottom>
                        Work status: Currently available for work
                    </Typography>

                    <Typography color="#555555" variant="h5" align="right" gutterBottom>
                        As of 14th June 2020
                    </Typography>

                    <hr />
                    {/* //TODO FINISH this page layout */}


                    {/* //TODO add Currently available for work. */}
                    <Typography color="textPrimary" component="p" variant="p">
                        <p>Over 20 years experience</p>
                        <p>Delivering digital projects, has given me a solid understanding and hands on experience delivering digital projects</p>

                        <p>Such as: </p>
                        <ul>

                            <li>Planning</li>
                            <li>Developing</li>

                            <ul>
                                <li>Current:
                                <ul>
                                        <li>ReactJS</li>
                                        <li>JavaScript</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Node</li>
                                        <li>Mongo</li>
                                    </ul>
                                </li>
                                <li>Previously Experience:
                                <ul>
                                        <li>PHP</li>
                                        <li>Drupal</li>
                                    </ul>
                                </li>
                            </ul>


                            <li>Maintaining</li>
                            <li>Managing</li>
                            <ul>
                                <li>Teams</li>
                                <li>Digital Projects</li>
                                <li>Infrastructure</li>
                            </ul>
                        </ul>

                        <p>digital projects</p>
                        <p>For</p>
                        <ul>
                            <li>Startups</li>
                            <li>Government</li>
                            <li>Banks</li>
                            <li>Global brands</li>
                        </ul>
                    </Typography>



                    {/* 
          
                    <Typography color="textSecondary">
                        <p>Working with some great people across a varied sectors</p>
                        <p>From: </p>
                        <ul>
                            <li>Startups to Blue chip</li>
                            <li>Government funded to the largest bank in the world</li>
                            <li>Education to Finance</li>
                            <li>Health to mot sports</li>
                        </ul>
                    </Typography>
                    */}
                </CardContent>
            </Card>
        </>
    )
}


export default ContentIntroduction;
