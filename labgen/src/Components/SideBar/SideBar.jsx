import { Container } from "@material-ui/core";
import React, { useState } from "react";
import {useStyles} from "./style";
import Options from "./Options"

function SideBar() {
    const classes = useStyles();
    const initOptions = [
        {id : 1, title : "Requisitions(R)", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 2, title : "Result Inquiry", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 3, title : "Work Sheets", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 4, title : "Result Entry", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 5, title : "Verify/Approve Result", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 6, title : "Accounts Receviable", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 7, title : "Reports Printing Menu", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 8, title : "Patient File Maintenance", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 9, title : "System Dicitionary", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        {id : 10, title : "More Programs", status: false, sub_menues : [{id : 1, title : "Adding New Requisition(RA)", status : false}, {id : 2, title : "Request Entry from Remote Order", status : false}, {id : 3, title : "Fast Requisitions Entry", status : false}, {id : 4, title : "Quick Assecssion Remote Order", status : false}, {id : 5, title : "Delete a Requisition (RD)", status : false}, ]},
        // {id : 2, title : "Result Inquiry", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 3, title : "Work Sheets", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 4, title : "Result Entry", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 5, title : "Verify/Approve Result", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 6, title : "Accounts Receviable", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 7, title : "Reports Printing Menu", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 8, title : "Patient File Maintenance", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 9, title : "System Dicitionary", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 10, title : "More Programs", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 11, title : "Accounts Receviable", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 12, title : "Reports Printing Menu", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 13, title : "Patient File Maintenance", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 14, title : "System Dicitionary", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
        // {id : 15, title : "More Programs", status: false, sub_menues : [{id : 1, title : "xyz", status : false}, {id : 2, title : "xyz", status : false}, {id : 3, title : "xyz", status : false}, {id : 4, title : "xyz", status : false}, {id : 5, title : "xyz", status : false}, ]},
    ]

    const [options, setOptions] = useState(initOptions)

    const handleToggleOption = (id) => {
        const updated_options = options.map((el) => el.id === id ? el.status ? {...el, status : false} : {...el, status : true} : {...el, status : false});
        setOptions(updated_options);
    }
    return (
        <div>
            <Container maxWidth="sm" className={classes.main_cont} >
                {options.map((item) => <Options  key={item.id} {...item} handleToggleOption={handleToggleOption}/> )}
            </Container>
        </div>
    )
}

export default SideBar;