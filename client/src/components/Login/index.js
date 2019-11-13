import React, { useState } from "react";
import './index.css';
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../assets/images/logo.png'

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleForm = () => {
    axios.post("/register", {
      username: email,
      password
    });
  };


  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
        paddingBottom: 200
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3),
    },

  }));
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="logo" className="logo-login" />
        <Typography component="h1" variant="h5">
          LOGIN
            </Typography >

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                onChange={e => setEmail(e.target.value)}
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
              className={classes.submit}
              variant="contained"
              fullWidth
              onSubmit={handleForm()}
            >
              Login
                </Button>
            <Button color="secondary"
              variant="contained"
              className={classes.submit}
              fullWidth
            ><a href="http://localhost:5000/auth/google">Google Login</a></Button>
            <Grid container justify="center">
              <Grid item>

                <Link href="http://localhost:3000/signup" variant="body2">
                  Don't have an account? Sign up
                      </Link>
              </Grid>

            </Grid>
          </Grid>

        </form>

      </div>
    </Container>)
}


export default Login;
