import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

export default function Register() {
  const classes = useStyles();

  return (
    <div className="Register">
      <h1>Register</h1>

      <Grid container className={classes.gridContainer}>
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.name} variant="h4" gutterBottom>
              {name || ""}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
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
