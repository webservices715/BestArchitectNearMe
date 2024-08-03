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
    <div className="w-full max-w-screen-xl mx-auto p-6">
      <div className="bg-white p-6 rounded-lg">
        {/* Overview Section */}
        <div className="mb-8 ">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Overview</h2>
          <p className="text-gray-700 text-xl">Sulekha Score: <span className="font-bold text-teal-600 text-2xl">7.1</span></p>
        </div>
        
        {/* Services Offered Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4 ">Services Offered</h3>
          <div className="flex flex-wrap gap-3  mb-4">
            {services.slice(0, showMore ? services.length : 8).map((service, index) => (
              <span key={index} className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full border border-teal-300">
                {service}
              </span>
            ))}
          </div>
          <div className="">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-teal-600 font-medium hover:underline"
            >
              {showMore ? '- Show Less' : '+ Show More'}
            </button>
          </div>
        </div>

        {/* Payment and City Section */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="flex items-center  text-gray-700 text-lg">
            <MdAttachMoney className="text-teal-600 text-2xl mr-3" />
            <span>Accepted Payment Modes: Cash, Cheque</span>
          </div>
          <div className="flex items-center  text-gray-700 text-lg">
            <MdLocationOn className="text-teal-600 text-2xl mr-3" />
            <span>Serving Cities: Bhopal</span>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4 ">Additional Information</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <MdInfo className="text-teal-600 text-2xl mr-3" />
              <span className="text-gray-700"><strong>Top Brands Used:</strong> Ozone, Franke, Bosch, Hafele, Saint-Gobain, Nirali, Greenlam, Hettich, Greenply, Century Ply, Kitply, Elica, Ebco, Faber, KAFF, Sharon Plywoods, Evershine, Merino, Sleek</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span className="text-gray-700"><strong>Residential Projects Executed:</strong> More than 100</span>
            </div>
            <div className="flex items-center">
              <FaTimesCircle className="text-red-600 text-2xl mr-3" />
              <span className="text-gray-700"><strong>Free Consultation Provided:</strong> No</span>
            </div>
            <div className="flex items-center">
              <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span className="text-gray-700"><strong>Avg. Project Delivery Time:</strong> More than 60 days</span>
            </div>
            <div className="flex items-center">
              <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span className="text-gray-700"><strong>Warranty of Work:</strong> 1 - 5 years</span>
            </div>
            <div className="flex items-center">
              <FaTimesCircle className="text-red-600 text-2xl mr-3" />
              <span className="text-gray-700"><strong>EMI Option Provided:</strong> No</span>
            </div>
            <div className="flex items-center">
              <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
              <span className="text-gray-700"><strong>Loan Assistance Provided:</strong> Yes</span>
            </div>
            <hr className="my-6 border-gray-300" />
            
            {/* Expertise Section */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 ">Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-600 mr-3" size={44}/>
                  <span className="text-gray-700">
                    Duplex House, Apartment, 3 BHK Flat Interior Design, 1 BHK Flat Interior Design, Villa, Bungalow, False Ceiling, Entertainment Units, Crockery Units, Pooja Room, Kids Room, Study Room, Dining Room, Wardrobe, 3D Interior Design, Space Planning, Bedroom, Kitchen, Living Room, Bathroom
                  </span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-600 text-2xl mr-3" />
                  <span className="text-gray-700"><strong>Commercial Projects Executed:</strong> More than 50</span>
                </div>
                <div className="flex items-center">
                  <MdInfo className="text-teal-600 mr-3" size={45} />
                  <span className="text-gray-700"><strong>Architecture Type:</strong> Hospital Design Architects, Industrial Architect, Structural Design Architects, 2D&3D Elevation Drawing Architects, Commercial Architects, Retail Store Design Architects, Green/Sustainable Design Architects, Home Architects</span>
                </div>
              </div>
            </div>

<hr />
            {/* Contact Information Section */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 ">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MdPerson className="text-teal-600 text-2xl mr-3" />
                  <span className="text-gray-700"><strong>Contact Person:</strong> Richa Nitnaware</span>
                </div>
                <div className="flex items-center">
                  <MdLocationOn className="text-teal-600 text-2xl mr-3" />
                  <span className="text-gray-700"><strong>Address:</strong> Plot 1, M.P. Nagar, Bhopal - 462011</span>
                </div>
                <div className="flex items-center">
                  <MdPhone className="text-teal-600 text-2xl mr-3" />
                  <span className="text-gray-700"><strong>Contact Number:</strong> 08069873804</span>
                </div>
              </div>
            </div>

            <hr />  

            {/* Document Verification Section */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 ">Document Verification</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
                  <span className="text-gray-700"><strong>Bank details:</strong> Verified</span>
                </div>
                <div className="flex items-center">
                  <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
                  <span className="text-gray-700"><strong>Business details:</strong> Verified</span>
                </div>
                <div className="flex items-center">
                  <MdCheckCircle className="text-teal-600 text-2xl mr-3" />
                  <span className="text-gray-700"><strong>ID Proof:</strong> Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BookAppointment />
    </div>
  );
};

export default OverView;
