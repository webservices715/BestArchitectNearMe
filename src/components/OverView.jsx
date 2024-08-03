// Overview.jsx
import React from 'react';

const OverView = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-gray-600">Sulekha Score: <span className="font-bold text-black">4.5</span></p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Services offered</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              'Building Consultants & Contractors', 'Building Contractors', 'Interior Designers', 'Modular Kitchen',
              '3D Elevation Drawing Architects', 'Architects', 'Architect Valuers', 'Building Space Planning Consultants',
              'Elevation Architects', 'Interior Architects', 'Landscape Architects', 'Perspective View Designers'
            ].map((service, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                {service}
              </span>
            ))}
            <span className="text-blue-500 cursor-pointer">+53 more</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Serving cities</h3>
          <p className="text-gray-600">Bhopal</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">More information</h3>
          <div className="mt-2">
            <p className="text-gray-600"><span className="font-bold text-black">Contact Person:</span> Ravi Talreja</p>
            <p className="text-gray-600"><span className="font-bold text-black">Contact Number:</span> 08069875236</p>
            <p className="text-gray-600"><span className="font-bold text-black">Address:</span> 48, basement, Plot No, E-3, Arera Colony, Bhopal - 462016</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
