import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

const Login = () => {

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="username" placeholder="John345" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleForm}>Login</button>
        <div>
          <a href="/auth/google">Google Login</a>
        </div>
      </form>
    </React.Fragment>
  );

}

export default Login;
