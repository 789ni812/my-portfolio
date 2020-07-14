import React, { useState } from 'react';
import Moment from 'react-moment';

import { CareerHistory as history } from './data-points';



// **** START: Material-ui 

import { Card, Typography, Container, Box, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Expansion panel
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

// Lists
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

// **** End: Material-ui 


// react-Icons
import { MdExpandMore } from 'react-icons/md';
import { AiOutlineUsergroupAdd, AiOutlineUsergroupDelete } from 'react-icons/ai';

// react-html-parser
import parse from 'html-react-parser';

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
                    <ExpansionPanel square expanded={true}>
                        {/*<ExpansionPanel expanded={expanded === `panel${post.id}`} onChange={handleChange(`panel${post.id}`)}>*/}
                        <ExpansionPanelSummary
                            expandIcon={<MdExpandMore />}
                            aria-controls={`panel${post.id}bh-content`}
                            id="panel4bh-header">

                            <Box textAlign="left" m={1}>
                                <Typography className={classes.secondaryHeading}>Company: {post.companyName}</Typography>
                                <Typography className={classes.secondaryHeading}> Role: {post.role}</Typography>
                                <Typography className={classes.secondaryHeading}>Duration: <Moment ago from={post.endDateUS}>{post.startDateUS}</Moment></Typography>
                            </Box>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>


                            {/* MAIN CONTENT LOOP */}
                            <Container>

                                < Card key={post.id}>


                                    <List className={classes.root}>

                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <AiOutlineUsergroupAdd />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Started: " secondary={<Moment format="DD-MM-YYYY">{post.startDateUS}</Moment>} />

                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <AiOutlineUsergroupDelete />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Ended" secondary={<Moment format="DD-MM-YYYY">{post.endDateUS}</Moment>} />
                                        </ListItem>
                                    </List>

                                    {post.description ?
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" >
                                                {parse(post.description)}
                                            </Typography>
                                        </CardContent>
                                        :
                                        ''}


                                    {/*
                                {post.agileSkills ? <ul>{post.agileSkills.map(agileSkill => (<li key={agileSkill}>{agileSkill}</li>))}</ul> : ''}
                                {post.skills ? <ul>{post.skills.map(skill => (<li key={skill}>{skill}</li>))}</ul> : ''}

                                
                                {post.exampleSites ? <ul>{post.exampleSites.map(exampleSite => (<li key={exampleSite}>{exampleSite}</li>))}</ul> : ''}

                                {post.clientsWorkedWith ? <ul>{post.clientsWorkedWith.map(client => (<li key={client}>{client}</li>))}</ul> : ''}
                                {post.respnsibilitiesAndDuties ? <li>{post.respnsibilitiesAndDuties}</li> : ''}
                     */}

                                </Card >
                            </Container>
                            {/* END MAIN CONTENT LOOP */}

                        </ExpansionPanelDetails>
                    </ExpansionPanel >



                </div >
            </CardContent>
        </Card >
    );





    return (
        <>
            <h1>Previous employment</h1>
            {content}
        </>

    )
};

export default CareerHistory;