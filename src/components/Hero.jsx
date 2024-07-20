import React from 'react'
import heroBg from '../assets/herobg.jpg'
function Hero() {
  return (
    <section>
      <div   className="hero-section h-screen bg-center "
        style={{ backgroundImage: `url(${heroBg})` }}>
         
      </div>
    </section>
  )
}

export default Hero
