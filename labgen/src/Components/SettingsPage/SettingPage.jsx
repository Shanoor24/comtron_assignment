import React from "react";
import { Container} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";

function SettingMain() {
    const classes = useStyles();
    
    return (
        <div>
            {/* <MenuBar /> */}
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    <div style={{width:"600px", margin:"auto", marginTop: "100px"}}>
                        <h1>Page is under construction!</h1>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default SettingMain;