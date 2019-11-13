import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";


const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  }
});

function Unverified() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <h1 className="profile">Profile</h1>
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
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Skill Set" className='tree'>
          <TreeItem nodeId="2" label="React" className='skills' />
          <TreeItem nodeId="3" label="Node"  className='skills'/>
          <TreeItem nodeId="4" label="SASS"  className='skills'/>
        </TreeItem>
        <TreeItem nodeId="5" label="Interests" className='tree'>
          <TreeItem nodeId="6" label="Building websites" >
            <TreeItem nodeId="7" label="HIRED UP">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
      <h2 className='info'>Verified skills will have * at the end.</h2>
      <button type='button' className='edit'>Edit Skills</button>
    </div>
  );
}

export default Unverified;
