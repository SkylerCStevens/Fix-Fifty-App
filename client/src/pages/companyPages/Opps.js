import React from 'react';
import axios from 'axios'

class Opps extends React.Component {

    state = {
        opps: []
    }

    componentDidMount() {
        axios
          .get("/opps")
          .then(res => {
            this.setState({ opps: res.data.opps }, () => console.log(res.data));
          })
    
          .catch(err => {
            console.log(err);
          });
      }

    render () {
        return (
            <React.Fragment>
                <h1>Opps</h1>
            </React.Fragment>
        )
    }
}

export default Opps;