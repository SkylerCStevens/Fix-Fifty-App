import React from "react";
import axios from "axios";
// import "./Jobs.css";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

class Jobs extends React.Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    // axios
    //   .get("/jobs")
    //   .then(res => {
    //     this.setState({ jobs: res.data.jobs }, () => console.log(res.data));
    //   })

    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <React.Fragment>
        <Nav/>
        <h1>Jobs</h1>

        <Footer/>
      </React.Fragment>

     
    );
  }
}

export default Jobs;
