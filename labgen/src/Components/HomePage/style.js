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
    search_cont : {
        width: "806px",
        display: "flex",
        padding: "24px 30px 20px 30px",
        backgroundColor: "#FFFFFF",
        borderRadius: "2em",
        marginTop: "100px",
        marginLeft: "135px",
        boxSizing: "border-box"
    },
    search_input: {
        border: "none",
        color: "#000000",
        fontSize: "17px",
        fontWeight: "500",
        width: "700px"
    },
    search_result_cont: {
        width: "750px",
        backgroundColor: "#8CD6FF",
        position: "absolute",
        zIndex: 10,
        marginLeft: "160px",
        padding: "10px 20px 10px 20px",
        boxSizing: "border-box",
        border: "1px solid black",
        borderRadius: "5px 5px 40px 40px"
    },
    invalid_search: {
        fontSize: "22px",
        fontWeight: "500",
        width: "500px",
        margin:"auto",
        border: "1px solid black",
        borderRadius: "1em",
        marginTop: "20px",
        marginBottom : "20px"
    },
    search_name: {
        paddingLeft: "15px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2px solid black",
        fontWeight: "500",
        textAlign: "left",
        cursor: "pointer"
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: "1em",
        backgroundColor: "#8CD6FF",
        padding: "30px 40px 25px 40px",
        boxSizing: "border-box"
      },
    display_head: {
        color: "#68686A",
        fontSize: "24px",
        fontWeight: "500",
        paddingBottom: "8px",
        boxSizing: "border-box",
        borderBottom: "2px solid #68686A"
    },
    display_cont: {
        backgroundColor: "#EEE599",
        width: "300px",
        padding: "25px 20px 25px 20px",
        boxSizing: "border-box",
        marginTop: "20px",
        borderRadius: "1em",
        border: "1px solid black"
    },
    name: {
        borderBottom: "2px solid #68686A",
        fontSize: "17px",
        color: "#000000",
        fontWeight: "500",
        paddingLeft: "15px",
        boxSizing: "border-box",
        textAlign: "left",
        width: "235px"
    },
    time: {
        fontSize: "11px",
        color: "#000000",
        fontWeight: "500",
        paddingLeft: "15px",
        boxSizing: "border-box",
        textAlign: "left",
        width: "235px",
        marginTop: "5px"
    }
  }));

