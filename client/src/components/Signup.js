import React, { useState } from "react";
//import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

/*const Signup = () => {
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
*/


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.black,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3),
  },

}));

export default function Signup() {
  const classes = useStyles();
  return (
    /* <React.Fragment>
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
     </React.Fragment>*/



    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
            </Typography >

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                name="lastname"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"

              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
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
              />
            </Grid>
            <Button
              type="submit"
              color="primary"
              className={classes.submit}
              variant="contained"
              required
              fullWidth


            >
              Sign up
                </Button>

            <Grid container justify="flex-end">
              <Grid item>

                <Link href="#" variant="body2">
                  Already have an account? Log in
                      </Link>


              </Grid>

            </Grid>
          </Grid>

        </form>

      </div>
    </Container>
  


    );
}



