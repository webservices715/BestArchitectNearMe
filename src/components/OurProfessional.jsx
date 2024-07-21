import React from 'react';

function OurProfessional() {
  return (
    <section className="flex items-center justify-center bg-[#1F212B] md:h-[70vh] py-10 md:py-0 ">
      <div className="main w-[90%] md:w-[80%] text-[#FFFFFF] flex flex-col md:flex-row items-center justify-between">
        <div className="left-section flex flex-col justify-center items-center w-fit relative mb-6 md:mb-0">
          <span
            className="text-[240px] md:text-[320px]  font-barlow bg-[url('https://wp1.themevibrant.com/newwp/buildnox2/wp-content/themes/buildnox/assets/images/icons/text-bg.png')] bg-repeat uppercase"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitFontSmoothing: 'antialiased',
              fontWeight:"800"
            }}
            aria-hidden="true"
          >
            20
          </span>
          <span className="absolute bottom-2 md:bottom-10 text-sm md:text-xl text-gray-400 tracking-[.4rem]">YEAR OF EXPERIENCE</span>
        </div>
        <div className="middle-section font-sans flex flex-col justify-center w-full md:w-[30%]  items-start mb-6 md:mb-0 text-center md:text-left">
          <p className="uppercase text-[#FD4732] text-sm mt-8 md:text-base py-3 font-bold tracking-[.2rem]">Our Professionals</p>
          <p className="text-[#b5b6c5] text-base md:text-2xl font-bold leading-snug">A Construction Company Based In London Group Working Since 1995</p>
          <p className="flex flex-col items-center md:items-center mt-8">
            <span className="font-bold text-[3rem] md:text-[5rem]">150+</span>
            <span className='tracking-[.2rem] text-gray-400 font-semibold'>HIGH SKILLED PEOPLE</span>
          </p>
        </div>
        <div className="right-section text-[#b5b6c5] w-full md:w-[30%] mt-4 md:mt-0 text-center md:text-left">
          <p className="mb-3">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
          <ul className="leading-relaxed py-3 list-disc list-inside ">
            <li>Affordable and fair prices.</li>
            <li>Licensed and Insured</li>
            <li>Delivery on Time</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurProfessional;
