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

                    <Typography color="textSecondary" variant="h5" align="right" gutterBottom>
                        "With a fair amount of previous"
                      </Typography>
                    <hr />


                    <Typography variant="h2" color="textPrimary" gutterBottom>
                        Work status: Currently available for work
                    </Typography>

                    <Typography color="textSecondary" variant="h5" align="right" gutterBottom>
                        As of 14th June 2020
                    </Typography>

                    <hr />
                    {/* //TODO FINISH this page layout */}


                    {/* //TODO add Currently available for work. */}

                    <p>Over 20 years experience</p>
                    <p>Delivering digital projects, has given me a solid understanding and hands on experience delivering digital projects</p>

                    <p>Such as: </p>



                    <ul>

                        <li>Planning</li>
                        <li>Developing

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
                        </li>
                        <li>Maintaining</li>
                        <li>Managing
                                 <ul>
                                <li>Teams</li>
                                <li>Digital Projects</li>
                                <li>Infrastructure</li>
                            </ul>
                        </li>
                    </ul>

                    <p>digital projects</p>
                    <p>For</p>
                    <ul>
                        <li>Startups</li>
                        <li>Government</li>
                        <li>Banks</li>
                        <li>Global brands</li>
                    </ul>

                    <p>Working with some great people across varied sectors</p>
                    <p>including: </p>
                    <ul>
                        <li>Startups</li>
                        <li>Government</li>
                        <li>Banks</li>
                        <li>Health</li>
                        <li>Education</li>
                        <li>Sports</li>
                        <li>Music</li>
                        <li>Global brands</li>
                    </ul>


                </CardContent>
            </Card>
        </>
    )
}


export default ContentIntroduction;
