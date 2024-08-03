import React, { useState } from 'react';
import { FaClock, FaUsers, FaTimes } from 'react-icons/fa'; // Import FaTimes
import { MdSend } from 'react-icons/md';
import AppointmentForm from './AppointmentForm'; // Adjust the path as necessary

const BookAppointment = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative">
      {/* Show the AppointmentForm directly */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-20 font-barlow overflow-y-auto">
          <div className="w-full max-w-3xl relative top-40 md:top-28 bg-white rounded-lg  p-6">
            {/* Close Button */}
            <button
              className="absolute top-6 right-10 text-gray-500 hover:text-gray-700"
              onClick={() => setShowForm(false)}
            >
              <FaTimes size={24} />
            </button>
            <AppointmentForm />
          </div>
        </div>
      )}

      <div className="max-w-sm mt-3 mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md lg:w-full p-6">
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
        <button
          className="w-full bg-red-500 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-red-600 transition duration-300"
          onClick={() => setShowForm(true)}
        >
          <MdSend className="mr-2" size={20} />
          Send Enquiry
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
