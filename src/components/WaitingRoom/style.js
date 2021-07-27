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
    },

    [theme.breakpoints.down("sm")]: {
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
    marginTop: "50px",
    width: "500px",
  },
  userSvg: {},
  useNameText: {
    fontSize: "1rem",
    fontWeight: "700",
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
}));

export default useStyles;
