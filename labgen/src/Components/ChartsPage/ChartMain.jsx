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
                    <div style={{width:"600px", margin:"auto", marginTop: "100px"}}>
                        <Pie 
                            data={{
                                labels:["Adjustments", "Charge Amount", "Expected Amount", "Billed Amount"],
                                datasets:[{
                                    data:[200, 900, 700, 350],
                                    backgroundColor:["#FF4069", "#36A2EB", "#22CFCF", "#FFC234"]
                                }]
                            }}
                        >
                        </Pie>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default ChartMain;