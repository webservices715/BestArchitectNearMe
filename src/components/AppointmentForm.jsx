import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the FaTimes icon

const AppointmentForm = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg py-12 px-6 mt-6 mb-6">
      {/* Close Button */}
      

      {/* Hero Section */}
      <div className="relative mb-8 overflow-hidden rounded-t-xl bg-black opacity-90  py-16 text-center shadow-xl shadow-gray-300">
        <h1 className="mt-2 px-4 text-2xl font-bold text-white md:text-3xl ">Book an appointment</h1>
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
          <p className="font-serif text-lg font-bold text-blue-900">Select a service</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {['Financial Planning', 'Retirement Planning', 'Investment Advice'].map((service, index) => (
              <div key={index} className="relative">
                <input className="peer hidden" id={`radio_${index + 1}`} type="radio" name="radio" />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
                <label 
                  className="flex cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" 
                  htmlFor={`radio_${index + 1}`}
                >
                  <span className="font-medium">{service}</span>
                  <span className="text-xs uppercase">1 Hour</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <p className="font-serif text-lg font-bold text-blue-900">Select a date</p>
          <div className="relative mt-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg 
                aria-hidden="true" 
                className="h-5 w-5 text-gray-500" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input 
              type="text" 
              className="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" 
              placeholder="Select date" 
            />
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <p className="font-serif text-lg font-bold text-blue-900">Select a time</p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {['12:00', '14:00', '09:00', '12:00', '15:00', '12:00', '14:00', '12:00'].map((time, index) => (
              <button 
                key={index} 
                className={`rounded-lg px-4 py-2 font-medium ${time === '09:00' ? 'bg-emerald-700 text-white' : 'bg-emerald-100 text-emerald-900'} active:scale-95`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Book Now Button */}
        <button className="w-full rounded-full border-8 border-emerald-500 bg-emerald-600 px-6 py-3 text-lg font-bold text-white transition hover:translate-y-1">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
