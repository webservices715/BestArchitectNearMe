import React from "react";
import "tailwindcss/tailwind.css";
import OurStory from "./OurStory";

// Optimized AboutSection Component
const AboutSection = React.memo(() => {
  const imageUrl1 =
    "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600";
  const imageUrl2 =
    "https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="container mx-auto py-20 font-barlow">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-8">
        <div className="relative">
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <img
              className="absolute w-[52%] h-[80%] object-cover left-2 md:left-5"
              src={imageUrl1}
              alt="About 1"
            />
            <img
              className="absolute w-[52%] h-[85%] object-cover top-[20%] left-[28%] md:left-[40%]"
              src={imageUrl2}
              alt="About 2"
            />
            <div className="absolute w-[62%] h-[82%] top-[10%] left-[14%] md:left-[20%] border-4 border-red-500 border-primary z-[-1]"></div>
          </div>
        </div>
        <div className="px-4 lg:pr-12">
          <h4 className="text-xl font-semibold text-gray-600 pt-10">About Us</h4>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6" style={{ lineHeight: "55px" }}>
            A Creative Architecture Agency For Your Dream Home
          </h1>
          <p className="mb-6 text-sm md:text-lg text-gray-500">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p className="mb-6 text-sm md:text-lg text-gray-500">
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
            est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy
            clita sit at, sed sit sanctus dolor eos.
          </p>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center border-4 border-red-500 border-primary w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">25</h1>
            </div>
            <div className="ml-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 font-semibold">Years</h3>
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 font-semibold">Working</h3>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-0">Experience</h3>
            </div>
          </div>
          <a
            href="#"
            className="bg-gradient-to-r from-[#ee4242] to-[#b30909] text-white text-lg hover:bg-red-600 transition-all duration-500 ease-in-out py-2 px-4 md:py-4 md:px-10"
          >
            Read More
          </a>
        </div>
      </div>

     
    </div>
  );
});

export default AboutSection;
