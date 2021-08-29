import React, { useState, useEffect } from "react";
import { Container} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
import { getData } from "../../Redux/Downloads/action";
import {useDispatch} from "react-redux"

function DownloadMain() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [limit, setLimit] = useState("7");
    const [page, setPage] = useState("1");

    useEffect(() => {
       dispatch(getData(page, limit));
    }, [])
    
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