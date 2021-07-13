import "./App.css";
import { Typography, AppBar } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90vmax",
    height: "10vmin",
    margin: "30px 100px",
    border: "2px solid black",
    borderRadius: 15,
    boxShadow: "4px 4px 3px rgba(0,0,0,0.75)",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  Typography: {
    fontSize: "42px",
    fontWeight: "600",
    color: "floralwhite",
    textShadow: "1px 1px 1px rgba(0,0,0,0.8)",
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

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center" className={classes.Typography}>
          Video Chat App
        </Typography>
      </AppBar>

      <VideoPlayer />

      <Options>
        <Notifications />
      </Options>

      {/* <h1
        style={{
          color: "floralwhite",
          textShadow: "1px 1px 0px rgba(0,0,0,0.8)",
        }}
      >
        Video Chat App
      </h1> */}
    </div>
  );
};

export default App;
