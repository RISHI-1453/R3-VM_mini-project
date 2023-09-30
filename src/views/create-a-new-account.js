import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './create-a-new-account.css'

const CREATEANEWACCOUNT = (props) => {
  return (
    <div className="createanewaccount-container">
      <Helmet>
        <title>CREATE-A-NEW-ACCOUNT - United Trim Wildcat</title>
        <meta
          property="og:title"
          content="CREATE-A-NEW-ACCOUNT - United Trim Wildcat"
        />
      </Helmet>
      <div className="createanewaccount-container1">
        <div className="createanewaccount-container2">
          <Script
            html={`<!DOCTYPE html>
<html>
<head>
<title>Create a new Account</title>
<style>
body {
  font-size: 30px;
  line-height: 30px;
}

input {
  font-size: 30px;
}

.create-account-form {
  width: 300px;
  margin: 10 auto;
}

.create-account-form input {
  margin-bottom: 10px;
}

.create-account-form .submit-button {
  background-color: blue;
  color: white;
  padding: 20px;
  border: none;
  cursor: pointer;
}
</style>
</head>
<body>

<h2>Create a New R3 VM Account</h2>

<form action="create_account.php" method="post" class="create-account-form">

  <label for="gmail">Gmail:</label>
  <input type="email" id="gmail" name="gmail">

  <br>

  <label for="new_password">New Password:</label>
  <input type="password" id="new_password" name="new_password">

  <br>

  <label for="reconfirm_password">Re-confirm Password:</label>
  <input type="password" id="reconfirm_password" name="reconfirm_password">


</form>

</body>
</html>`}
          ></Script>
        </div>
      </div>
      <Link
        to="/your-new-account-has-been-created"
        className="createanewaccount-navlink button"
      >
        SUBMIT
      </Link>
    </div>
  )
}

export default CREATEANEWACCOUNT
