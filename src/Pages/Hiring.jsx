import React from 'react';
import { FiSearch } from 'react-icons/fi';

const architects = [
  { name: 'John Doe', specialty: 'Residential Design', location: 'New York, NY' },
  { name: 'Jane Smith', specialty: 'Commercial Design', location: 'San Francisco, CA' },
  // Add more architects as needed
];

const Hiring = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-28">
      <header className="px-16  py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Architect Hiring</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search architects..."
            className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600 focus:outline-none">
            <FiSearch size={24} />
          </button>
        </div>
      </header>

      <main className="p-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architects.map((architect, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{architect.name}</h2>
                <p className="text-gray-600 mt-2">{architect.specialty}</p>
                <p className="text-gray-600">{architect.location}</p>
              </div>
              <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none">
                Contact
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Hiring;
