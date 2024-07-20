import React, { useState } from "react";
import MainLogo from "../assets/MainLogo.png";
import mobilenav from "../assets/mobilenav.png";
import menu from "../assets/menu.png";
import { CiSearch } from "react-icons/ci";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaSkype,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { IoListCircleSharp } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black font-Josefin bg-transparent font-semibold absolute w-[100%] z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between lg:justify-around  py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={MainLogo}
            alt="Company Logo"
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </div>

        {/* Navigation items for large screens */}
        <div className="hidden lg:flex lg:flex-wrap lg:space-x-6 lg:items-center lg:text-xl">
          <div className="flex flex-wrap space-x-6 lg:space-x-6 lg:space-y-0">
            <a href="#" className="hover:text-zinc-250">
              Home
            </a>
            <a href="#" className="hover:text-zinc-250">
              About
            </a>
            <a href="#" className="hover:text-zinc-250">
              Services
            </a>
            <a href="#" className="hover:text-zinc-250">
              Projects
            </a>
            <a href="#" className="hover:text-zinc-250">
              Blog
            </a>
            <a href="#" className="hover:text-zinc-250">
              Contact
            </a>
          </div>
          <button className="focus:outline-none hover:bg-red-500 hover:text-white rounded-full px-2 py-2 transition duration-150 ease-in-out">
            <CiSearch size={25} />
          </button>
        </div>

        {/* Toggle icon and phone number/WhatsApp icon for medium screens */}
        <div className="lg:hidden flex items-center space-x-6">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={25} /> : <img src={menu} className="w-14" />}
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
        <div className="fixed inset-0 text-white z-50 flex flex-col p-4 bg-[#202020]">
          <button className="self-end p-4" onClick={() => setIsOpen(false)}>
            <FiX size={25} />
          </button>
          <div className="flex items-center mb-4">
            <img src={mobilenav} alt="Buildnox" className="h-32 mr-1" />
          </div>
          <div className="flex-grow flex flex-col md:mt-4 mt-12">
            <ul className="flex flex-col px-6 space-y-4 text-lg">
              <hr />
              <li>
                <a href="#home" className="block py-[5px]">
                  HOME
                </a>
              </li>
              <hr />

              <li>
                <a href="#about" className="block py-[5px]">
                  ABOUT
                </a>
              </li>
              <hr />

              <li>
                <a href="#services" className="block py-[5px]">
                  SERVICES
                </a>
              </li>
              <hr />

              <li>
                <a href="#projects" className="block py-[5px]">
                  PROJECTS
                </a>
              </li>
              <hr />

              <li>
                <a href="#blog" className="block py-[5px]">
                  BLOG
                </a>
              </li>
              <hr />

              <li>
                <a href="#contact" className="block py-[5px]">
                  CONTACT
                </a>
                
              </li>
              <hr />
              
            </ul>
            <div className="flex justify-center space-x-8 mt-8">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://www.skype.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSkype size={25} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={25} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
