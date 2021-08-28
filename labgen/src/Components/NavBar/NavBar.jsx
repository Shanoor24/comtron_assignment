import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
// import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton} from "@material-ui/core";
import logo from "../../Images/logo.svg"
import {useStyles} from "./style"


function NavBar() {
    const classes = useStyles();
    const [arrow, setArrow] = useState(false);

    const handleArrow = () => {
      setArrow(!arrow);
    }


    return (
        <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} alt="labgen_logo" className={classes.logo}/>
          </IconButton>
                <Typography component="div" className={classes.user_cont} >
                    <Typography component="div" className={classes.user_logo} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                      U
                    </Typography>
                    <Typography component="div" className={classes.user_title} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                      User Name
                    </Typography>
                    <Typography component="div" className={classes.down_arrow} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, cursor:"pointer"}} onClick={handleArrow}>
                      {arrow ? "▼" : "▲"}
                    </Typography>
                </Typography>
                {arrow && <Typography component="div" className={classes.user_el_cont} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, cursor:"pointer", position: "absolute"}}>
                      <Typography component="div" style={{textAlign: "center"}} className={classes.user_menu}>
                          Profile        
                      </Typography>
                      <Typography component="div" style={{textAlign: "center"}} className={classes.user_menu}>
                          Sign out       
                      </Typography>
                </Typography>}
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default NavBar;