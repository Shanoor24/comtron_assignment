import { Typography } from "@material-ui/core";
import React from "react";
import {useStyles} from "./style"

function Options({title, status, handleToggleOption, id, sub_menues}) {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.option} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}} >
                <Typography style={{display: "flex"}}> 
                    <Typography className={classes.option_title} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>{title}</Typography>
                    <Typography className={classes.option_arrow} onClick={() => handleToggleOption(id)} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>{status ? "▼" : "▲"}</Typography>
                </Typography>
                {status && <Typography className={classes.sub_menues} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>
                    {sub_menues.map((el) => <Typography className={classes.sub_menues_title} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>{`${el.title} ►`}</Typography>)}
                </Typography>}
            </Typography>
        </div>
    )
}

export default Options;