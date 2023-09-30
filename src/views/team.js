import React from 'react'

import { Helmet } from 'react-helmet'

import GalleryCard1 from '../components/gallery-card1'
import './team.css'

const TEAM = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>TEAM - United Trim Wildcat</title>
        <meta property="og:title" content="TEAM - United Trim Wildcat" />
      </Helmet>
      <div className="team-gallery">
        <a
          href="https://www.linkedin.com/in/rithinvishwas"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            title="RITHIN VISHWAS.A"
            subtitle="CO-FOUNDER OF R3 VM"
            image_src="/whatsapp%20image%202023-09-30%20at%2017.56.46_a8b7e1fa-1500w.jpg"
            rootClassName="rootClassName"
            className="team-component"
          ></GalleryCard1>
        </a>
        <a
          href="https://www.linkedin.com/in/rishisenthil"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            title="RISHI SENTHIL"
            subtitle="FOUNDER AND CEO OF R3 VM"
            image_src="/jvmh-1500w.png"
            rootClassName="rootClassName1"
            className="team-component1"
          ></GalleryCard1>
        </a>
        <a
          href="https://www.linkedin.com/in/rohithr20"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            title="ROHITH RAJAN"
            subtitle="CO-FOUNDER OF R3 VM"
            image_src="/img_20230916_215514_628-1500h.jpg"
            rootClassName="rootClassName2"
            className="team-component2"
          ></GalleryCard1>
        </a>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxwZW9wbGV8ZW58MHx8fHwxNjk2MDc5NDM3fDA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName3"
          title="STEVE.S"
          subtitle="MANAGER"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwZW9wbGV8ZW58MHx8fHwxNjk2MDc5NDcxfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName4"
          subtitle="MARKETING HEAD"
          title="JOS.B"
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxwZW9wbGV8ZW58MHx8fHwxNjk2MDc5NDcxfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName5"
          title="KANE.W"
          subtitle="BUSINESS ANALYST"
        ></GalleryCard1>
      </div>
    </div>
  )
}

export default TEAM
