import React from 'react';
import { useLocation } from 'react-router-dom';

function ArchitectDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const image = searchParams.get('image');
  const name = searchParams.get('name');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const rating = parseFloat(searchParams.get('rating')) || 0;
  const address = searchParams.get('address');
  const phone = searchParams.get('phone');
  const social = JSON.parse(searchParams.get('social') || '[]');

  console.log("Parsed params:", {
    image, name, title, description, rating, address, phone, social
  });

  return (
    <div className="flex flex-col md:flex-row p-4">
    <div className="w-full md:w-2/3">
      <img
        src="https://via.placeholder.com/600x400"
        alt="Architect"
        className="w-full h-auto"
      />
      <div className="flex items-center mt-4">
        <div className="bg-gray-300 rounded-full h-16 w-16 flex items-center justify-center text-xl">
          K
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-gray-600">Arera Colony, Bhopal</p>
          <p className="text-gray-600">Hours: Closed Now - Closes 7 PM</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 md:ml-4 mt-4 md:mt-0">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Book your appointment</h2>
        <p className="text-gray-600">Get free consultation from this business</p>
        <p className="text-gray-600 mt-2">Response Time: <span className="text-green-600">Within 15 Mins</span></p>
        <p className="text-gray-600 mt-2">Recently Enquired Users: <span className="text-green-600">100+</span></p>
        <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded">Schedule Appointment</button>
      </div>
    </div>
  </div>
  );
}

export default ArchitectDetail;
