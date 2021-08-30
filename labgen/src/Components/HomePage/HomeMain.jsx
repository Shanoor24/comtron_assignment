import React, { useState, useEffect } from "react";
// import MenuBar from "../MenuBar/MenuBar";
import { Container, Typography, Grid, Paper} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
import { Input } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useDispatch } from "react-redux";
import {getData} from "../../Redux/PatientReg/action"

function HomeMain() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [text, setText] = useState("");

    const initQuearies = [
        {id : 1, name : "Add Patient"},
        {id : 2, name : "Delete Patient"},
        {id : 3, name : "Search Report"},
        {id : 4, name : "Search Address"},
        {id : 5, name : "Search Patient Name"},
        {id : 6, name : "Payment Details"},
    ]

    const [quearies, setQuearies] = useState(initQuearies);

    const handleChange = (e) => {
        setValue("")
        const value = e.target.value;

        setText(value)
        const lowerCase = value.toLowerCase();

        const updatedQuearies = initQuearies.filter(item => item.name.includes(value) || item.name.includes(lowerCase))
        console.log(updatedQuearies)
        setQuearies([...updatedQuearies]);
    }

    const handleSetSearch = (name) => {
        setValue(name);
        setText("");
    }


    useEffect(() => {
        dispatch(getData());
    }, [])


    return (
        <div>
            {/* <MenuBar /> */}
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    <Typography component="div" className={classes.search_cont}>
                        <Input placeholder="Search..." disableUnderline={true} value={value || text} onChange={handleChange} className={classes.search_input} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}></Input>
                        <Search style={{fontSize: "35", marginLeft: "20px", marginTop: "5px"}}></Search>
                    </Typography>
                    {text !== "" && <Container className={classes.search_result_cont}> 
                        {quearies.length === 0 ?  <Typography className={classes.invalid_search} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                            Sorry! Invalid Search...
                        </Typography> : quearies.map((item) => <Typography key={item.id} onClick={() => handleSetSearch(item.name)} className={classes.search_name} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                            {item.name}
                        </Typography> )  }
                        
                    </Container> }
                    <div className={classes.root}>
                        <Grid container spacing={10} style={{width:"1000px", margin:"auto", marginTop:"20px"}}>
                            <Grid item sm={6} style={{margin:"auto", borderRadius: "1em"}}>
                                <Paper className={classes.paper}>
                                    <Typography className={classes.display_head} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Recently Used
                                    </Typography>
                                    <Container className={classes.display_cont}>
                                    <Typography className={classes.name} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Ravi Kumar
                                    </Typography>
                                    <Typography className={classes.time} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Last Call: 15.00 pm, 08/13/2021
                                    </Typography>
                                    </Container>
                                    <Container className={classes.display_cont}>
                                    <Typography className={classes.name} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Davi Kumar
                                    </Typography>
                                    <Typography className={classes.time} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Last Call: 11.00 am, 08/13/2021
                                    </Typography>
                                    </Container>
                                    <Container className={classes.display_cont}>
                                    <Typography className={classes.name} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Shailandera
                                    </Typography>
                                    <Typography className={classes.time} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Last Call: 9.00 pm, 08/13/2021
                                    </Typography>
                                    </Container>
                                </Paper>
                            </Grid>
                            <Grid item sm={6} style={{margin:"auto", borderRadius: "1em"}}>
                                <Paper className={classes.paper}>
                                    <Typography className={classes.display_head} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Most Popular Query
                                    </Typography>
                                    <Container className={classes.display_cont}>
                                    <Typography className={classes.name} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Search Queary
                                    </Typography>
                                    <Typography className={classes.time} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Search for a perticular queary
                                    </Typography>
                                    </Container>
                                    <Container className={classes.display_cont}>
                                    <Typography className={classes.name} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Request Queary
                                    </Typography>
                                    <Typography className={classes.time} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Request for a perticular queary
                                    </Typography>
                                    </Container>
                                    <Container className={classes.display_cont}>
                                    <Typography className={classes.name} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Edit Queary
                                    </Typography>
                                    <Typography className={classes.time} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                                        Edit a particualr Queary
                                    </Typography>
                                    </Container>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default HomeMain;