import React from "react";

class Users extends React.Component {
  state = {
    user: [],
  };


  componentDidMount() {
    axios
      .get("/user")
      .then(res => {
        this.setState({ user: res.data.user }, () => console.log(res.data));
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Users</h1>
        {console.log("Users")}
      </React.Fragment>
    );
  }
}

export default Users;
