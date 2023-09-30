import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './thank-you-for-booking-your-vm.css'

const THANKYOUFORBOOKINGYOURVM = (props) => {
  return (
    <div className="thankyouforbookingyourvm-container">
      <Helmet>
        <title>THANK-YOU-FOR-BOOKING-YOUR-VM - R3 VM</title>
        <meta
          property="og:title"
          content="THANK-YOU-FOR-BOOKING-YOUR-VM - R3 VM"
        />
      </Helmet>
      <Link to="/" className="thankyouforbookingyourvm-navlink">
        THANK YOU FOR BOOKING YOUR VM ..YOU WILL GET YOUR VM IN 3 WORKING DAYS!
      </Link>
    </div>
  )
}

export default THANKYOUFORBOOKINGYOURVM
