import React, { useState } from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Container, Typography } from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
import { Input } from '@material-ui/core';


function PatientForm() {
    const classes = useStyles();
   
    return (
        <div>
            <MenuBar />
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    <Container maxWidth="lg" className={classes.form_main_cont}>
                        <Typography className={classes.form_heading} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>New Patient Entry</Typography>
                        <Container className={classes.status_bar_cont}>
                            <Typography className={classes.current_round} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>1</Typography>
                            <Typography className={classes.empty_bar}></Typography>
                            <Typography className={classes.empty_circle} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>2</Typography>
                            <Typography className={classes.empty_bar}></Typography>
                            <Typography className={classes.empty_circle} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>3</Typography>
                        </Container>
                        <Container className={classes.details_cont}>
                            
                        </Container>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default PatientForm;