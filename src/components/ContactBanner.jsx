import React from 'react'
import contactBanner from "../assets/meeting.webp"

function ContactBanner() {
  return (
    <div
    className="relative h-[32rem] bg-no-repeat bg-center"
    style={{
      backgroundImage: `url(${contactBanner})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}
  >
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
      <div className="relative">
        <div className="relative inline-block">
          <h2 className="text-white uppercase tracking-widest md:text-3xl text-lg font-semibold p-8 font-Josefin">
           Designing Dreams, One Blueprint at a Time!
          </h2>
          <div className="absolute inset-0">
            <div
              className="border-t-4 border-l-4 border-white"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "50%",
              }}
            ></div>
            <div
              className="border-b-4 border-r-4 border-white"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "50%",
                height: "50%",
              }}
            ></div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-12">
          <h1 className="text-white md:text-5xl text-4xl font-barlow font-semibold">Contact Us</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactBanner
