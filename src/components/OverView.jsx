// Overview.jsx
import React, { useState } from 'react';

const OverView = () => {
  const [showMore, setShowMore] = useState(false);

  const services = [
    'Building Consultants & Contractors', 'Building Contractors', 'Interior Designers', 'Modular Kitchen',
    '3D Elevation Drawing Architects', 'Architects', 'Architect Valuers', 'Building Space Planning Consultants',
    'Elevation Architects', 'Interior Architects', 'Landscape Architects', 'Perspective View Designers',
    'Additional Service 1', 'Additional Service 2', 'Additional Service 3', 'Additional Service 4', 
    'Additional Service 5', 'Additional Service 6', 'Additional Service 7', 'Additional Service 8',
    'Additional Service 9', 'Additional Service 10', 'Additional Service 11', 'Additional Service 12',
    'Additional Service 13', 'Additional Service 14', 'Additional Service 15', 'Additional Service 16',
    'Additional Service 17', 'Additional Service 18', 'Additional Service 19', 'Additional Service 20',
    'Additional Service 21', 'Additional Service 22', 'Additional Service 23', 'Additional Service 24',
    'Additional Service 25', 'Additional Service 26', 'Additional Service 27', 'Additional Service 28',
    'Additional Service 29', 'Additional Service 30', 'Additional Service 31', 'Additional Service 32',
    'Additional Service 33', 'Additional Service 34', 'Additional Service 35', 'Additional Service 36',
    'Additional Service 37', 'Additional Service 38', 'Additional Service 39', 'Additional Service 40',
    'Additional Service 41', 'Additional Service 42', 'Additional Service 43', 'Additional Service 44',
    'Additional Service 45', 'Additional Service 46', 'Additional Service 47', 'Additional Service 48',
    'Additional Service 49', 'Additional Service 50', 'Additional Service 51', 'Additional Service 52',
    'Additional Service 53'
  ];

  return (
    <div className="w-full max-w-screen-lg mx-auto p-6">
      <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-xl">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 text-lg">Sulekha Score: <span className="font-bold text-teal-600 text-xl">7.1</span></p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Services Offered</h3>
          <div className="flex flex-wrap gap-3">
            {services.slice(0, showMore ? services.length : 12).map((service, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-300 transition-colors duration-300">
                {service}
              </span>
            ))}
            <span 
              onClick={() => setShowMore(!showMore)}
              className="text-teal-600 cursor-pointer font-medium hover:underline"
            >
              {showMore ? '- Show Less' : '+53 more'}
            </span>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Serving Cities</h3>
          <p className="text-gray-700 text-lg">Bhopal</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md transition-transform transform hover:scale-105">
              <p className="text-gray-700"><span className="font-bold text-gray-900">Experience:</span> 10 Years</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md transition-transform transform hover:scale-105">
              <p className="text-gray-700"><span className="font-bold text-gray-900">Sulekha Score:</span> 7.1</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md transition-transform transform hover:scale-105">
              <p className="text-gray-700"><span className="font-bold text-gray-900">No of Employees:</span> 10</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md transition-transform transform hover:scale-105">
              <p className="text-gray-700"><span className="font-bold text-gray-900">Company Type:</span> Partnership Firm</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">More Information</h3>
          <div className="space-y-4">
            <p className="text-gray-700"><span className="font-bold text-gray-900">Contact Person:</span> Ravi Talreja</p>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Contact Number:</span> 08069875236</p>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Address:</span> 48, basement, Plot No, E-3, Arera Colony, Bhopal - 462016</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
