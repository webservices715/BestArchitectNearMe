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
        className="hero-section h-[120vh]  font-sans bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="info-section h-full flex flex-col justify-center pl-6 sm:pl-12 lg:pl-24 xl:pl-40">
          <div className="w-fit h-[70vh] flex flex-col justify-center ml-11 font-sans absolute top-[15vh]">
            <p className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-bold text-white leading-tight">
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
            <p className="text-white text-[4rem] font-thin leading-tight mt-2">
              Specialists
            </p>
            <p className="w-full sm:w-2/3 lg:w-1/3 mt-6 text-sm sm:text-base md:text-[20px] lg:text-lg font-thin text-white tracking-wide">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages
            </p>
            <div className="btn-section flex items-center gap-5 mt-8">
              <span className="border border-white w-12 h-0"></span>
              <button className="text-white font-bold border border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
                Discover Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
