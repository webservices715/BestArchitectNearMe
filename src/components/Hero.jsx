import React from "react";
import heroBg from "../assets/herobg.jpg";
import HeroSideBar from "./HeroSideBar";

function Hero() {
  return (
    <section>
      <div>
        <HeroSideBar />
      </div>
      <div
        className="hero-section h-screen bg-center "
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
    </section>
  );
}

export default Hero;
