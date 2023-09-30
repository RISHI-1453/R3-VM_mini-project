import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard4 from '../components/feature-card4'
import './features.css'

const FEATURES = (props) => {
  return (
    <div className="features-container">
      <Helmet>
        <title>FEATURES - United Trim Wildcat</title>
        <meta property="og:title" content="FEATURES - United Trim Wildcat" />
      </Helmet>
      <div className="features-features">
        <h1 className="features-text">
          <span>Discover our</span>
          <br></br>
          <span>unique features</span>
        </h1>
        <div className="features-container1">
          <div className="features-container2">
            <FeatureCard4
              title="On-demand VM provisioning"
              description="You can provision and deploy VMs in minutes, without having to wait for IT approval."
              rootClassName="rootClassName1"
            ></FeatureCard4>
            <FeatureCard4
              title="Pay-as-you-go pricing"
              description="You only pay for the resources you use, and there are no long-term contracts."
              rootClassName="rootClassName4"
            ></FeatureCard4>
            <FeatureCard4
              title="24/7 customer support"
              description="R3 VM offers 24/7 customer support to help you with any questions or problems you may have."
              rootClassName="rootClassName3"
            ></FeatureCard4>
            <FeatureCard4
              title="Global availability"
              description="R3 VM has data centers all over the world, so you can deploy your VMs close to your users."
              rootClassName="rootClassName2"
            ></FeatureCard4>
          </div>
          <img
            alt="image"
            src="/virtual%20machine%20(1)-500h.png"
            className="features-image"
          />
        </div>
      </div>
      <div className="features-stats">
        <div className="features-stat">
          <h1 className="features-text04">
            <span>50</span>
            <span>+</span>
          </h1>
          <span className="features-text07">Happy clients</span>
          <span className="features-text08">Clients all across the globe.</span>
        </div>
        <div className="features-stat1">
          <h1 className="features-text09">
            <span>369</span>
          </h1>
          <span className="features-text11">Projects completed</span>
          <span className="features-text12">24*7 service</span>
        </div>
        <div className="features-stat2">
          <h1 className="features-text13">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="features-text16">Hours</span>
          <span className="features-text17">User friendly</span>
        </div>
        <div className="features-stat3">
          <h1 className="features-text18">
            <span>24/7</span>
          </h1>
          <span className="features-text20">Support</span>
          <span className="features-text21">Cost friendly</span>
        </div>
      </div>
    </div>
  )
}

export default FEATURES
