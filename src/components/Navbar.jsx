import React, { useState } from "react";
import MainLogo from "../assets/MainLogo.png";
import mobilenav from "../assets/mobilenav.png";
import { CiSearch } from "react-icons/ci";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaSkype, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r text-black font-Josefin font-semibold">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={MainLogo} alt="Company Logo" className="h-16 w-16 md:h-20 md:w-20" />
        </div>

        {/* Navigation items for large screens */}
        <div className="hidden md:flex md:flex-wrap md:space-x-6 md:items-center md:text-xl">
          <div className="flex flex-wrap space-x-6 md:space-x-6 md:space-y-0">
            <a href="#" className="hover:text-zinc-300">Home</a>
            <a href="#" className="hover:text-zinc-300">About</a>
            <a href="#" className="hover:text-zinc-300">Services</a>
            <a href="#" className="hover:text-zinc-300">Projects</a>
            <a href="#" className="hover:text-zinc-300">Pages</a>
            <a href="#" className="hover:text-zinc-300">Blog</a>
            <a href="#" className="hover:text-zinc-300">Contact</a>
          </div>
          <button className="focus:outline-none hover:bg-red-500 hover:text-white rounded-full px-2 py-2 transition duration-150 ease-in-out">
            <CiSearch size={30} />
          </button>
        </div>

        {/* Toggle icon and phone number/WhatsApp icon for medium screens */}
        <div className="md:hidden flex items-center space-x-6">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>

        {/* Phone number and WhatsApp icon for large screens */}
        <div className="hidden md:flex items-center space-x-6">
          <span className="hidden sm:inline text-xl hover:text-red-500">
            1800-456-7890
          </span>
          <button className="hidden sm:inline focus:outline-none bg-[#151f2e] text-white py-6 px-3 rounded-b-full">
            <FaWhatsapp size={40} />
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#202020] text-white h-screen">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <img src={mobilenav} alt="Buildnox" className="h-32 mr-2" />
              <span className="text-xl font-bold">Buildnox</span>
              <span className="text-blue-500 ml-1">CONSTRUCTION</span>
            </div>
          </div>
          <div className="px-10">
            <ul className="flex flex-col space-y-4 text-lg">
              <li><a href="#home" className="block py-2">HOME</a></li>
              <li><a href="#about" className="block py-2">ABOUT</a></li>
              <li><a href="#services" className="block py-2">SERVICES</a></li>
              <li><a href="#projects" className="block py-2">PROJECTS</a></li>
              <li><a href="#pages" className="block py-2">PAGES</a></li>
              <li><a href="#blog" className="block py-2">BLOG</a></li>
              <li><a href="#contact" className="block py-2">CONTACT</a></li>
            </ul>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
              <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer"><FaSkype size={30} /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
