import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './book-your-vm.css'

const BOOKYOURVM = (props) => {
  return (
    <div className="bookyourvm-container">
      <Helmet>
        <title>BOOK-YOUR-VM - R3 VM</title>
        <meta property="og:title" content="BOOK-YOUR-VM - R3 VM" />
      </Helmet>
      <div className="bookyourvm-container1">
        <div className="bookyourvm-container2">
          <Script
            html={`<!DOCTYPE html>
<html>
<head>
<title>R3 VM</title>
<style>
body {
  font-size: 35px;
  line-height: 60px;
}

input,
select,
textarea {
  font-size: 16px;
}
</style>
</head>
<body>


<form action="action_page.php" method="post">
  <h1>BOOK YOUR VM</h1>

  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <br>

  <label for="gmail">Gmail:</label>
  <input type="email" id="gmail" name="gmail">

  <br>

  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone">

  <br>

  <label for="address">Address:</label>
  <textarea id="address" name="address" rows="5" cols="30"></textarea>

  <br>

  <label for="upi">UPI ID:</label>
  <input type="text" id="upi" name="upi">

  <br>

  <label for="cloud_service_provider">Cloud Service Provider:</label>
  <select id="cloud_service_provider" name="cloud_service_provider">
    <option value="aws">AWS</option>
    <option value="azure">Azure</option>
    <option value="openstack">OpenStack</option>
    <option value="alibaba">Alibaba</option>
    <option value="alibaba">OpenStack</option>
  </select>

  <br>

  <label for="os_required">OS Required:</label>
  <select id="os_required" name="os_required">
    <option value="windows">Windows</option>
    <option value="linux">Linux</option>
    <option value="kali_linux">Kali Linux</option>
    <option value="mac_os">Mac OS</option>
  </select>

  <br>

  <label for="space_required">Space Required (GB):</label>
  <input type="number" id="space_required" name="space_required">

  <br>

  <label for="bits_required">Bits Required (32/64):</label>
  <input type="number" id="bits_required" name="bits_required">

  <br>

  <label for="os_version_required">OS Version Required:</label>
  <input type="text" id="os_version_required" name="os_version_required">

  

</form>

</body>
</html>`}
          ></Script>
        </div>
      </div>
      <div className="bookyourvm-container3">
        <Link
          to="/thank-you-for-booking-your-vm"
          className="bookyourvm-navlink button"
        >
          SUBMIT
        </Link>
      </div>
    </div>
  )
}

export default BOOKYOURVM
