import React from 'react';

function OurProfessional() {
  return (
    <section className="flex items-center justify-center lg:h-[70vh] py-8 lg:py-0  ">
      <div className="main w-[90%] lg:w-[80%] text-[#222222] flex flex-col lg:flex-row items-center justify-between">
        <div className="left-section flex flex-col justify-center items-center w-fit relative mb-6 lg:mb-0">
          <span
            className="text-[240px] lg:text-[350px]  font-barlow bg-[url('https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-repeat uppercase"
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
          <span className="absolute bottom-2 lg:bottom-10 text-sm lg:text-2xl text-gray-600 tracking-[.4rem]">YEAR OF EXPERIENCE</span>
        </div>
        <div className="middle-section font-sans flex flex-col items-center md:items-start justify-center  w-full lg:w-[30%]  mb-6 lg:mb-0 text-center lg:text-left">
          <p className="uppercase text-[#FD4732] text-lg mt-8 lg:text-base py-3 font-bold tracking-[.2rem]">Our Professionals</p>
          <p className="text-[#6a6a6a] text-lg lg:text-2xl font-semibold leading-snug">A Construction Company Based In London Group Working Since 1995</p>
          <p className="flex flex-col items-center lg:items-center mt-8">
            <span className="font-bold text-[4rem] lg:text-[5rem]">150+</span>
            <span className='tracking-[.2rem] text-gray-600 font-semibold'>HIGH SKILLED PEOPLE</span>
          </p>
        </div>
        <div className="right-section text-[#414141] w-full lg:w-[30%] mt-4 lg:mt-0 text-center lg:text-left">
          <p className="mb-3">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
          <ul className="leading-relaxed py-3 list-inside list-none">
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
