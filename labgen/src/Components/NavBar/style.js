import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar : {
        backgroundColor: "#6B97B0",
        height:"14.68vh"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
        width:"19.791vw",
        height:"9.0027vh",
        marginTop:"1.3850vh"
    },
    user_cont: {
        display: "flex",
        backgroundColor: '#cfe8fc',
        height: '7.89vh',
        width:"17.8385vw",
        marginLeft:"56.6406vw",
        marginTop:"1.3850vh",
        borderRadius: "0.3em"
    },
    user_logo: {
        backgroundColor: "#C4C4C4",
        width: "2.6692vw",
        height: "5.4016vh",
        marginTop: "1.2036vh",
        marginLeft: "1.0481vw",
        borderRadius: "50%",
        paddingTop: "0.55vh",
        paddingLeft: "0.15vw",
        boxSizing: "border-box",
        color: "#000000",
        fontWeight: "700",
        fontSize: "1.40vw"
        // margin: "auto"
    },
    user_title: {
    //    border: "1px solid red",
       width: "10.5468vw",
       height: "5.2631vh",
       color: "#000000",
       fontStyle: "normal",
       fontSize: "1.6927vw",
       fontWeight: "500",
       marginTop: "1.2036vh"
    },
    down_arrow: {
        width:"2.5781vw",
        color: "#000000",
        // border: "1px solid red",
        height: "5.2631vh",
        marginTop: "1.3036vh",
        fontSize: "1.6276vw",
    },
    user_el_cont: {
        border: "1px solid grey",
        width:"17.8490vw",
        height: "9.695290858725762vh",
        marginLeft: "78.22265625vw",
        marginTop: "19.113573407202217vh",
        backgroundColor: '#cfe8fc',
        padding : "1.3850415512465375vh 0.9765625vw 1.3850415512465375vh 1.6276041666666667vw",
        boxSizing: "border-box",
        color: "#000000",
        fontWeight: "700",

    },
    user_menu: {
        // paddingLeft: "20px",
        color: "#000000",
        fontWeight: "600",
        marginBottom: "0.6925207756232687vh",
        borderRadius: "0.3em"
    }

  }));

