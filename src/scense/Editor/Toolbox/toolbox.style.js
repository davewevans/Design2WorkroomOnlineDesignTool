import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    position: {
      color: "#000 !important",
      textTransform: "unset",
      fontSize: "18px",
      fontWeight: 500,
      borderRight: "1px solid #DADADA",
      borderRadius: "unset",
      marginInlineEnd: "8px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    menu: {
      display: "flex !important",
      flexDirection: "column !important",
      marginTop:"10px !important"
    },
    menuItem: {
      display: "flex !important",
      flexDirection: "column !important",
      paddingInline: "30px",
      fontSize:"14px",
      fontWeight:400,
      paddingBlock:"5px",
    },
    slider: {
      width: "50%",
      marginInlineStart: "20px",
    },
    opacityBtn: {
      borderColor: "transparent",
      borderRadius: "4px",
      marginInlineStart: "20px",
    },
    paper: {
      transform: "translate(415px, 124px) !important",
    },
    fontSelect: {
      width: "146px",
      height: "35px",
      marginInlineEnd: "18px",
      borderRadius: "4px",
      border: "1px solid #dadada",
      padding: "7px",
    },
    incBtn: {
      paddingBlock: "10px",
      paddingInline: "4px",
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
      border: "1px solid #dadada",
      background: "unset",
    },
    decBtn: {
      paddingBlock: "10px",
      paddingInline: "4px",
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
      border: "1px solid #dadada",
      background: "unset",
    },
    numDiv: {
      paddingBlock: "8px",
      paddingInline: "18px",
      borderTop: "1px solid #dadada",
      borderBottom: "1px solid #dadada",
    },
    textToolIcon: {
      marginInlineEnd: "7px",
      cursor: "pointer",
    },
  };
});
export default useStyles;
