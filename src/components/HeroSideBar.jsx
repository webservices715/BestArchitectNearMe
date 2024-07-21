import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { HiMenuAlt1 } from "react-icons/hi";
import MainLogo from "../assets/MainLogo.png";
import '../App.css';
import { BiPhoneCall } from "react-icons/bi";
import { LuMailCheck } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const HeroSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleInputChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
    };

    return (
        <>
            {/* Toggle Icon */}
            <div className="absolute hidden md:block top-8 left-6 z-50 cursor-pointer rounded-full border border-white p-3 transition-all duration-500 ease-in-out transform hover:bg-red-500 text-white hover:scale-105">
                <HiMenuAlt1 size={30} onClick={toggleSidebar} />
            </div>

            {/* Semi-transparent Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 transition-opacity duration-500 ease-in-out bg-black bg-opacity-70"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar Content */}
            <div
                className={`fixed inset-y-0 right-0 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out bg-white shadow-lg w-[28rem] z-40 p-6 overflow-y-auto font-barlow custom-scrollbar`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <img src={MainLogo} alt="Logo" className="w-16" />
                    <button onClick={toggleSidebar} className="text-gray-600 text-3xl transition-all duration-500 ease-in-out">✕</button>
                </div>

                <div className="p-4">
                    <h3 className="text-3xl text-[#172b56] font-semibold mb-6 mt-10">Finding The Best Construction Services</h3>
                    <p className="text-gray-600 mb-4 leading-loose">
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.
                    </p>
                    <div className="border-t pt-6">
                        <h4 className="text-2xl mb-2 font-semibold text-[#172b56]">Contact Us</h4>
                        <p className="text-gray-600 flex items-center py-3 text-lg"><SlLocationPin className="mr-6 text-red-500" size={28} /> 54B, Tailstoit Town 5238 MT, La City, IA 522364</p>
                        <p className="text-gray-600 flex items-center py-3 text-lg"><LuMailCheck className="mr-6 text-red-500" size={28} /> info@example.com</p>
                        <p className="text-gray-600 flex items-center py-3 text-lg"><BiPhoneCall className="mr-6 text-red-500" size={28} /> +1800-456-7890</p>
                        <p className="text-gray-600 flex items-center py-3 text-lg"><FiClock className="mr-6 text-red-500" size={28} /> 9:30am to 6:30pm</p>
                    </div>
                    <div className="border-t pt-10">
                        <h4 className="text-2xl mb-6 font-semibold text-[#172b56]">Let's Connect</h4>
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <input
                                type="email"
                                value={email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="p-2 border border-gray-300 rounded-md mb-4 outline-red-500"
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center p-2 bg-red-500 text-white rounded-md transition-all duration-500 ease-in-out hover:bg-red-600"
                            >
                                <FaPaperPlane className="mr-2" /> Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Fixed Sidebar for Social Icons */}
            <div className="h-[55rem] w-28 absolute top-0 left-0 bg-[#1f212b] opacity-65  lg:flex flex-col items-center hidden ">
                <div className='lg:flex h-full flex-col items-center justify-center py-4 space-y-8'>
                    <a href="#" className="hover:bg-red-500 p-3 rounded-full transition-all duration-500 ease-in-out text-white"><FaFacebookF size={22} /></a>
                    <a href="#" className="hover:bg-red-500 p-3 rounded-full transition-all duration-500 ease-in-out text-white"><FaInstagram size={22} /></a>
                    <a href="#" className="hover:bg-red-500 p-3 rounded-full transition-all duration-500 ease-in-out text-white"><FaTwitter size={22} /></a>
                    <a href="#" className="hover:bg-red-500 p-3 rounded-full transition-all duration-500 ease-in-out text-white"><FaPinterest size={22} /></a>
                    <a href="#" className="hover:bg-red-500 p-3 rounded-full transition-all duration-500 ease-in-out text-white"><FaPhone size={22} /></a>
                </div>
            </div>
        </>
    );
};

export default HeroSideBar;
