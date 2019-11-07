import React, { useState } from "react";
import axios from "axios";
// import TextField from "@material-ui/core/TextField";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleForm = () => {
    axios.post("/register", {
      username: email,
      password
    });
  };

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="username"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleForm}>
          Login
        </button>
        <div>
          <a href="http://localhost:5000/auth/google" >Google Login</a>

        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
