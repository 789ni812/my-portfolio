import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
const Footer = () => {


    return (
        <>
            <Card>

                <Button variant="contained" color="primary"><GetAppRoundedIcon />Download CV</Button>


                <Button variant="contained" color="primary"><ContactsRoundedIcon /> Get in touch</Button>

            </Card>
        </>
    )
}

export default Footer;