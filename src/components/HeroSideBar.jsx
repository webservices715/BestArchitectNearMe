import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaPhone } from 'react-icons/fa';
import { IoFilterCircleOutline } from "react-icons/io5";

const HeroSideBar = () => {
    return (
        <div className="h-full w-24 fixed top-0 left-0 bg-[#1f212b] text-white lg:flex flex-col items-center hidden md:block">
          <div className='py-10 hidden lg:block'>
            <IoFilterCircleOutline  size={50}/>
          </div>
          <div className='md:flex h-full flex-col items-center justify-end py-4 space-y-8'>
          <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaFacebookF size={22} /></a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaInstagram size={22} /></a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaTwitter size={22} /></a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaPinterest size={22} /></a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaPhone size={22} /></a>
          </div>
            
        </div>
    );
}

export default HeroSideBar;
