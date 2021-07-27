import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#303841",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    "& img": {
      minHeight: "10.5rem",
      marginTop: "3.25rem",
    },

    [theme.breakpoints.down("sm")]: {
      "& img": {
        minHeight: "8.25rem",
        marginTop: "3.25rem",
      },
    },
  },
  welcomeText: {
    padding: "0.5rem",
    display: "inline-block",
    textTransform: "uppercase",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.375rem",
      padding: "0.3125rem",
    },
  },
  welcomeTexts: {
    marginTop: "1rem",
  },
  button: {
    backgroundColor: "#444444",
    color: theme.palette.text.primary,
    fontWeight: "700",
    width: "15.625rem",
    height: "4.6875rem",
    borderRadius: "3.125rem",
    fontSize: "1.5625rem",
    marginTop: "3.125rem",
    "&:hover": {
      backgroundColor: "#5B5A5A",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "3.125rem",
      width: "13.625rem",
      height: "3.6875rem",
    },
  },
  buttonTwo: {
    color: theme.palette.primary.main,
  },
}));

// width: 250px;
// height: 72px;
// border-radius: 50px;
// font-size: 25px;
// margin-top: 75px;

export default useStyles;
