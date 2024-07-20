import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaPhone } from 'react-icons/fa';
import { IoFilterCircleOutline } from "react-icons/io5";

const HeroSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Toggle Icon */}
            <div className="fixed top-8 left-5  z-50 cursor-pointer">
                <IoFilterCircleOutline
                    size={50}
                    onClick={toggleSidebar}
                    className="text-gray-400"
                />
            </div>

            {/* Sidebar Content */}
            <div
                className={`fixed inset-y-0 right-0 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out bg-white shadow-lg w-80 z-40`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-lg font-semibold">Buildnox Construction</h2>
                    <button onClick={toggleSidebar} className="text-gray-600">
                        ✕
                    </button>
                </div>

                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Finding The Best Construction Services</h3>
                    <p className="text-gray-600 mb-4">
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.
                    </p>
                    <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2">Contact Us</h4>
                        <p className="text-gray-600"><strong>Address:</strong> 54B, Tailstoit Town 5238 MT, La City, IA 522364</p>
                        <p className="text-gray-600"><strong>Email:</strong> info@example.com</p>
                        <p className="text-gray-600"><strong>Phone:</strong> +1800-456-7890</p>
                        <p className="text-gray-600"><strong>Working Hrs:</strong> 9:30am to 6:30pm</p>
                    </div>
                </div>
            </div>

            {/* Fixed Sidebar for Social Icons */}
            <div className="h-full w-24 fixed top-0 left-0 bg-[#1f212b] text-white lg:flex flex-col items-center hidden">
                <div className='py-10'>
                </div>
                <div className='lg:flex h-full flex-col items-center justify-end py-4 space-y-8'>
                    <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaFacebookF size={22} /></a>
                    <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaInstagram size={22} /></a>
                    <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaTwitter size={22} /></a>
                    <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaPinterest size={22} /></a>
                    <a href="#" className="hover:bg-gray-700 p-2 rounded"><FaPhone size={22} /></a>
                </div>
            </div>
        </>
    );
};

export default HeroSideBar;
