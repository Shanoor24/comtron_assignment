import React from "react";
import { useField } from "formik";
import {FormControl, NativeSelect} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const SelectBox = ({lable, ...props}) => {
    const [field, meta] = useField(props);
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl} style={{paddingTop: "0px", marginTop: "0px", width: "285px"}}>
                 <NativeSelect className={classes.selectEmpty} name="age"  inputProps={{ 'aria-label': 'age', ...field, ...props}}>
                    <option value="gender"> Gender </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </NativeSelect>
                {/* <FormHelperText>Placeholder</FormHelperText> */}
                </FormControl>
            {/* <Input autoComplete="off" {...field} {...props}> </Input> */}
        </div>
    )
}
