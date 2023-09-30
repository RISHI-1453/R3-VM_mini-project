import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './your-new-account-has-been-created.css'

const YOURNEWACCOUNTHASBEENCREATED = (props) => {
  return (
    <div className="yournewaccounthasbeencreated-container">
      <Helmet>
        <title>YOUR-NEW-ACCOUNT-HAS-BEEN-CREATED - United Trim Wildcat</title>
        <meta
          property="og:title"
          content="YOUR-NEW-ACCOUNT-HAS-BEEN-CREATED - United Trim Wildcat"
        />
      </Helmet>
      <span className="yournewaccounthasbeencreated-text">
        YOUR NEW R3 VM ACCOUNT HAS BEEN CREATED
      </span>
      <Link to="/login" className="yournewaccounthasbeencreated-navlink button">
        LOGIN NOW
      </Link>
    </div>
  )
}

export default YOURNEWACCOUNTHASBEENCREATED
