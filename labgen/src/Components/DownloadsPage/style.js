import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    main_cont : {
        backgroundColor: "#F1F3F6",
        display: "flex",
        border: "1px solid #B7DDF9",
        borderRadius: "0.5em",
        // WebkitBoxShadow: `-1px 5px 5px 0px rgba(0,0,0,0.50) inset`,
        WebkitBoxShadow: `-1px 2px 5px 0px rgba(0,0,0,0.50) inset`,
        padding: "15px 0px 10px 15px",
        height: "800px"
        // margin: "0"
    },
    right_cont : {
        backgroundColor: "#BFE8FF",
        borderRadius : "1em",
        height: "750px",
        width : "1130px"
    },
    bg_color1: {
        backgroundColor: "#84C0E6"
    },
    bg_color2: {
        backgroundColor: "#A5E8C0"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

