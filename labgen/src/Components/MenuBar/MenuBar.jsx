import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import {useStyles} from "./style"

function MenuBar() {
    const classes = useStyles();
    const initMenues = [
        {id: 1, title: "Home", status: true},
        {id: 2, title: "Settings", status: false},
        {id: 3, title: "Charts", status: false},
        {id: 4, title: "Downloads", status: false}
    ]
    const [menues, setMenues] = useState(initMenues);

    const handleSelectMenu = (id) => {
        const updated_menues = menues.map((menu) => menu.id === id ? {...menu, status : true} : {...menu, status : false});
        setMenues(updated_menues);
    }

    return (
        <div>
            <Typography component="div" className={classes.menubar_cont}>
                <Typography component="div" className={classes.menubar_subcont}>
                    {menues.map((el) => <Typography component="div" onClick={() => handleSelectMenu(el.id)} key={el.id} className={el.status ? classes.selected_menu : classes.menu} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}} >{el.title}</Typography> )}
                </Typography>
            </Typography>
        </div>
    )
}

export default MenuBar;