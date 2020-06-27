import React from 'react';




// MAterial UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



// Icons
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded';
import SportsTennisRoundedIcon from '@material-ui/icons/SportsTennisRounded';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import EuroRoundedIcon from '@material-ui/icons/EuroRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';

const ContentIntroduction = () => {


    return (
        <>
            <Card>
                <h1>Hi,</h1>
                <h2>I'm Stuart</h2>
                <h3>how are you?</h3>
            </Card>
            <Card>
                <CardContent>
                    <FormatQuoteRoundedIcon />Over the past 20 yesrs I've helped some great companies build and deliver digital projects<FormatQuoteRoundedIcon />
                </CardContent>

            </Card>

            <Card>
                <CardContent>
                    <h3>Working as: </h3>

                    <Card>
                        <CardContent>
                            <h2>Front End Developer</h2>

                            <h3>Current Developing with:</h3>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={2}>
                                    <span className="devicon-html5-plain"> HTML</span>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <span className="devicon-css3-plain"> CSS</span>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <span className="devicon-javascript-plain"> JavaScript</span>
                                </Grid>

                                <Grid item xs={6} sm={2}>
                                    <span className="devicon-mongodb-plain"> Mongo</span>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <span className="devicon-react-plain"> React</span>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <span className="devicon-nodejs-plain"> NodeJS</span>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Divider />

                            <h2>Delivery Manager / Agile Project Manager</h2>

                            <h3>Managing:</h3>



                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={2}>
                                    <GroupAddRoundedIcon /> Teams
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <EuroRoundedIcon /> Budgets
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <AssignmentIndRoundedIcon /> Clients
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <TimerRoundedIcon /> Projects
                        </Grid>

                            </Grid>

                        </CardContent>

                    </Card>
                    <Card>
                        <CardContent>
                            <p>Working with some great people across varied sectors</p>
                            <h3>including: </h3>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={2}>
                                    <EmojiObjectsRoundedIcon />Startups
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <LocationCityRoundedIcon /> Government
                    </Grid>

                                <Grid item xs={6} sm={2}>
                                    <AccountBalanceIcon /> Banks
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <LocalHospitalRoundedIcon /> Health
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <LocalLibraryRoundedIcon /> Education
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <SportsTennisRoundedIcon /> Sport
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <ShoppingCartRoundedIcon /> Ecommerce
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <AudiotrackRoundedIcon /> Music
                        </Grid>

                                <Grid item xs={6} sm={2}>
                                    <BusinessRoundedIcon /> Global Brands
                        </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>

        </>
    )
}


export default ContentIntroduction;
