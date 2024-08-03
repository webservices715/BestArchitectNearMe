import React from "react";
import { NavLink } from "react-router-dom";
import heroBg from "../assets/herobg.jpg";
import HeroSideBar from "./HeroSideBar";

function Hero() {
  return (
    <section>
      <div>
        <HeroSideBar />
      </div>
      <div
        className="hero-section h-screen sm:h-[120vh] font-sans bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` , backgroundBlendMode: 'overlay',  
          backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
      >
        <div className="info-section h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="w-fit h-[70vh] flex flex-col justify-center ml-4 sm:ml-10 md:ml-20 font-sans absolute top-[12vh] sm:top-[20vh] lg:top-[20vh]">
            <p className="text-[4rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-extrabold text-white leading-none">
              <span>Archi</span>
              <span
                className="text-transparent"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px white",
                }}
              >
                tect
              </span>
            </p>
            <p className="text-white text-[3rem] sm:text-[zrem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] leading-none"
             style={{fontWeight:"lighter"}}
            >
              Specialists
            </p>
            <p className="w-full sm:w-2/3 lg:w-[43%] mt-4 sm:mt-6 text-xl leading-relaxed sm:text-base md:text-lg lg:text-xl font-thin text-white tracking-wide">
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
            </p>
            <div className="btn-section flex items-center gap-5 mt-8">
              <span className="border border-white w-12 h-0"></span>
              <NavLink to={"/contact"} className="text-white font-bold border border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
                Discover Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
