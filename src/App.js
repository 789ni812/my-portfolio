import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




import './App.scss';

import Footer from './components/Footer';
//import ChartExample from './mockup/chartExample'; // show off some information in chart. Dont know what though?
import CareerHistory from './mockup/careerHistory';
//import UserDetailsTest from './mockup/test_usersDetails'; // navigator useragent information
import ContentIntroduction from './mockup/ContentIntroduction';
import PortfolioContent from './mockup/Portfolio';


// Material-ui
import Grid from '@material-ui/core/Grid';

//START Material-ui AppBar
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

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

function Portfolio() {
  return <PortfolioContent />
}

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
      <div>
        <Grid container spacing={3}>

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
                          <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <Link to="/">  <ListItemText primary="Home" />
                        </Link>
                      </StyledMenuItem>

                      <StyledMenuItem>
                        <ListItemIcon>
                          <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <Link to="/portfolio">  <ListItemText primary="Portfolio" />
                        </Link>
                      </StyledMenuItem>

                      <StyledMenuItem>
                        <ListItemIcon>
                          <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <Link to="/employmentHistory">  <ListItemText primary="Previous employment" />
                        </Link>
                      </StyledMenuItem>
                    </StyledMenu>
                  </div>
                  <div>
                    <Typography variant="h6" className={classes.title} align="center">
                      StuartBradford.com
                  </Typography>
                  </div>
                </Toolbar>
              </AppBar>

            </div>
          </Grid>
          {/* END HEADER */}

          {/* START CONTENT SWITCH */}
          <Grid item xs={12} sm={10} >
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
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
      </div>
    </Router>
  );
}
export default App;