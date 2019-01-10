import React from 'react';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

const Login = () => {
  return <GoogleLogin
    clientId="37117900893-tnjb874qr6v0d099htebl15cuiemuadr.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
}

export default Login;