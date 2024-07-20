import React, { useState } from "react";
import heroBg from "../assets/herobg.jpg";
import EnrollSidebar from "./EnrollSidebar";
import HeroSideBar from "./HeroSideBar";

const Hero = () => {

  return (
    <section>
      <div>
        <HeroSideBar  />
        {/* <EnrollSidebar /> */}
      </div>
      <div
        className="hero-section h-screen bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
    </section>
  );
}

export default Hero;
