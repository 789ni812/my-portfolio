import React from 'react';



// Material-ui
import { Card, CardContent, Typography } from '@material-ui/core';

const Portfolio = () => {
    return (
        <>
            <h1>Portfolio</h1>
            < Card >
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>Scr1pt0.com</p>
                    </Typography>
                </CardContent>
            </Card >
            < Card >
                <CardContent>
                    <Typography variant="h2" color="textSecondary" component="h2">
                        <h2>ProdPom.com</h2>
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        <h2>ProdPom.com</h2>
                        <p>Playing around with productivity and task managing. Heavily influenced from my Agile Project Management days coaching and supporting Agile development teams.</p>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <p>Built with:</p>

                        <ul>
                            <li className="devicons devicons-nodejs">Node</li>
                            <li className="devicons devicons-javascript">JavaScript</li>
                            <li className="devicons devicons-mongo">Mongo</li>
                            <li className="devicons devicons-html5">HTML 5</li>
                            <li className="devicons devicons-css3">CSS3</li>
                            <li className="devicons devicons-git">Git</li>

                            //TODO >> Last edits made >> Portfolio 
                            <li className="devicons devicons-reactjs">Raect</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card >
        </>
    );
};

export default Portfolio;