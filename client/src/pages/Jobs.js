import React from "react";
import axios from "axios";

class Jobs extends React.Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    axios
      .get("/jobs")
      .then(res => {
        this.setState({ contacts: res.data.jobs }, () => console.log(res.data));
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Jobs</h1>
      </React.Fragment>
    );
  }
}

export default Jobs;
