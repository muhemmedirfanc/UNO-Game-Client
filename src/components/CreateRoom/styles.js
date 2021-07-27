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

    "&:hover": {
      backgroundColor: "#5B5A5A",
    },

    [theme.breakpoints.down("sm")]: {
      width: "8.625rem",
      height: "2.6875rem",
    },
  },
  buttonTwo: {
    color: theme.palette.primary.main,
    marginLeft: "3.125rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.625rem",
    },
  },
  buttonOne: {
    marginRight: "3.125rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0.625rem",
    },
  },

  buttons: {
    marginTop: "1.125rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2.125rem",
    },
  },
  TextField: {
    borderRadius: "3.125rem",
    marginTop: "60px",
    "& .Mui-error": {
      color: "white",
    },

    "& .MuiOutlinedInput-root": {
      borderColor: "yellow",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
    },

    "& .MuiFormHelperText-root": {
      color: "white",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
    },
  },

  input: {
    borderRadius: "3.125rem",
    color: "white",
    borderColor: "white",
    backgroundColor: "#5B5A5A ",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white ",
    },
  },

  createButton: {
    marginTop: "3.125rem",
    marginLeft: "14.6875rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5rem",
    },
  },

  form: {
    [theme.breakpoints.down("sm")]: {
      width: "18.75rem",
    },
  },
}));

export default useStyles;
