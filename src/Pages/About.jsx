import React, { useEffect } from "react";

import AboutBanner from '../components/AboutBanner'
import AboutSection from '../components/AboutSection '
import OurStory from '../components/OurStory'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='pt-24 bg-gray-50'>
      <AboutBanner />
      <AboutSection />
    <OurStory />

    </div>
  )
}

export default About
