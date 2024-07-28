import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MainLogo from "../assets/MainLogo.png";
import mobilenav from "../assets/mobilenav.png";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
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
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true);
      } else if (window.scrollY > scrollPos) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav
        className={`font-Josefin font-semibold fixed w-full z-10 text-white transition-all duration-300 ease-in-out ${
          showNavbar
            ? scrollPos > 0
              ? `bg-[#1f212b]  opacity-95 shadow-lg  `
              : "bg-transparent"
            : "hidden"
        }`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between lg:justify-around py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={mobilenav}
              alt="Company Logo"
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </div>

          {/* Navigation items for large screens */}
          <div className="hidden lg:flex lg:items-center lg:text-xl">
            <div className="flex space-x-6 lg:space-x-7">
              <NavLink
                to="/"
                className={`hover:text-zinc-250 ${
                  isHomePage ? "text-white" : "text-black"
                }`}
                activeClassName="text-red-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={`hover:text-zinc-250 ${
                  isHomePage ? "text-white" : "text-black"
                }`}
                activeClassName="text-red-500"
              >
                About
              </NavLink>
              <NavLink
                to="/architects"
                className={`hover:text-zinc-250 ${
                  isHomePage ? "text-white" : "text-black"
                }`}
                activeClassName="text-red-500"
              >
                Architects
              </NavLink>
              <NavLink
                to="/blogs"
                className={`hover:text-zinc-250 ${
                  isHomePage ? "text-white" : "text-black"
                }`}
                activeClassName="text-red-500"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={`hover:text-zinc-250 ${
                  isHomePage ? "text-white" : "text-black"
                }`}
                activeClassName="text-red-500"
              >
                Contact
              </NavLink>
            </div>
            <button
              className={`focus:outline-none hover:bg-red-500 hover:text-white transition-all duration-500 ease-in-out transform  ${ isHomePage ? "text-white" : "text-black"} hover:scale-105 rounded-full ml-5 px-2 py-2 `}
              onClick={() => setSearchOpen(true)}
            >
              <CiSearch size={26} />
            </button>
          </div>

          {/* Toggle icon */}
          <div className="lg:hidden flex items-center space-x-6">
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FiX size={25} />
              ) : (
                <AiOutlineAlignRight
                  className={`rounded-full border-2  ${ isHomePage ? "border-white" : "border-black"}  p-2 hover:bg-red-500 transition-all duration-500 ease-in-out transform   ${ isHomePage ? "text-white" : "text-black hover:text-white"}  hover:scale-105`}
                  size={50}
                />
              )}
            </button>
          </div>

          {/* Phone number and WhatsApp icon for large screens */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hidden sm:flex items-center gap-2 focus:outline-none bg-gradient-to-r from-[#ee4242] to-[#b30909] hover:text-black hover:bg-transparent  transition-all duration-500 ease-in-out transform hover:scale-105 text-white text-lg py-3 px-4  rounded-md ">
              Enroll Now <IoIosLogIn size={25} />
            </button>
          </div>
        </div>

        {/* Mobile menu items */}
        <div
          className={`fixed inset-y-0 right-0 bg-[#202020] text-white z-50 flex flex-col p-4 overflow-y-auto transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
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
                <NavLink
                  to="/"
                  className="block py-1"
                  activeClassName="text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink
                  to="/about"
                  className="block py-1"
                  activeClassName="text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </NavLink>
              </li>
              <hr />
              <hr />
              <li>
                <NavLink
                  to="/architects"
                  className="block py-1"
                  activeClassName="text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  Architects
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink
                  to="/blogs"
                  className="block py-1"
                  activeClassName="text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  BLOG
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink
                  to="/contact"
                  className="block py-1"
                  activeClassName="text-red-500"
                  onClick={() => setIsOpen(false)}
                >
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

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed  inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-white p-6 rounded-lg w-full max-w-full relative">
              <button
                className={`absolute top-4 right-4`}
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
                <button className="bg-red-500 text-white px-8 py-[1.3rem] rounded-r-lg flex items-center ">
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
