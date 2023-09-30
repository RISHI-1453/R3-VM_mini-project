import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './account-create-or-login.css'

const AccountCreateOrLogin = (props) => {
  return (
    <div className="account-create-or-login-container">
      <Helmet>
        <title>Account-create-or-login - United Trim Wildcat</title>
        <meta
          property="og:title"
          content="Account-create-or-login - United Trim Wildcat"
        />
      </Helmet>
      <div className="account-create-or-login-container1">
        <span className="account-create-or-login-text">
          ALREADY HAVE AN ACCOUNT?
        </span>
        <Link to="/login" className="account-create-or-login-navlink button">
          LOGIN
        </Link>
      </div>
      <div className="account-create-or-login-container2">
        <span className="account-create-or-login-text1">
          OR CREATE A NEW ACCOUNT?
        </span>
        <Link
          to="/create-a-new-account"
          className="account-create-or-login-navlink1 button"
        >
          CREATE A NEW ACCOUNT
        </Link>
      </div>
    </div>
  )
}

export default AccountCreateOrLogin
