import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Button, Typography, Input, FormControl, Select, MenuItem, CircularProgress} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
import { getData } from "../../Redux/Downloads/action";
import {useDispatch, useSelector} from "react-redux";
import jsPDF from "jspdf";


function DownloadMain() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [limit, setLimit] = useState(7);
    const [page, setPage] = useState(1);
    const {data, isLoading} = useSelector((state) => state.downloads);
    const totalLength = data.copyWithin.length;
    // const Previous_page = "<"
    const [sortCode, setSortCode] = useState(false);
    const [sortSlNo, setSortSlNo] = useState(false);
    const [sortRef, setSortRef] = useState(false);

    const handleToggleCode = () => {
        setSortCode(!sortCode);
        setSortSlNo(false);
        setSortRef(false);
    }

    const handleToggleSlNo = () => {
        setSortSlNo(!sortSlNo);
        setSortCode(false);
        setSortRef(false);
    }

    const handleToggleRef = () => {
        setSortRef(!sortRef);
        setSortSlNo(false);
        setSortCode(false);
    }

    const handlePageNext = () => {
        setPage((prev) => prev + 1);
    }

    const handlePagePrev = () => {
        setPage((prev) => prev - 1)
    }

    const handle


    useEffect(() => {
        if (sortSlNo) {
            dispatch(getData(page, limit, "id", "DESC"));
        } else if (sortCode) {
            dispatch(getData(page, limit, "code", "DESC"));
        } else if (sortRef) {
            dispatch(getData(page, limit, "refrence", "DESC"));
        } else {
            dispatch(getData(page, limit, "id", "asc"));
        }

       
    }, [page, limit, sortSlNo, sortCode, sortRef])
    
    return (
        <div>
            {/* <MenuBar /> */}
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>

                    <Container style={{display: "flex", border: "0px solid red", width: "900px", margin: "auto", marginTop:"70px", textAlign:"left"}}>
                        <Typography style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "22px" , marginTop:"0px", marginLeft:"0px"}}>Filter by:</Typography>
                        <Input placeholder="Search..." style={{marginLeft:"100px"}}></Input>
                        <FormControl className={classes.formControl} style={{position:"absolute", marginLeft:"450px", marginTop: "-15px"}}>
                            <Select displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Filter' }}>
                                <MenuItem value={"Filter Select"} disabled> Filter Select </MenuItem>
                                <MenuItem value={10}>Test A</MenuItem>
                                <MenuItem value={20}>Test B</MenuItem>
                                <MenuItem value={30}>Test C</MenuItem>
                            </Select>
                        </FormControl>
                        <Button size="small" disabled variant="contained" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", borderRadius:"0.5em", backgroundColor:"#BFF5C0", border:"1px solid #80D786", marginLeft: "380px"}}>Filter</Button>
                    </Container>
                    <Grid container spacing={3} style={{width:"900px", margin:"auto", marginTop:"30px", border:"0px solid red", padding:"15px", backgroundColor:"#7FE866", boxSizing: "border-box"}}>
                        <Grid item sm={2} style={{margin:"auto", borderRadius: "1em", border:"0px solid red", padding:"0px"}}>
                            <Paper onClick={handleToggleSlNo} style={{border:"0px solid red", backgroundColor:"#7FE866", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "25px", cursor: "pointer"}} >
                               { sortSlNo ? "ID No. ↓" :  "ID No. ↑"}
                            </Paper>
                        </Grid>
                        <Grid item sm={2} style={{margin:"auto", borderRadius: "1em", padding:"0px",}}>
                            <Paper onClick={handleToggleCode} style={{border:"0px solid red", backgroundColor:"#7FE866", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "25px", cursor: "pointer"}}>
                                { sortCode ? "Code ↓" : "Code ↑"}
                            </Paper>
                        </Grid>
                        <Grid item sm={6} style={{margin:"auto", borderRadius: "1em", padding:"0px"}}>
                            <Paper style={{border:"0px solid red", backgroundColor:"#7FE866", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "25px", cursor: "pointer"}}>
                                Test ↑
                            </Paper>
                        </Grid>
                        <Grid item sm={2} style={{margin:"auto", borderRadius: "1em", padding:"0px"}}>
                            <Paper onClick={handleToggleRef} style={{border:"0px solid red", backgroundColor:"#7FE866", fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", fontSize: "25px", cursor: "pointer"}}>
                               { sortRef ? "Reference ↓" : "Reference ↑"}
                            </Paper>
                        </Grid>
                    </Grid>
                    {isLoading ? <div style={{width:"900px", height:"250px", border: "0px solid red", margin: "auto", marginTop:"140px",}}><CircularProgress /> </div> : data.length > 0 && data.map((item, i) => 
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
                    <Container style={{display: "flex", border: "0px solid red", width: "900px", margin: "auto", marginTop:"50px"}}>
                        <Button size="small" variant="contained" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", borderRadius:"0.5em", backgroundColor:"#BFF5C0", border:"1px solid #80D786"}}>Download</Button>
                        <Typography style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", marginTop:"4px", marginLeft:"385px"}}>Rows per page: 7</Typography>
                        <Typography style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", marginTop:"4px", marginLeft:"60px"}}>{`${page}-${totalLength} of ${totalLength}`}</Typography>
                        <Button disabled={page===1} variant="contained" onClick={handlePagePrev} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', marginLeft:"40px", marginRight:"7px"}}>◄</Button>
                        <Button disabled={page===totalLength} onClick={handlePageNext} variant="contained" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>►</Button>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default DownloadMain;