import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>login - United Trim Wildcat</title>
        <meta property="og:title" content="login - United Trim Wildcat" />
      </Helmet>
      <div className="login-container1">
        <div className="login-container2">
          <Script
            html={`<!DOCTYPE html>
<html>
<head>
<title>Login Page</title>
<style>
body {
  font-size: 30px;
  line-height: 24px;
}

input {
  font-size: 30px;
}

.login-form {
  width: 300px;
  margin: 10 auto;
}

.login-form input {
  margin-bottom: 20px;
}

.login-form .submit-button {
  background-color: blue;
  color: white;
  padding: 20px;
  border: none;
  cursor: pointer;
}

.login-form .forgot-password-link {
  text-align: center;
  margin-top: 10px;
}

.login-form .forgot-password-link a {
  color: blue;
  text-decoration: none;
}
</style>
</head>
<body>



<form action="login.php" method="post" class="login-form">

  <label for="userid">User ID:</label>
  <input type="text" id="userid" name="userid">

  <br>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

 

  <p class="login-form forgot-password-link"><a href="/forgot_password">Forgot password?</a></p>

</form>

</body>
</html`}
          ></Script>
        </div>
      </div>
      <Link to="/book-your-vm" className="login-navlink button">
        LOGIN
      </Link>
    </div>
  )
}

export default Login
