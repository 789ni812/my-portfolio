import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


            {/* START HEADER */}
            <Grid item xs={12} >
              <div className={classes.root}>

                <AppBar position="fixed" >
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
                            <MdSend fontSize="large" />
                          </ListItemIcon>
                          <Link to="/">  <ListItemText primary="Home" />
                          </Link>
                        </StyledMenuItem>

                        <StyledMenuItem>
                          <ListItemIcon>
                            <MdInbox fontSize="large" />
                          </ListItemIcon>
                          <Link to="/employmentHistory">  <ListItemText primary="Previous Employment" />
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

                        <StyledMenuItem>
                          <ListItemIcon>
                            <DiGithub fontSize="large" />
                          </ListItemIcon>
                          <Link to="/employmentHistory">  <ListItemText primary="Git" />
                          </Link>
                        </StyledMenuItem>
*/}


                        <StyledMenuItem>
                          <ListItemIcon>
                            <MdGetApp fontSize="small" />
                          </ListItemIcon>
                          <Link to="/employmentHistory">  <ListItemText primary="Download CV" />
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



// Icons
import { MdGetApp } from 'react-icons/md';
// Icons
import { MdSend, MdInbox } from 'react-icons/md';






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
    marginLeft: theme.spacing(2),
  },


}));
//END Material-ui AppBar