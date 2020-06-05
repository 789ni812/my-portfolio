import React from 'react';



// Material-ui
import { Card, CardContent, Typography } from '@material-ui/core';

const Portfolio = () => {
    return (
        < Card >

            <p>Portfolio</p>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <p>Porty Mc Portfolio</p>
                </Typography>
            </CardContent>

        </Card >
    );
};

export default Portfolio;