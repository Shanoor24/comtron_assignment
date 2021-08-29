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
    form_main_cont: {
        backgroundColor: "#8CD6FF",
        width: "1000px",
        height: "650px",
        borderRadius: "1em",
        marginTop: "55px",
        border: "1px solid #8CD6FF"
    },
    form_heading: {
        border: "2px solid black",
        padding: "17px 20px 17px 20px",
        boxSizing: "border-box",
        width: "650px",
        borderRadius: "4em",
        fontWeight: "500",
        fontSize: "24px",
        margin: "auto",
        marginTop: "40px",
        backgroundColor: "#EADC7D"
        // textDecoration: "underline"
    },
    status_bar_cont: {
        width: "750px",
        border: "1px solid #8CD6FF",
        margin: "auto",
        marginTop: "30px",
        display: "flex",
        padding: "0"
    },
    current_round: {
        width: "25px",
        height: "25px",
        border: "5px solid #D6FF8C",
        borderRadius: "1.5em",
        fontSize: "17px",
        fontWeight: "700",
        color: "#FFFFFF"
    },
    filled_round: {
        width: "25px",
        height: "25px",
        border: "5px solid #D6FF8C",
        borderRadius: "1.5em",
        fontSize: "17px",
        fontWeight: "700",
        color: "#FFFFFF",
        backgroundColor: "#D6FF8C"
    },
    empty_bar: {
        width: "320px",
        height: "5px",
        borderBottom: "4px dashed #B1B8C0",
        marginLeft: "5px",
        marginTop: "10px"
    },
    filled_bar: {
        width: "315px",
        height: "5px",
        borderBottom: "4px dashed #D6FF8C",
        marginLeft: "5px",
        marginTop: "10px",
        marginRight: "5px"
    },
    empty_circle: {
        width: "20px",
        height: "20px",
        backgroundColor: "#B1B8C0",
        borderRadius: "1.5em",
        fontSize: "14px",
        fontWeight: "700",
        color: "#FFFFFF",
        marginLeft: "5px",
        border: "5px solid #B1B8C0",
        marginTop: "2px"
    },
    details_cont: {
        width: "800px",
        height: '420px',
        border: '2px solid #8CD6FF',
        borderRadius: "1.5em",
        margin: "auto",
        marginTop: "20px",
        backgroundColor: "#B1FFA4",
        padding: "0"
    },
    input_cont: {
        border: "2px solid #000000",
        padding: "10px 20px 10px 20px",
        borderRadius: "1em",
        boxSizing: "border-box",
        marginTop: "25px",
        marginLeft: "20px"
    },
    error: {
        position:"absolute", 
        fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, 
        fontSize:"10px", color:"red",
        marginTop:"15px",
        fontWeight:"500"
    }
  }));

