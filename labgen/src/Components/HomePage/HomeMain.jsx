import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Container} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";

function HomeMain() {
    const classes = useStyles();
    return (
        <div>
            <MenuBar />
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    sdasdasdasd
                </Container>
            </Container>
        </div>
    )
}

export default HomeMain;