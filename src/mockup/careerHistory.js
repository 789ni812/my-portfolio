import React, { useState } from 'react';
import Moment from 'react-moment';



import { CareerHistory as history } from './data-points';

import { Card, CardContent, Typography } from '@material-ui/core';

// Material-ui Expansion panel
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
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



    //FIXME Reverse().map is constanly reversing the order each time you load the page.
    // const content = history.reverse().map((post) =>

    const content = history.map((post) =>

        < div className={classes.root} key={post.id}>
            <ExpansionPanel expanded={expanded === `panel${post.id}`} onChange={handleChange(`panel${post.id}`)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${post.id}bh-content`}
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Company: {post.companyName}</Typography>
                    <Typography className={classes.heading}>Role: {post.role}</Typography>
                    <Typography className={classes.secondaryHeading}><Moment format="MMMM YYYY">{post.startDateUS}</Moment> to <Moment format="MMMM YYYY">{post.endDateUS}</Moment></Typography>

                    {/* //LASTEDIT >> Fixing layout and typography warnings and navigationlinks*/}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>


                    {/* MAIN CONTENT LOOP */}
                    < Card key={post.id} >

                        <p>{post.companyName}</p>
                        <ul>
                            <li>Role: {post.role}</li>
                            <li >Time at role: <Moment ago from={post.endDateUS}>{post.startDateUS}</Moment>  </li>
                            <li>Started: <Moment format="DD MM YYYY">{post.startDateUS}</Moment></li>
                            <li>Ended: <Moment format="DD MM YYYY">{post.endDateUS}</Moment></li>
                            {post.delmeAchievments ? <li>{post.delmeAchievments}</li> : ''}
                            {post.agileSkills ? <ul>{post.agileSkills.map(agileSkill => (<li key={agileSkill}>{agileSkill}</li>))}</ul> : ''}
                            {post.skills ? <ul>{post.skills.map(skill => (<li key={skill}>{skill}</li>))}</ul> : ''}

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.description ? post.description : ''}
                                </Typography>
                            </CardContent>

                            {post.exampleSites ? <ul>{post.exampleSites.map(exampleSite => (<li key={exampleSite}>{exampleSite}</li>))}</ul> : ''}

                            {post.clientsWorkedWith ? <ul>{post.clientsWorkedWith.map(client => (<li key={client}>{client}</li>))}</ul> : ''}
                            {post.respnsibilitiesAndDuties ? <li>{post.respnsibilitiesAndDuties}</li> : ''}

                        </ul>
                    </Card >
                    {/* END MAIN CONTENT LOOP */}




                </ExpansionPanelDetails>
            </ExpansionPanel>


        </div >
    );





    return (
        <>
            <h1>Employment History</h1>
            {content}

        </>

    )
};

export default CareerHistory;