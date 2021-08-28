import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Container, Typography} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
import { Input } from '@material-ui/core';
import { Search } from '@material-ui/icons';

function HomeMain() {
    const classes = useStyles();
    return (
        <div>
            <MenuBar />
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    <Typography component="div" className={classes.search_cont}>
                        <Input placeholder="Search..." disableUnderline={true} className={classes.search_input} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}></Input>
                        <Search style={{fontSize: "35", marginLeft: "20px", marginTop: "5px"}}></Search>
                    </Typography>
                    <Container > 
                        
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default HomeMain;