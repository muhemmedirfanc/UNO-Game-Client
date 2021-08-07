import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "dark" ? 200 : 700],
  },
  top: {
    color: "#00ADB5",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

export default useStyles;
