import React from 'react'
import axios from 'axios'

class Rate extends React.Component {

    state = {
        rates: []
    }

    componentDidMount() {
        axios
          .get("/rates")
          .then(res => {
            this.setState({ rates: res.data.rates }, () => console.log(res.data));
          })
    
          .catch(err => {
            console.log(err);
          });
      }




    render() {
        return (
            <React.Fragment>
                <h1>Rate</h1>
            </React.Fragment>
        )
    }
}

export default Rate