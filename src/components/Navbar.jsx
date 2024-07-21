import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollPos) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <>
      <nav
        className={`text-black font-Josefin bg-transparent font-semibold fixed w-[100%] z-10 transition-all duration-300 ease-in-out ${
          showNavbar ? "translate-y-0 bg-black text-white" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between lg:justify-around py-4 px-6">
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
              <NavLink to="/" className="hover:text-zinc-250" activeClassName="text-red-500">
                Home
              </NavLink>
              <NavLink to="/about" className="hover:text-zinc-250" activeClassName="text-red-500">
                About
              </NavLink>
              <NavLink to="/services" className="hover:text-zinc-250" activeClassName="text-red-500">
                Services
              </NavLink>
              <NavLink to="/projects" className="hover:text-zinc-250" activeClassName="text-red-500">
                Projects
              </NavLink>
              <NavLink to="/blog" className="hover:text-zinc-250" activeClassName="text-red-500">
                Blog
              </NavLink>
              <NavLink to="/contact" className="hover:text-zinc-250" activeClassName="text-red-500">
                Contact
              </NavLink>
            </div>
            <button
              className="focus:outline-none hover:bg-red-500 hover:text-white rounded-full px-2 py-2 transition duration-150 ease-in-out"
              onClick={() => setSearchOpen(true)}
            >
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
                  <NavLink to="/" className="block py-[5px]" activeClassName="text-red-500" onClick={() => setIsOpen(false)}>
                    HOME
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink to="/about" className="block py-[5px]" activeClassName="text-red-500" onClick={() => setIsOpen(false)}>
                    ABOUT
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink to="/services" className="block py-[5px]" activeClassName="text-red-500" onClick={() => setIsOpen(false)}>
                    SERVICES
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink to="/projects" className="block py-[5px]" activeClassName="text-red-500" onClick={() => setIsOpen(false)}>
                    PROJECTS
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink to="/blog" className="block py-[5px]" activeClassName="text-red-500" onClick={() => setIsOpen(false)}>
                    BLOG
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink to="/contact" className="block py-[5px]" activeClassName="text-red-500" onClick={() => setIsOpen(false)}>
                    CONTACT
                  </NavLink>
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

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-white p-6 rounded-lg w-full h-full max-w-full relative">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setSearchOpen(false)}
              >
                <FiX size={40} />
              </button>
              <div className="flex items-center justify-center h-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full max-w-2xl px-4 py-6 rounded-l-lg border-none outline-none text-black"
                />
                <button className="bg-red-500 text-white px-8 py-[1.3rem] rounded-r-lg flex items-center">
                  <CiSearch size={30} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
