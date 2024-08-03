import React, { useState } from 'react';
import { FaTimes, FaCalendarAlt } from 'react-icons/fa'; // Import the FaTimes and FaCalendarAlt icons

const AppointmentForm = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg py-12 px-2 md:px-6 mt-6 mb-6 font-barlow">
      {/* Hero Section */}
      <div className="relative mb-8 overflow-hidden rounded-t-xl bg-red-500 opacity-100 py-16 text-center shadow-xl shadow-gray-300">
        <h1 className="mt-2 px-4 text-2xl font-bold text-white md:text-3xl">Book an appointment</h1>
        <p className="mt-4 text-base text-white">Get an appointment with our experienced accountants</p>
        <img
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
          src="https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Background"
        />
      </div>

      {/* Form Section */}
      <div className="grid gap-6">
        {/* Service Selection */}
        <div>
          <div className=" mt-4">
          <label className="text-lg font-bold text-blue-900">Your Name</label>
            <input
              type="text"
              className="block w-full rounded-lg border border-red-300 bg-red-50 p-2.5 pl-45 text-red-800 outline-none ring-opacity-30 placeholder:text-red-800 focus:ring focus:ring-red-300 sm:text-sm"
              placeholder="Enter Your Name"
            />
          </div>
          </div>
        <div>
          <div className=" mt-4">
          <label className="text-lg font-bold text-blue-900">Your Number</label>
            <input
              type="number"
              className="block w-full rounded-lg border border-red-300 bg-red-50 p-2.5 pl-45 text-red-800 outline-none ring-opacity-30 placeholder:text-red-800 focus:ring focus:ring-red-300 sm:text-sm"
              placeholder="Enter Your Number"
            />
          </div>
          </div>

        {/* Date Selection */}
        <div>
          <p className="text-lg font-bold text-blue-900">Select a date</p>
          <div className="relative mt-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FaCalendarAlt className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="date"
              className="block w-full rounded-lg border border-red-300 bg-red-50 p-2.5 pl-10 text-red-800 outline-none ring-opacity-30 placeholder:text-red-800 focus:ring focus:ring-red-300 sm:text-sm"
              placeholder="Select date"
            />
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <p className="text-lg font-bold text-blue-900">Select a time</p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00','12:00'].map((time, index) => (
              <button
                key={index}
                className={`rounded-lg px-4 py-2 font-medium ${time === selectedTime ? 'bg-red-700 text-white' : 'bg-red-100 text-red-900'} active:scale-95`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Book Now Button */}
        <button className="w-full rounded-full border-8 border-red-500 bg-red-600 px-6 py-3 text-lg font-bold text-white transition hover:translate-y-1">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
