import React from "react";
import { ErrorMessage, useField } from "formik";
import {useStyles} from "./style"

export const TextArea = ({lable, ...props}) => {
    const [field, meta] = useField(props);
    const classes = useStyles();

    return (
        <div>
            <textarea autoComplete="off" {...field} {...props} value={props.value} placeholder={props.placeholder} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontSize:"22px", color:"#000000", fontWeight:"500", width:"600px", background:"none", height:"210px", borderRadius:"1.5em", outline:"none", border:"2px solid black", padding:"15px", marginTop:"10px"}} />
            {meta.error && <ErrorMessage name={field.name} component="div" className={classes.error} style={{marginLeft: "100px", marginTop: "-0px"}}/>}
        </div>
    )
}
