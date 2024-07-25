import React from 'react'
import BlogSection from '../components/BlogSection'
import Hero from '../components/Hero'
import OurProfessional from '../components/OurProfessional'
import RecentProject from '../components/RecentProject'

function Home() {
  return (
    <div >
      <Hero/>
       <OurProfessional/>
       <RecentProject />
       <BlogSection />
    </div>
  )
}

export default Home
