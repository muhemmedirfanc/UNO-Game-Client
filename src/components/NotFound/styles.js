import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#303841",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",

    "& img": {
      width: "15.5rem",
    },

    [theme.breakpoints.up("sm")]: {
      "& img": {
        width: "35.5rem",
      },
    },
  },
}));

export default useStyles;
