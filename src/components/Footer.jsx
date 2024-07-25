import React, { useEffect, useState } from "react";
import mobilenav from "../assets/mobilenav.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
    setScrolled(currentScrollPos > 10);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowToggle(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);
  return (
    <section className="pt-8 pb-7 bg-[#1f212b] font-Sora">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between pb-2 border-b border-gray-500 gap-8">
          <NavLink to="/" onClick={() => smoothScrollTo("home")}>
            <img src={mobilenav} alt="GREDX" className="w-60" />
          </NavLink>
        </div>
        <div className="py-14 flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-500">
          <div className="w-full max-lg:mx-auto flex flex-col sm:flex-row max-lg:items-center max-lg:justify-between gap-6 md:gap-12 lg:gap-60">
            <div>
              <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">
                COMPANY
              </h6>
              <ul className="flex flex-col max-lg:items-center gap-6">
                <li>
                  <NavLink
                    to="#"
                    onClick={() => smoothScrollTo("home")}
                    className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-red-600 focus-within:outline-0 focus-within:text-red-600"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={() => smoothScrollTo("home")}
                    className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-red-600 focus-within:outline-0 focus-within:text-red-600"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => smoothScrollTo("home")}
                    className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-red-600 focus-within:outline-0 focus-within:text-red-600"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    onClick={() => smoothScrollTo("home")}
                    className="text-base font-normal max-lg:text-center text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-red-600 focus-within:outline-0 focus-within:text-red-600"
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-lg font-medium text-white mb-7 max-lg:text-center">
                Useful Links
              </h6>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li>
                  <NavLink
                    to="#services"
                    onClick={() => smoothScrollTo("services")}
                    className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-red-600 focus-within:outline-0 focus-within:text-red-600"
                  >
                    Architect
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#services"
                    onClick={() => smoothScrollTo("services")}
                    className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-red-600 focus-within:outline-0 focus-within:text-red-600"
                  >
                    Hiring
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#services"
                    onClick={() => smoothScrollTo("services")}
                    className="text-base font-normal text-gray-400 whitespace-nowrap transition-all duration-300 hover:text-red-600 focus-within:outline-0 focus-within:text-red-600"
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:max-w-md max-lg:mx-auto ">
            <h6 className="text-lg font-medium text-white mb-7">GET CONTACT</h6>
            <div className="bg-gray-800 rounded-xl p-5">
              <form action="#" className="flex flex-col gap-5">
                <div className="relative">
                  <label className="flex  items-center mb-2 text-gray-400 text-base font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    id="default-search"
                    className="block w-full px-5 py-3 text-lg font-normal shadow-xs text-white bg-transparent border border-gray-400 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed focus-within:border-gray-300"
                    placeholder="john@gmail.com"
                    required=""
                  />
                </div>
                <div className="flex flex-col min-[540px]:flex-row items-center justify-between gap-3">
                  <div className="flex items-start black">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 h-5 aspect-square appearance-none cursor-pointer border border-gray-600 bg-transparent  rounded-md mr-2 hover:border-gray-400 hover:bg-gray-900 checked:bg-no-repeat checked:bg-center checked:border-gray-400 checked:bg-gray-800"
                      checked=""
                    />
                    <label
                      for="checked-checkbox"
                      className="text-sm font-normal cursor-pointer text-gray-400"
                    >
                      I agree with{" "}
                      <a href="javascript:;" className="text-red-600">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="javascript:;" className="text-red-600">
                        Terms of Condition
                      </a>
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Send"
                    className="text-white text-base font-semibold py-3 px-7 rounded-full cursor-pointer bg-red-600 transition-all duration-500 hover:bg-white hover:text-gray-900"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-7">
          <span className="text-sm font-normal text-gray-400">
            <a
              href="#home"
              onClick={() => {
                smoothScrollTo("home");
              }}
              className=""
            >
              ©GREDX
            </a>{" "}
            2024, All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="javascript:;"
              className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500  hover:bg-red-600 hover:text-white focus-within:outline-0 focus-within:bg-red-600 focus-within:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="javascript:;"
              className="p-3 rounded-full bg-white text-gray-900 group transition-all duration-500  hover:bg-red-600 hover:text-white focus-within:outline-0 focus-within:bg-red-600 focus-within:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="javascript:;"
              className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500  hover:bg-red-600 hover:text-white focus-within:outline-0 focus-within:bg-red-600 focus-within:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="javascript:;"
              className="p-3 rounded-full bg-white text-gray-700 group transition-all duration-500 hover:bg-red-600 hover:text-white focus-within:outline-0 focus-within:bg-red-600 focus-within:text-white"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
