import React from 'react';
import { FaClock, FaUsers } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const BookAppointment = () => {
  return (
    <div className="max-w-sm mt-3 bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md lg:w-screen p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Your Appointment</h2>
        <p className="text-gray-600 mb-6">Easily schedule a meeting with us</p>
      </div>
      <div className="flex items-center mb-4">
        <FaClock className="text-red-500 mr-2" size={24} />
        <span className="text-gray-700">Response Time: 24 hours</span>
      </div>
      <div className="flex items-center mb-6">
        <FaUsers className="text-green-500 mr-2" size={24} />
        <span className="text-gray-700">Recently Enquired Users: 150</span>
      </div>
      <button className="w-full bg-red-500 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-red-600 transition duration-300">
        <MdSend className="mr-2" size={20} />
        Send Enquiry
      </button>
    </div>
  );
};

export default BookAppointment;
