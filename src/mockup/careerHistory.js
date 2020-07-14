import React, { useState } from 'react';
import Moment from 'react-moment';

import { CareerHistory as history } from './data-points';

import { Card, Typography, Container, Box, CardContent } from '@material-ui/core';

// Material-ui Expansion panel
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

// Icons
import { MdExpandMore } from 'react-icons/md';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));
// End Material-ui Expansion Panel   




const CareerHistory = () => {

    // Material UI expanded
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const sortedContent = history.sort()

    // Render employment history in reverse order
    const content = sortedContent.slice(0).reverse().map((post) =>


        <Card key={post.id}>
            <CardContent>

                <div className={classes.root} key={post.id} >
                    <ExpansionPanel expanded={expanded === `panel${post.id}`} onChange={handleChange(`panel${post.id}`)}>
                        <ExpansionPanelSummary
                            expandIcon={<MdExpandMore />}
                            aria-controls={`panel${post.id}bh-content`}
                            id="panel4bh-header">

                            <Box textAlign="left" m={1}>
                                <Typography className={classes.secondaryHeading}>Company: {post.companyName}</Typography>
                                <Typography className={classes.secondaryHeading}> Role: {post.role}</Typography>
                            </Box>


                            <Box textAlign="right" m={1}>
                                <Typography className={classes.secondaryHeading}>
                                    {/*Duration: <Moment ago from={post.endDateUS}>{post.startDateUS}</Moment>*/}
                                </Typography>
                            </Box>


                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>


                            {/* MAIN CONTENT LOOP */}
                            <Container>
                                < Card key={post.id}>


                                    <ul>
                                        <li >Time at role: <Moment ago from={post.endDateUS}>{post.startDateUS}</Moment>  </li>
                                        <li>Started: <Moment format="DD-MM-YYYY">{post.startDateUS}</Moment></li>
                                        <li>Ended: <Moment format="DD-MM-YYYY">{post.endDateUS}</Moment></li>

                                        {/*
                                {post.agileSkills ? <ul>{post.agileSkills.map(agileSkill => (<li key={agileSkill}>{agileSkill}</li>))}</ul> : ''}
                                {post.skills ? <ul>{post.skills.map(skill => (<li key={skill}>{skill}</li>))}</ul> : ''}

                                {post.description ? post.description : ''}
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {JSON.stringify(post.description)}
                                    </Typography>
                                </CardContent>

                                {post.exampleSites ? <ul>{post.exampleSites.map(exampleSite => (<li key={exampleSite}>{exampleSite}</li>))}</ul> : ''}

                                {post.clientsWorkedWith ? <ul>{post.clientsWorkedWith.map(client => (<li key={client}>{client}</li>))}</ul> : ''}
                                {post.respnsibilitiesAndDuties ? <li>{post.respnsibilitiesAndDuties}</li> : ''}
                     */}
                                    </ul>
                                </Card >
                            </Container>
                            {/* END MAIN CONTENT LOOP */}

                        </ExpansionPanelDetails>
                    </ExpansionPanel >



                </div >
            </CardContent>
        </Card>
    );





    return (
        <>
            <h1>Previous employment</h1>
            {content}
        </>

    )
};

export default CareerHistory;