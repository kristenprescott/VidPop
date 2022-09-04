import React, { useContext } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "../SocketContext";

import vidpopcorn from "../assets/images/vidpopcorn.png";

const VideoPlayer = () => {
  const classes = useStyles();
  const appContext = useContext(SocketContext);

  return (
    <Grid container className={classes.gridContainer}>
      {appContext.stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.name} variant="h4" gutterBottom>
              {appContext.name || ""}
            </Typography>
            <video
              controls
              playsInline
              muted={true}
              ref={myVideo}
              autoPlay={true}
              // TODO: change poster (below) to user icon
              // poster="https://i.picsum.photos/id/598/536/354.jpg?hmac=82Os7u6EtTg423GKsDw_kHY2fbSzzi9Y_RnCxQ8wmzY"
              poster={vidpopcorn}
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
              {call.name || ""}
            </Typography>
            <video
              playsInline
              muted={true}
              ref={userVideo}
              controls
              autoPlay={true}
              // TODO: change poster (below) to user icon
              poster="https://i.picsum.photos/id/598/536/354.jpg?hmac=82Os7u6EtTg423GKsDw_kHY2fbSzzi9Y_RnCxQ8wmzY"
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
