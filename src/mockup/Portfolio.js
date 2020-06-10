import React from 'react';



// Material-ui
import { Card, CardContent, Typography } from '@material-ui/core';


const Portfolio = () => {


    return (
        <>
            <h1>Portfolio</h1>
            <p>All examples below are focused around JavaScipt.</p>
            < Card >
                <CardContent>
                    <Typography variant="h5" color="textSecondary" component="h3">
                        Scr1pt0.com
                    </Typography>

                    <p>A place to capture, store and catalogue all things JavaScript I find on my way.</p>
                    <p>The JavaScript eco system is moving at an incredible pace, hopefully Sc1pt0.com will be of some help to a buddy JavaScript or front end developer.</p>

                    <p>built with:</p>
                    <ul>
                        <li className="devicons devicons-nodejs">Node</li>
                        <li className="devicons devicons-javascript">JavaScript</li>
                        <li className="devicons devicons-mongo">Mongo</li>
                        <li className="devicons devicons-html5">HTML 5</li>
                        <li className="devicons devicons-css3">CSS3</li>
                        <li className="devicons devicons-git">Git</li>
                        <li className="devicons devicons-reactjs">React</li>
                    </ul>

                    {/* //TODO Get screenshot of Scr1pt0.com site for portfolio */}



                </CardContent>
            </Card >
            < Card >
                <CardContent>
                    <Typography variant="h5" color="textSecondary" component="h3">
                        ProdPom.com
                    </Typography>


                    <p>Playing around with productivity and task managing. Heavily influenced from my Agile Project Management days coaching and supporting Agile development teams.</p>

                    <p>Built with:</p>

                    <ul>
                        <li className="devicons devicons-nodejs">Node</li>
                        <li className="devicons devicons-javascript">JavaScript</li>
                        <li className="devicons devicons-mongo">Mongo</li>
                        <li className="devicons devicons-html5">HTML 5</li>
                        <li className="devicons devicons-css3">CSS3</li>
                        <li className="devicons devicons-git">Git</li>
                        <li className="devicons devicons-reactjs">React</li>
                    </ul>

                    {/* //TODO Get screenshot of ProdPom.com site for portfolio */}

                </CardContent>
            </Card >

            < Card >
                <CardContent>
                    <Typography variant="h5" color="textSecondary" component="h3">
                        stuartbradford.com
                    </Typography>


                    <p>This Site! A basic site to help showcase some of my JavaScript examples. </p>

                    <p>Built with:</p>

                    <ul>
                        <li className="devicons devicons-nodejs">Node</li>
                        <li className="devicons devicons-javascript">JavaScript</li>
                        <li className="devicons devicons-mongo">Mongo</li>
                        <li className="devicons devicons-html5">HTML 5</li>
                        <li className="devicons devicons-css3">CSS3</li>
                        <li className="devicons devicons-git">Git</li>
                        <li className="devicons devicons-reactjs">React</li>
                    </ul>

                    {/* //TODO Get screenshot of stuartbradford.com site for portfolio */}

                </CardContent>
            </Card >
        </>
    );
};

export default Portfolio;