import React, { useContext } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    // width: "38vmax",
    // height: "30vmin",
    width: "600px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  bigVideo: {
    // width: "48vmax",
    // height: "40vmin",
    width: "600px",
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const classes = useStyles();
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);

  // const handleClick = () => {
  //   console.log("name: ", name);
  //   console.log("callAccepted: ", callAccepted);
  //   console.log("myVideo: ", myVideo);
  //   console.log("userVideo: ", userVideo);
  //   console.log("callEnded: ", callEnded);
  //   console.log("stream: ", stream);
  //   console.log("call: ", call);
  // };

  return (
    <Grid container className={classes.gridContainer}>
      {/* OUR OWN VIDEO */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "no username"}
            </Typography>
            <video
              controls
              playsInline
              muted
              ref={myVideo}
              // autoPlay
              // className={classes.video}
              className={!stream ? classes.video : classes.bigVideo}
            >
              Sorry, your browser doesn't support embedded videos :(
            </video>
          </Grid>
        </Paper>
      )}
      {/* USER'S VIDEO */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "no username"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            >
              Sorry, your browser doesn't support embedded videos :(
            </video>
          </Grid>
        </Paper>
      )}

      {/* <button
        onClick={handleClick}
        style={{ border: "1px solid tomato", padding: "30px 50px" }}
      >
        Clicky
      </button> */}
    </Grid>
  );
};

export default VideoPlayer;
