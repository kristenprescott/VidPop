import "./App.css";
import { Typography, AppBar } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
import { makeStyles } from "@material-ui/core/styles";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center" className={classes.Typography}>
          Vid-Pop
        </Typography>
      </AppBar>

      <VideoPlayer />

      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "75vmax",
    height: "calc(5rem + 4.8vmin)",
    margin: "30px 100px",
    border: "2px solid black",
    borderRadius: 15,

    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },

    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  Typography: {
    fontFamily: "'Tourney', cursive",
    fontSize: "calc(1rem + 6.9vmin)",
    fontWeight: "500",
    color: "floralwhite",
    textShadow: "3px 3px 2px rgba(0,0,0,0.69)",
    padding: "1.5rem 0px",
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));
