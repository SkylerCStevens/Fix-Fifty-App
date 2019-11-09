import React from 'react';
import "./User.css";

const Users = () => {
    return (
        <React.Fragment>
            <Nav/>
            <h1> Hello Users</h1>
            <h2>Log in or make an account</h2>
            {console.log('Users')}
            <Login/>
            <Footer/>
        </React.Fragment>
    )
}

export default Users