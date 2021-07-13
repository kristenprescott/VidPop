import React, { useContext } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "600px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  bigVideo: {
    width: "700px",
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
    boxShadow: "4px 4px 6px rgba(0,0,0,0.6)",
  },
  name: {
    fontFamily: "'Fira Code', monospace;",
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

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.name} variant="h4" gutterBottom>
              {name || "no username"}
            </Typography>
            <video
              controls
              playsInline
              muted
              ref={myVideo}
              // autoPlay
              className={classes.video}
              // className={!stream ? classes.video : classes.bigVideo}
            >
              Sorry, your browser doesn't support embedded videos :(
            </video>
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom className={classes.name}>
              {call.name || "no username"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              controls
              // autoPlay
              className={classes.video}
            >
              Sorry, your browser doesn't support embedded videos :(
            </video>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
