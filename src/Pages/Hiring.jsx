import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa6";
import commingsoon from "../assets/commingsoon.jpg"
const Hiring = () => {
  return (
    <div
    className="w-full h-screen"
    style={{ backgroundImage: `url(${commingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
      <div className="w-full h-screen flex flex-col items-center justify-between  py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
         
          <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-800 tracking-wider font-bold font-serif mt-12 text-center">Coming Soon</h1>
          <div className="flex flex-col items-center space-y-4 mt-24">
            <p className="text-gray-700 uppercase text-xl">Notify me when it's ready</p>
            <div class="sm:mt-40">
            <form class="w-full max-w-xl mx-auto">
                <div class="flex items-center border-b border-indigo-500 py-2">
                    <input class="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="username@email.ext" aria-label="Full name" />
                    <button class="flex-shrink-0 bg-indigo-500 border-indigo-500 hover:border-indigo-700 text-sm  text-white py-3 px-4 rounded" type="button">Subscribe</button>
                </div>
            </form>
        </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" title="Facebook">
                <FiFacebook className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 text-gray-900 transition duration-500" />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <FiTwitter className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 text-gray-900  transition duration-500" />
              </a>
            </li>
            <li>
              <a href="#" title="LinkedIn">
                <FiLinkedin className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 text-gray-900  transition duration-500" />
              </a>
            </li>
            <li>
              <a href="#" title="FaInstagram">
                <FaInstagram className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 text-gray-900  transition duration-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
