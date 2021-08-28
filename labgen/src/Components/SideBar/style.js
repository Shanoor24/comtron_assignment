import { makeStyles } from "@material-ui/core/styles";
// import { Theme } from "@material-ui/core"; 

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    main_cont : {
        width: "330px",
        backgroundColor: "#8CD6FF",
        paddingTop: "30px",
        paddingLeft: "15px",
        marginLeft: "0px",
        borderRadius : "0.5em",
        height: "750px",
        overflow: "auto",
        '&::-webkit-scrollbar': {
            width : "5px",
            borderRadius: "50%"
        },
        '&::-webkit-scrollbar-track' : {
            background: "#8CD6FF"
        },
        '&::-webkit-scrollbar-thumb' : {
            background: "grey",
            borderRadius: "10%"
        }

        // webkitScrollbarTrack
    },
    option: {
        width: "300px",
        // height: "50px",
        // marginLeft: "0px",
        // display: "flex",
        backgroundColor: "#B7DDF9",
        marginBottom: "11px",
        textAlign: "left",
        fontSize: "20px",
        fontWeight: "500",
        padding : "10px",
        boxSizing: "border-box",
        borderRadius: "0.3em",
        color: "#000000",
        cursor: "pointer"
    },
    option_title: {
        textAlign: "left",
        fontSize: "20px",
        fontWeight: "500",
        color: "#000000",
        width: "250px",
        // border: "1px solid red"
    },
    option_arrow : {
        textAlign: "left",
        fontSize: "20px",
        fontWeight: "500",
        color: "#000000",
        width: "20px",
        // border: "1px solid red"
    },
    sub_menues: {
        width: "230px",
        padding: "10px",
        backgroundColor: "#A3BAE9",
        border : "1px solid #A3BAE9",
        marginTop: "5px",
        marginLeft : "20px",
        borderRadius: "0.4em"
    },
    sub_menues_title : {
        fontSize: "13px",
        paddingTop: "5px",
        paddingBottom: "5px",
        fontWeight: "500",
        borderBottom : "1px solid black"
    }
  }));


//   export const styles = (theme : Theme) =>
//   createStyles({
//     scrollBar: {
//       '&::-webkit-scrollbar': {
//         width: '0.4em'
//       },
//       '&::-webkit-scrollbar-track': {
//         '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
//       },
//       '&::-webkit-scrollbar-thumb': {
//         backgroundColor: 'rgba(0,0,0,.1)',
//         outline: '1px solid slategrey'
//       }
//     }
//   });
