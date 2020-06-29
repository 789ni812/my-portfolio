import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// Icons
import { MdGetApp, MdContacts } from 'react-icons/md';
import { DiGithub } from "react-icons/di";

const Footer = () => {


    return (
        <>
            <Card>
                <Button variant="contained" color="primary"><MdGetApp />Download CV</Button> |
                <Button variant="contained" color="primary"><MdContacts /> Get in touch</Button> |

                <Button variant="contained" color="primary"><DiGithub /> Github</Button>

            </Card>
        </>
    )
}

export default Footer;