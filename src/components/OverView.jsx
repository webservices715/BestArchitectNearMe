// Overview.jsx
import React from 'react';

const OverView = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Overview</h2>
          <p className="text-gray-700 text-lg">Sulekha Score: <span className="font-bold text-indigo-600">4.5</span></p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Services Offered</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Building Consultants & Contractors', 'Building Contractors', 'Interior Designers', 'Modular Kitchen',
              '3D Elevation Drawing Architects', 'Architects', 'Architect Valuers', 'Building Space Planning Consultants',
              'Elevation Architects', 'Interior Architects', 'Landscape Architects', 'Perspective View Designers'
            ].map((service, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded-full border border-gray-300">
                {service}
              </span>
            ))}
            <span className="text-indigo-600 cursor-pointer font-medium">+53 more</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Serving Cities</h3>
          <p className="text-gray-700 text-lg">Bhopal</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">More Information</h3>
          <div className="space-y-2">
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
