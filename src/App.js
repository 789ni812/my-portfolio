import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




//import './App.scss'; //TODo decide if to keep this stylesheet / theme approach


import Footer from './components/Footer';
//import ChartExample from './mockup/chartExample'; // show off some information in chart. Dont know what though?
import CareerHistory from './mockup/careerHistory';
//import UserDetailsTest from './mockup/test_usersDetails'; // navigator useragent information
import ContentIntroduction from './mockup/ContentIntroduction';
//import PortfolioContent from './mockup/Portfolio';


// Material-ui
import Grid from '@material-ui/core/Grid';



// playing
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'


//START Material-ui AppBar
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container'


// Icons
import { MdGetApp, MdContacts } from 'react-icons/md';
import { DiGithub } from "react-icons/di";
// Icons
import { MdSend, MdInbox } from 'react-icons/md';
import { Divider } from "@material-ui/core";






const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


//END Material-ui AppBar



function Home() {
  return <ContentIntroduction />;
}

// function Portfolio() {
//   return <PortfolioContent />
// }

function EmploymentHistory() {
  return <CareerHistory />
}

const App = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container >
          <Grid container spacing={8} alignItems="center"
            justify="center">

            {/* START HEADER */}
            <Grid item xs={12} >
              <div className={classes.root}>

                <AppBar position="fixed">
                  <Toolbar>
                    <div>
                      <Button
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                      >Menu
                  </Button>


                      <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >

                        <StyledMenuItem>
                          <ListItemIcon>
                            <MdSend fontSize="small" />
                          </ListItemIcon>
                          <Link to="/">  <ListItemText primary="Home" />
                          </Link>
                        </StyledMenuItem>

                        {/*
                        <StyledMenuItem>
                          <ListItemIcon>
                            <MdDrafts fontSize="small" />
                          </ListItemIcon>
                                      <Link to="/portfolio">  <ListItemText primary="Portfolio" />
  </Link> 
                        </StyledMenuItem>
*/}
                        <StyledMenuItem>
                          <ListItemIcon>
                            <MdInbox fontSize="small" />
                          </ListItemIcon>
                          <Link to="/employmentHistory">  <ListItemText primary="Previous employment" />
                          </Link>
                        </StyledMenuItem>
                      </StyledMenu>
                    </div>
                    <div>
                      <Typography variant="h6" className={classes.title}>
                        StuartBradford.com
                  </Typography>
                    </div>
                  </Toolbar>
                  <Toolbar>
                    <ButtonGroup alignItems="center" fullWidth="2" size="small">
                      <Button variant="contained" color="primary" size="small"><MdContacts /> Get in touch</Button> |

            <Button variant="contained" color="primary" size="small"><DiGithub /> Github</Button> |
            <Button variant="contained" color="secondary" size="small" alignItems="center"
                        justify="center" ><MdGetApp />Download CV</Button>
                    </ButtonGroup>
                  </Toolbar>
                </AppBar>

              </div>
            </Grid>
            {/* END HEADER */}

            {/* START CONTENT SWITCH */}
            <Grid item >
              <Switch>
                { /* <Route path="/portfolio">
                  <Portfolio />
                </Route> */}
                <Route path="/employmentHistory">
                  <EmploymentHistory />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
              </Switch>
            </Grid>
            {/* END CONTENT SWITCH */}



            {/* START FOOTER */}
            <Grid item xs={12} sm={10}><Footer /></Grid>
            {/* END FOOTER */}
          </Grid>
        </Container>
      </ ThemeProvider>

    </Router>
  );
}
export default App;