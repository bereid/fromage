import React from 'react';
import GoogleLogin from 'react-google-login';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const styles = {
  paper: {
    margin: '0 auto',
    height: 200,
    width: 200,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  string: {
    textAlign: 'center',
  },
}

const responseGoogle = (response) => {
  console.log(response);
}

const Login = () => (
  <Paper style={styles.paper}>
    <Typography style={styles.string}>Sign in with Google</Typography>
    <GoogleLogin
      clientId="37117900893-tnjb874qr6v0d099htebl15cuiemuadr.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  </Paper>
);

export default Login;