import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card3.css'

const TestimonialCard3 = (props) => {
  return (
    <div
      className={`testimonial-card3-testimonial-card ${props.rootClassName} `}
    >
      <svg
        viewBox="0 0 950.8571428571428 1024"
        className="testimonial-card3-icon"
      >
        <path
          d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
          className=""
        ></path>
      </svg>
      <div className="testimonial-card3-testimonial">
        <span className="testimonial-card3-text">{props.quote}</span>
        <span className="testimonial-card3-text1">{props.name}</span>
        <span className="testimonial-card3-text2">{props.role}</span>
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="testimonial-card3-image"
        />
      </div>
    </div>
  )
}

TestimonialCard3.defaultProps = {
  name: 'N.R. NARAYANA MURTHY',
  picture_src:
    '/whatsapp%20image%202023-09-30%20at%2016.26.49_278992f0-200h.jpg',
  quote:
    '"I\'ve been using R3 VM for over a year now and I\'m very impressed with the service. The VMs are always up and running, and the support team is very responsive. I would definitely recommend R3 VM to anyone looking for a reliable and affordable VM provider."',
  rootClassName: '',
  role: 'Founder of INFOSYS',
  picture_alt: 'profile',
}

TestimonialCard3.propTypes = {
  name: PropTypes.string,
  picture_src: PropTypes.string,
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  role: PropTypes.string,
  picture_alt: PropTypes.string,
}

export default TestimonialCard3
