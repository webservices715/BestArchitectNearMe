import React, { useState } from "react";
import {
  FaComments,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ArchitectProfiles = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here
  };

  const architects = [
    {
      name: "Archotech And Associates",
      location: "Rajpur Road Rajpur Road, Dehradun",
      image:
        "https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=600",
      phone: "(555) 123-4567",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      rating: 4.0,
      ratingsCount: 119,
      description: "Easily understandable quotation",
      tags: ["Commercial", "Industrial"],
      enquiries: 376,
    },
    {
      name: "Avadhi Design Studio",
      location: "Bypass Road Dehradun City, Dehradun",
      image:
        "https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=600",
      phone: "(555) 987-6543",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      rating: 4.9,
      ratingsCount: 119,
      description: "Reasonably priced",
      tags: ["Commercial", "Residential", "CCTV Surveillance"],
      enquiries: 86,
    },
    {
      name: "Avadhi Design Studio",
      location: "Bypass Road Dehradun City, Dehradun",
      image:
        "https://images.pexels.com/photos/3333923/pexels-photo-3333923.jpeg?auto=compress&cs=tinysrgb&w=600",
      phone: "(555) 987-6543",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      rating: 4.9,
      ratingsCount: 119,
      description: "Reasonably priced",
      tags: ["Commercial", "Residential", "CCTV Surveillance"],
      enquiries: 86,
    },
    {
      name: "Avadhi Design Studio",
      location: "Bypass Road Dehradun City, Dehradun",
      image:
        "https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&w=600",
      phone: "(555) 987-6543",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      rating: 4.9,
      ratingsCount: 119,
      description: "Reasonably priced",
      tags: ["Commercial", "Residential", "CCTV Surveillance"],
      enquiries: 86,
    },
    {
      name: "Avadhi Design Studio",
      location: "Bypass Road Dehradun City, Dehradun",
      image:
        "https://images.pexels.com/photos/3835455/pexels-photo-3835455.jpeg?auto=compress&cs=tinysrgb&w=600",
      phone: "(555) 987-6543",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      rating: 4.9,
      ratingsCount: 119,
      description: "Reasonably priced",
      tags: ["Commercial", "Residential", "CCTV Surveillance"],
      enquiries: 86,
    },
    // Add more architects here if needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20 font-barlow">
      <h1 className="text-4xl font-bold text-center mb-2 text-red-500">
        Best Architects For You
      </h1>
      <p className="text-md text-center mb-10 text-gray-600">
        Find Best & Popular Architects Near you
      </p>
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-2 lg:mx-12 mx-2 space-y-8 lg:space-y-0">
        <div className="flex flex-col space-y-8 lg:w-[75%]">
          {architects.map((architect, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl"
            >
              <img
                src={architect.image}
                alt={architect.name}
                className="rounded-lg w-full md:w-52 h-52 object-cover mb-4 md:mb-0"
              />
              <div className="flex flex-col justify-between md:ml-4 w-full">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    {architect.name}
                  </h2>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MdLocationOn size={20} />
                    <p className="ml-1">{architect.location}</p>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="flex items-center mr-4">
                      <span className="text-green-500">{architect.rating}</span>
                      <span className="ml-1 text-gray-500">★</span>
                      <span className="ml-1">
                        ({architect.ratingsCount} Ratings)
                      </span>
                    </span>
                    <span className="text-red-500">Verified</span>
                  </div>
                  <p className="text-gray-600 mb-2">{architect.description}</p>
                  <div className="flex flex-wrap space-x-2 mb-2">
                    {architect.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex space-x-3 mb-4 md:mb-0">
                    <a
                      href={architect.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-gray-700"
                    >
                      <FaFacebookF size={24} />
                    </a>
                    <a
                      href={architect.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-gray-700"
                    >
                      <FaXTwitter size={24} />
                    </a>
                    <a
                      href={architect.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-gray-700"
                    >
                      <FaLinkedinIn size={24} />
                    </a>
                    <a
                      href={architect.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-gray-700"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <IoCallSharp size={26} className="text-green-500" />
                      <p className="text-gray-800">{architect.phone}</p>
                    </div>
                    <button className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-800">
                      <FaComments size={20} />
                      <span>Chat</span>
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  {architect.enquiries} people recently enquired
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full lg:w-[40%]">

          <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg lg:w-[98%] ">
            <h2 className="text-3xl text-[#172b56] font-semibold mb-2">
              Join Our Network of Top Architects
            </h2>
            <p className="text-gray-600 mb-4 leading-loose">
              Become a part of our esteemed directory and showcase your
              expertise to a wider audience. Connect with potential clients and
              elevate your architectural practice.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div class="flex-1 px-2">
                <label class="block mb-2 text-sm text-gray-600 ">Name</label>
                <input
                  type="text"
                  placeholder="Enter you name "
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700  bg-white border  rounded-lg placeholder-gray-600   border-gray-700 focus:border-green-400  focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-4">
                <label class="block mb-2 text-sm text-gray-600 ">Phone</label>
                <input
                  type="number"
                  placeholder="Enter you number"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700  bg-white border  rounded-lg placeholder-gray-600   border-gray-700 focus:border-green-400  focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center p-2 bg-green-600 text-white rounded-md transition-all duration-500 ease-in-out hover:bg-green-800"
              >
                <FaPaperPlane className="mr-2" /> Submit
              </button>
            </form>
          </div>

          <section className="py-10 bg-white mt-2 shadow-lg rounded-xl hidden lg:block">
            <div className="mx-auto  px-4 sm:px-6 lg:px-8 font-barlow">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Check the latest blog
              </h2>
              <p className="text-lg text-gray-500 text-center mb-16">
                We&apos;re constantly trying to express ourselves and actualize
                our dreams. If you have the opportunity to play this game of
                life you need to appreciate every moment.
              </p>
              <div className="flex flex-col">
                <div className="group w-full border border-gray-300 rounded-2xl">
                  <div className="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244317.png"
                      alt="blogs tailwind section"
                      className="rounded-t-2xl w-full"
                    />
                  </div>
                  <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                    <span className="text-red-600 font-medium mb-3 block">
                      Jan 01, 2023
                    </span>
                    <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                      Clever ways to invest in product to organize your
                      portfolio
                    </h4>
                    <p className="text-gray-500 leading-6 mb-10">
                      Discover smart investment strategies to streamline and
                      organize your portfolio..
                    </p>
                    <NavLink
                      to="/blogs"
                      className="cursor-pointer text-lg text-red-600 font-semibold"
                    >
                      Read more..
                    </NavLink>
                  </div>
                </div>
                
              </div>
            </div>
            <NavLink
              to="/blogs"
              className="cursor-pointer border border-red-400 shadow-sm rounded-full py-3.5 px-7 mt-12 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-500 ease-in-out hover:text-white hover:bg-red-500"
            >
              View All
            </NavLink>
          </section>

        </div>

      </div>
      <NavLink
        to="/blogs"
        className="cursor-pointer border border-green-400 shadow-sm rounded-full py-3.5 px-7 mt-12 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-500 ease-in-out hover:text-white hover:bg-green-500"
      >
        View All
      </NavLink>
    </div>
  );
};

export default ArchitectProfiles;
