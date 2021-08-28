import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Container, Typography} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
import { Input } from '@material-ui/core';

function HomeMain() {
    const classes = useStyles();
    return (
        <div>
            <MenuBar />
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    <Typography component="div">

                    </Typography>
                </Container>
            </Container>
        </div>
    )
}

export default HomeMain;