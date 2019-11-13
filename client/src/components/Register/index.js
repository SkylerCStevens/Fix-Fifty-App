import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../assets/images/logo.png';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      marginBottom: 200
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

export default function Signup() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="logo" className="logo-login" />
        <Typography component="h1" variant="h5">
          SIGN UP
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

            <Grid container justify="center">
              <Grid item>

                <Link href="http://localhost:3000/login" variant="body2">
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