import { useContext } from "react";
import { Button } from "@material-ui/core";
import { SocketContext } from "../SocketContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "'Fira Code', monospace",
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1 className={classes.text}>{call.name} is calling: </h1>

          <Button
            variant="contained"
            color="primary"
            onClick={answerCall}
            className={classes.text}
          >
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
