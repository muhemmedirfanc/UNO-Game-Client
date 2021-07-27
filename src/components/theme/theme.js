import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F6C90E",
    },
    secondary: {
      main: "#00ADB5",
    },
    error: {
      main: "#FF0040",
    },
    text: {
      primary: "#81B214",
    },
  },
  typography: {
    fontFamily: ["Poppins"],
    h4: {
      fontWeight: "600",
    },
  },
});

export default theme;
