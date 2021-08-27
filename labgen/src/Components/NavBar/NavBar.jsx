import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton} from "@material-ui/core";
import logo from "../../Images/logo.svg"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar : {
        backgroundColor: "#6B97B0",
        height:"14.68vh"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));



function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} alt="labgen_logo" style={{width:"19.791vw", height:"9.0027vh", marginTop:"10px"}}/>
          </IconButton>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '7.89vh', width:"17.8385vw", marginLeft:"37.109vw", marginTop:"10px"}} >

                </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default NavBar;