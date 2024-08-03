// Overview.jsx
import React, { useState } from 'react';
import { MdAttachMoney, MdLocationOn, MdInfo, MdPerson, MdPhone, MdCheckCircle, MdClose } from 'react-icons/md';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import BookAppointment from './BookAppointment';

const OverView = () => {
  const [showMore, setShowMore] = useState(false);

  const services = [
    'Building Consultants & Contractors', 'Building Contractors', 'Interior Designers', 'Modular Kitchen',
    '3D Elevation Drawing Architects', 'Architects', 'Architect Valuers', 'Building Space Planning Consultants',
    'Elevation Architects', 'Interior Architects', 'Landscape Architects', 'Perspective View Designers',
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto p-6">
      <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg">
        {/* Overview Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Overview</h2>
          <p className="text-gray-700 text-xl">Sulekha Score: <span className="font-bold text-teal-600 text-2xl">7.1</span></p>
        </div>
        
        {/* Services Offered Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Services Offered</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            {services.slice(0, showMore ? services.length : 8).map((service, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full border border-gray-300">
                {service}
              </span>
            ))}
          </div>
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-teal-600 font-medium hover:underline"
          >
            {showMore ? '- Show Less' : '+ Show More'}
          </button>
        </div>

        {/* Payment and City Section */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center text-gray-700 text-lg">
            <MdAttachMoney className="text-teal-600 text-2xl mr-3" />
            <span>Accepted Payment Modes: Cash, Cheque</span>
          </div>
          <div className="flex items-center text-gray-700 text-lg">
            <MdLocationOn className="text-teal-600 text-2xl mr-3" />
            <span>Serving Cities: Bhopal</span>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <MdInfo className="text-teal-600 text-2xl mr-3" />
              <span><strong>Top Brands Used:</strong> Ozone, Franke, Bosch, Hafele, Saint-Gobain, Nirali, Greenlam, Hettich, Greenply, Century Ply, Kitply, Elica, Ebco, Faber, KAFF, Sharon Plywoods, Evershine, Merino, Sleek</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span><strong>Residential Projects Executed:</strong> More than 100</span>
            </div>
            <div className="flex items-center">
              <FaTimesCircle className="text-red-600 text-2xl mr-3" />
              <span><strong>Free Consultation Provided:</strong> No</span>
            </div>
            <div className="flex items-center">
              <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span><strong>Avg. Project Delivery Time:</strong> More than 60 days</span>
            </div>
            <div className="flex items-center">
              <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span><strong>Warranty of Work:</strong> 1 - 5 years</span>
            </div>
            <div className="flex items-center">
              <FaTimesCircle className="text-red-600 text-2xl mr-3" />
              <span><strong>EMI Option Provided:</strong> No</span>
            </div>
            <div className="flex items-center">
              <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span><strong>Loan Assistance Provided:</strong> Yes</span>
            </div>
            <div className="flex items-center">
              <MdPerson className="text-teal-600 text-2xl mr-3" />
              <span><strong>Expertise:</strong> Duplex House, Apartment, 3 BHK Flat Interior Design, 1 BHK Flat Interior Design, Villa, Bungalow, False Ceiling, Entertainment Units, Crockery Units, Pooja Room, Kids Room, Study Room, Dining Room, Wardrobe, 3D Interior Design, Space Planning, Bedroom, Kitchen, Living Room, Bathroom</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span><strong>Commercial Projects Executed:</strong> More than 50</span>
            </div>
            <div className="flex items-center">
              <MdInfo className="text-teal-600 text-2xl mr-3" />
              <span><strong>Architecture Type:</strong> Hospital Design Architects, Industrial Architect, Structural Design Architects, 2D&3D Elevation Drawing Architects, Commercial Architects, Retail Store Design Architects, Green/Sustainable Design Architects, Home Architects</span>
            </div>
            <div className="flex items-center">
              <MdPerson className="text-teal-600 text-2xl mr-3" />
              <span><strong>Contact Person:</strong> Richa Nitnaware</span>
            </div>
            <div className="flex items-center">
              <MdLocationOn className="text-teal-600 text-2xl mr-3" />
              <span><strong>Address:</strong> Plot 1, M.P. Nagar, Bhopal - 462011</span>
            </div>
            <div className="flex items-center">
              <MdPhone className="text-teal-600 text-2xl mr-3" />
              <span><strong>Contact Number:</strong> 08069873804</span>
            </div>
            <div className="flex items-center">
              <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span><strong>Document Verification:</strong> Bank details: Verified, Business details: Verified, ID Proof: Verified</span>
            </div>
          </div>
        </div>
      </div>
      
      <BookAppointment />

    </div>
  );
};

export default OverView;
