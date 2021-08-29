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
                        <Typography>New Patient Form</Typography>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default PatientForm;