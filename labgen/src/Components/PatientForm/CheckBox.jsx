import React from "react";
import { useField } from "formik";
import {FormControlLabel, Checkbox} from '@material-ui/core';


export const CheckBox = ({lable, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <FormControlLabel value="end" control={<Checkbox {...field} {...props} size="medium"/>} label={props.title} labelPlacement="end" style={{marginTop:"48px", marginLeft:"30px"}}/>
            {/* <Input autoComplete="off" {...field} {...props}> </Input> */}
        </div>
    )
}
