import React from "react";
import { ErrorMessage, useField } from "formik";
import { Input } from '@material-ui/core';
import {useStyles} from "./style"

export const TextField = ({lable, ...props}) => {
    const [field, meta] = useField(props);
    const classes = useStyles();

    return (
        <div>
            <Input autoComplete="off" {...field} {...props} placeholder={props.placeholder} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontSize:"18px", color:"#000000", fontWeight:"500", width:"300px"}}> </Input>
            {meta.error && <ErrorMessage name={field.name} component="div" className={classes.error} />}
        </div>
    )
}
