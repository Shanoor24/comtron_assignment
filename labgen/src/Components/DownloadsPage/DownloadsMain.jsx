import React from "react";
import { Container} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";

function DownloadMain() {
    const classes = useStyles();
    
    return (
        <div>
            {/* <MenuBar /> */}
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    
                </Container>
            </Container>
        </div>
    )
}

export default DownloadMain;