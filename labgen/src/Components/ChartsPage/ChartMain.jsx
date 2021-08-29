import React from "react";
import { Container} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
import { Pie } from "react-chartjs-2"

function ChartMain() {
    const classes = useStyles();
    
    return (
        <div>
            {/* <MenuBar /> */}
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    <Pie >

                    </Pie>
                </Container>
            </Container>
        </div>
    )
}

export default ChartMain;