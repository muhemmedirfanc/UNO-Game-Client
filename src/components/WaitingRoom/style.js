import { makeStyles } from "@material-ui/core";

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
      minHeight: "7.5rem",
      marginTop: "3.25rem",
      [theme.breakpoints.down("xs")]: {
        marginTop: "2.25rem",
      },
    },

    [theme.breakpoints.down("xs")]: {
      "& img": {
        minHeight: "8.25rem",
        marginTop: "3.25rem",
      },
    },
  },
  animation: {
    marginTop: "1rem",
  },
  joinedUsers: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3.125rem",
    width: "31.25rem",
    [theme.breakpoints.down("xs")]: {
      width: "18.75rem",
      marginTop: "2rem",
    },
  },
  userSvg: {
    [theme.breakpoints.down("xs")]: {
      width: "3.125rem",
    },
  },
  useNameText: {
    fontSize: "1rem",
    fontWeight: "700",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
      fontWeight: "500",
    },
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

    [theme.breakpoints.down("xs")]: {
      width: "13.625rem",
      height: "3.6875rem",
    },
  },
  roomId: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginTop: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      fontWeight: "600",
      marginTop: "0.8rem",
    },
  },
  roomPassword: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginTop: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      fontWeight: "600",
      marginTop: "0.3rem",
    },
  },
  buttons: {
    display: "flex",
    marginTop: "3.125rem",
    marginBottom: "3.125rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3.125rem",
    },
  },
  ShareIcon: {
    marginLeft: "1.25rem",
  },
}));

export default useStyles;
