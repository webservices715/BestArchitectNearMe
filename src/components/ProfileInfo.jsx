import React from 'react';
import { FaMapMarkerAlt, FaCheckCircle, FaStar, FaPen, FaShareAlt, FaDirections } from 'react-icons/fa';

const ProfileInfo = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold flex items-center">
            Reach ideas <FaCheckCircle className="text-blue-500 ml-2" />
          </h1>
          <p className="text-gray-600 flex items-center">
            M.P. Nagar, Bhopal <FaMapMarkerAlt className="text-blue-500 ml-1" />
          </p>
          <p className="text-green-600">
            Hours: <span className="font-bold">Open Now</span> · Closes 6 PM
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end">
            <FaStar className="text-yellow-500" />
            <span className="text-xl font-bold ml-1">4.2/5</span>
          </div>
          <p className="text-gray-500">Based on 6 Reviews</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-3">
        <button className="flex items-center px-4 py-2 text-xl  border rounded-md hover:bg-gray-100">
          <FaShareAlt className="mr-2" /> Share
        </button>
        <button className="flex items-center px-4 py-2 text-xl  border rounded-md hover:bg-gray-100">
          <FaDirections className="mr-2" /> Directions
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
