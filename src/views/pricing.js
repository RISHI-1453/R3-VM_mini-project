import React from 'react'

import { Helmet } from 'react-helmet'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>pricing - R3 VM</title>
        <meta property="og:title" content="pricing - R3 VM" />
      </Helmet>
      <div className="pricing-pricing">
        <div className="pricing-container1">
          <div className="pricing-pricing-card">
            <span className="pricing-text">BASIC</span>
            <div className="pricing-container2">
              <span className="pricing-text01">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-text04">10</span>
            </div>
            <div className="pricing-container3">
              <span className="pricing-text05">✔ vCPUs=1</span>
              <span className="pricing-text06">✔ Storage space=20Gib</span>
              <span className="pricing-text07">✔ Memory space=2Gib </span>
            </div>
            <button className="pricing-button button">Learn More</button>
          </div>
          <div className="pricing-pricing-card1">
            <span className="pricing-text08">INTERMEDIATE</span>
            <div className="pricing-container4">
              <span className="pricing-text09">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-text12">25</span>
              <span className="pricing-text13">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="pricing-text15">
              Billed annualy or $25 month-to-month.
            </span>
            <div className="pricing-container5">
              <span className="pricing-text16">✔ vCPUs=3</span>
              <span className="pricing-text17">✔ Storage space=40Gib</span>
              <span className="pricing-text18">✔ Memory space=5Gib</span>
              <span className="pricing-text19">
                ✔ Discount offer on next payment
              </span>
              <span className="pricing-text20">✔ High performance</span>
            </div>
            <button className="pricing-button1 button">Learn More</button>
          </div>
          <div className="pricing-pricing-card2">
            <span className="pricing-text21">Pro</span>
            <div className="pricing-container6">
              <span className="pricing-text22">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-text25">40</span>
              <span className="pricing-text26">
                <span>/ monthly</span>
              </span>
            </div>
            <span className="pricing-text28">
              Billed annualy or $40 month-to-month.
            </span>
            <div className="pricing-container7">
              <span className="pricing-text29">✔ vCPUs=6</span>
              <span className="pricing-text30">✔ Storage space=60Gib</span>
              <span className="pricing-text31">✔ Memory space=10Gib</span>
              <span className="pricing-text32">
                <span>
                  ✔ Discount and performance same as 
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>    intermediate</span>
              </span>
            </div>
            <button className="pricing-button2 button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
