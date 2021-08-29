import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import {useStyles} from "./style";
import {useHistory} from "react-router-dom";

function MenuBar() {
    const classes = useStyles();
    const history = useHistory();
    const initMenues = [
        {id: 1, title: "Home", status: true, path: "/"},
        {id: 2, title: "Settings", status: false, path: "/settings"},
        {id: 3, title: "Charts", status: false, path: "/charts"},
        {id: 4, title: "Downloads", status: false, path: "downloads"}
    ]
    const [menues, setMenues] = useState(initMenues);

    const handleSelectMenu = (id, path) => {
        const updated_menues = menues.map((menu) => menu.id === id ? {...menu, status : true} : {...menu, status : false});
        setMenues(updated_menues);
        history.push(path);
    }

    return (
        <div>
            <Typography component="div" className={classes.menubar_cont}>
                <Typography component="div" className={classes.menubar_subcont}>
                    {menues.map((el) => <Typography component="div" onClick={() => handleSelectMenu(el.id, el.path)} key={el.id} className={el.status ? classes.selected_menu : classes.menu} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}} >{el.title}</Typography> )}
                </Typography>
            </Typography>
        </div>
    )
}

export default MenuBar;