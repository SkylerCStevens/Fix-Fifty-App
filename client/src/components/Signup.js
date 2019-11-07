import React, { useState } from "react";
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleForm = () => {
    axios.post("/register", {
      firstName,
      lastName,
      email,
      password
    })
  }

    return (
      <React.Fragment>
        <h1>Signup</h1>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="username" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="button" onClick={handleForm}>Login</button>
        </form>
      </React.Fragment>
    );
  
}

export default Signup;
