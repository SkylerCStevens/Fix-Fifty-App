import React from 'react';
import axios from 'axios'

class Reviews extends React.Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        axios
          .get("/reviews")
          .then(res => {
            this.setState({ reviews: res.data.reviews }, () => console.log(res.data));
          })
    
          .catch(err => {
            console.log(err);
          });
      }


    render () {

    return (
        <React.Fragment>
            <h1>Reviews</h1>
        </React.Fragment>
    )
    }
}

export default Reviews