import React from "react";
import logo from '../../assets/images/logo.png';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Nav from '../Nav'

const useStyles = makeStyles({
  unverified: {
    margin: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "Center",
    textAlign: "center",
    fontSize: 23,
    color: "#655f5f"
  }
});

function Joblistings() {
  const handleSchedule = () => {
    window.location = "/schedule"
  }
  const classes = useStyles();

  return (
    <div className="container">
      <Nav />
      <img src={logo} alt="logo" className="logo" />
      <h1 className="text-center mt-5 mb-5 title">JOBS</h1>
      <Grid justify="center" container>
        <Typography className={classes.unverified}>In order to apply to these jobs, we ask that you please verfify your skills with an admin.</Typography>
        <Button color="primary" onClick={handleSchedule}>Schedule meeting</Button>
      </Grid>


    </div>

  );
}

export default Joblistings;
