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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
    <div>
      <Grid container spacing={3}>
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
                  <Router>
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
                        {/* //FIXME Links do not work for header menu */}
                        <Link to="/">  <ListItemText primary="Sent mail" />
                     hello   </Link>
                      </StyledMenuItem>

                      <StyledMenuItem>

                        <ListItemIcon>
                          <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <Link to="/portfolio">  <ListItemText primary="Drafts" />Portfolio
                        </Link>
                        {/* FIXME >>>> THIS WAS LAST PLACE _ WOrking on Router Link issue*/}
                      </StyledMenuItem>

                      <StyledMenuItem>
                        <ListItemIcon>
                          <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                      </StyledMenuItem>
                    </StyledMenu>
                  </Router>
                </div>
                <Typography variant="h6" className={classes.title}>
                  News
              </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>





          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/employmentHistory">Employment history</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/employmentHistory">
                  <EmploymentHistory />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </Grid>
        <Grid item xs={12} sm={10}><Footer /></Grid>
      </Grid>
    </div>
  );
}
export default App;