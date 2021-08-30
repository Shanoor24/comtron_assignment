import React, { useState, useEffect } from "react";
import { Container, Grid, Paper} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
import { getData } from "../../Redux/Downloads/action";
import {useDispatch, useSelector} from "react-redux"

function DownloadMain() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [limit, setLimit] = useState("7");
    const [page, setPage] = useState("1");
    const {data} = useSelector((state) => state.downloads);
    const totalLength = data.copyWithin.length;


    useEffect(() => {
       dispatch(getData(page, limit));
    }, [])
    
    return (
        <div>
            {/* <MenuBar /> */}
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    <Grid container spacing={3} style={{width:"900px", margin:"auto", marginTop:"20px", border:"0px solid red", padding:"15px", backgroundColor:"#7FE866", boxSizing: "border-box"}}>
                        <Grid item sm={2} style={{margin:"auto", borderRadius: "1em", border:"0px solid red", padding:"0px"}}>
                            <Paper style={{border:"0px solid red", backgroundColor:"#7FE866", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "25px"}} >
                                SL No. ↑
                            </Paper>
                        </Grid>
                        <Grid item sm={2} style={{margin:"auto", borderRadius: "1em", padding:"0px",}}>
                            <Paper style={{border:"0px solid red", backgroundColor:"#7FE866", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "25px"}}>
                                Code ↑
                            </Paper>
                        </Grid>
                        <Grid item sm={6} style={{margin:"auto", borderRadius: "1em", padding:"0px"}}>
                            <Paper style={{border:"0px solid red", backgroundColor:"#7FE866", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "25px"}}>
                                Test ↑
                            </Paper>
                        </Grid>
                        <Grid item sm={2} style={{margin:"auto", borderRadius: "1em", padding:"0px"}}>
                            <Paper style={{border:"0px solid red", backgroundColor:"#7FE866", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "25px"}}>
                                Reference ↑
                            </Paper>
                        </Grid>
                    </Grid>
                    {data.length > 0 && data.map((item, i) => 
                        <Grid key={item.id} container spacing={3} className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} style={{width:"900px", margin:"auto", marginTop:"0px", border:"0px solid red", padding:"12px", boxSizing:"border-box"}}>
                        <Grid item sm={2} className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} style={{margin:"auto", borderRadius: "1em", border:"0px solid red", padding:"0px"}}>
                            <Paper className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} style={{border:"0px solid red", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "22px"}} >
                                {item.id}
                            </Paper>
                        </Grid>
                        <Grid item sm={2} className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} style={{margin:"auto", borderRadius: "1em", padding:"0px"}}>
                            <Paper className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} style={{border:"0px solid red", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "22px"}}>
                                {`ADS-${item.code}`}
                            </Paper>
                        </Grid>
                        <Grid className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} item sm={6} style={{margin:"auto", borderRadius: "1em", padding:"0px" }}>
                            <Paper className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} style={{border:"0px solid red", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "22px"}}>
                                {item.name}
                            </Paper>
                        </Grid>
                        <Grid className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} item sm={2} style={{margin:"auto", borderRadius: "1em", padding:"0px" }}>
                            <Paper className={item.id % 2 === 1 ? classes.bg_color1 : classes.bg_color2} style={{border:"0px solid red", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "22px"}}>
                                {`RP-${item.refrence}`}
                            </Paper>
                        </Grid>
                    </Grid>
                    )}
                    <Container style={{display: "flex", border: "1px solid red"}}>
                        
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default DownloadMain;