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
                    <Typography color="textSecondary" gutterBottom>
                        Front End Developer and Javascript Engineer
          </Typography>
                    <Typography>
                        I've been helping companies deliver online platforms and apps for over 20 years
          </Typography>
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
                </CardContent>
            </Card>
        </>
    )
}


export default ContentIntroduction;
