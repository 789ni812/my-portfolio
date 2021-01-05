import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
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

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div>
            {/*<Button
                      aria-controls="customized-menu"
                      aria-haspopup="true"
                      variant="contained"
                      color="primary"
                      onClick={handleClick}
                    >Menu
                    </Button>*/}

            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
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
  );
};
export default Header;
