import React from 'react'
import axios from 'axios'

class Profile extends React.Component {

    state = {
        profile: []
    }

    componentDidMount() {
        axios
          .get("/profile")
          .then(res => {
            this.setState({ profile: res.data.profile }, () => console.log(res.data));
          })
    
          .catch(err => {
            console.log(err);
          });
      }

    render() {
        return (
            <React.Fragment>
                <h1>Profile</h1> 
            </React.Fragment>
        )
    }
}

export default Profile;