import React from "react";
import "./jobs.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/images/logo.png';
import Nav from '../Nav'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 382,
    marginBottom: 50
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
}));

function JoblistingsVerified() {
  const classes = useStyles();
  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="text-center mt-5 mb-5 title">JOBS</h1>
      <Nav />
      <Card className={classes.card, "card-border"}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Construction Company
        </Typography>
          <Typography variant="h5" component="h2">
            Paint a House
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            $2000
        </Typography>
          <Typography variant="body2" component="p">
            Tasked to paint the outside of a 3 story house.
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            3 day deadline
        </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" className={classes.button}>
            APPLY
      </Button>
        </CardActions>
      </Card>

      <Card className={classes.card, "card-border"}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Construction Company
        </Typography>
          <Typography variant="h5" component="h2">
            Build a Shed
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            $2500
        </Typography>
          <Typography variant="body2" component="p">
            Tasked to build a small utility shed behind one of our client's houses.
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            5 day deadline
        </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" className={classes.button}>
            APPLY
      </Button>
        </CardActions>
      </Card>

      <Card className={classes.card, "card-border"}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Realty Company
        </Typography>
          <Typography variant="h5" component="h2">
            Clean a House
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            $1500
        </Typography>
          <Typography variant="body2" component="p">
            Clean a 3 bedroom 1500sq ft. home before new tenants move in.
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            3 day deadline
        </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" className={classes.button}>
            APPLY
      </Button>
        </CardActions>
      </Card>

      <Card className={classes.card, "card-border"}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Realty Company
        </Typography>
          <Typography variant="h5" component="h2">
            Replace Bedroom Carpet
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            $800
        </Typography>
          <Typography variant="body2" component="p">
            Replace carpet of 400sq ft. bedroom.
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            1 day deadline
        </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" className={classes.button}>
            APPLY
      </Button>
        </CardActions>
      </Card>
    </div >
  )

}




export default JoblistingsVerified;
