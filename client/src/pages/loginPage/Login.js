import React, { useState } from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();


  // const handleForm = () => {
  //   axios.post("/register", {
  //     firstName,
  //     lastName,
  //     email,
  //     password
  //   })
  // }

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form>
        <div>

        </div>
        <label htmlFor="firstName">First Name</label>
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="firstName"
          label="First Name"
          type="required"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button type="button" onClick={handleForm}>Login</button>
      </form>
    </React.Fragment>
  );

}

export default Login;
