import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Nav from '../Nav'


const useStyles = makeStyles({
  avatar: {
    width: 150,
    height: 150
  },
  root: {
    height: 150,
    flexGrow: 1,
    maxWidth: 400,
    padding: 10,
    marginTop: 30
  },
  submit: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  msg: {
    color: "#655f5f",
    fontSize: 15,
    padding: 10,
    fontFamily: "roboto"
  }

});

function Unverified() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <h1 className="title">Profile</h1>
      <Nav />
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Jonathan Giler"
          src={require("./img/JonathanGiler.jpg")}
          className={classes.avatar}
        />
      </Grid>
      <h2 className="name">Jonathan Giler</h2>
      <h2 className="rep">Reputation points:</h2>
      <h2 className="score">N/A</h2>

      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          className="tabs"
          variant="fullWidth"
        >
          <Tab label="Skills" />
          <Tab label="Reviews" />
        </Tabs>
      </Paper>

      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem >
          <ListItemText primary="- Painting" />
          <ListItemText primary=" - Roofing" />
          <ListItemText primary=" - Woodwork" />
        </ListItem>
      </List>

      <Grid justify="center" className={classes.submit}>
        <h2 className={classes.msg}>Verified skills will have * at the end.</h2>
        <Button color="primary">Edit Skills</Button>
      </Grid>

    </div>
  );
}

export default Unverified;
