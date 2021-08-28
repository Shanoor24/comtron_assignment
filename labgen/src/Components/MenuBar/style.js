import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menubar_cont: {
        border: "1px solid #B7DDF9",
        height: "75px",
        backgroundColor: "#B7DDF9"
    },
    menubar_subcont: {
        display: "flex",
        marginLeft: "110px",
        marginTop: "30px",
        // border: "1px solid red",
        height: "42px"
    },
    menu: {
        width: "129px",
        height: "42px",
        textAlign: "center",
        backgroundColor: "#759AE6",
        fontSize: "22px",
        fontWeight: "500",
        borderRadius: "6px 25px 6px 6px",
        paddingTop: "8px",
        boxSizing: "border-box",
        color: "#FFFEFD",
        cursor:"pointer"
    },
    selected_menu: {
        width: "129px",
        height: "42px",
        textAlign: "center",
        backgroundColor: "#EADC7D",
        fontSize: "22px",
        fontWeight: "500",
        borderRadius: "6px 25px 6px 6px",
        paddingTop: "8px",
        boxSizing: "border-box",
        color: "#000000",
        cursor:"pointer"
    }

  }));

