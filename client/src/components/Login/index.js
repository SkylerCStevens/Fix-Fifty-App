import React, { useState } from "react";
import './index.css';
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';

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
      <div className="login-wrapper">
        <h1 className="login-header">Login</h1>
        <form className="login-container" noValidate>
          <Grid item xs={12} >
            <TextField
              autoComplete="email"
              name="email"
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
              required
              fullWidth
              id="email"
              label="Email Address"

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="current-password"
              name="password"
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            required
            fullWidth
            onClick={handleForm}
          >
            Login
                </Button>
          <div>
            <Link><a href="http://localhost:5000/auth/google" >Google Login</a></Link>
          </div>

        </form>
      </div>

    </React.Fragment >
  );
};


export default Login;
