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
        borderRadius : "0.5em",
        height: "700px",
        width : "1130px"
    },
    search_cont : {
        width: "806px",
        display: "flex",
        padding: "24px 30px 20px 30px",
        backgroundColor: "#FFFFFF",
        borderRadius: "2em",
        marginTop: "100px",
        marginLeft: "125px",
        boxSizing: "border-box"
    },
    search_input: {
        border: "none",
        color: "#000000",
        fontSize: "17px",
        fontWeight: "500",
        width: "700px"
    }
  }));

