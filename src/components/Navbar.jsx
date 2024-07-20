import React from 'react'
import MainLogo from "../assets/MainLogo.png"
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
          <nav className="bg-gradient-to-r text-black text-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
              
              <div className="flex items-center space-x-2">
                <img src={MainLogo} alt="Company Logo" className="h-20 w-20" />
                {/* <span className="text-xl font-bold">Buildnox</span>
                <span className="text-sm text-zinc-300">CONSTRUCTION</span> */}
              </div>
          
          <div className="hidden md:flex space-x-8 text-xl">
            <a href="#" className="hover:text-zinc-300">Home</a>
            <a href="#" className="hover:text-zinc-300">About</a>
            <a href="#" className="hover:text-zinc-300">Services</a>
            <a href="#" className="hover:text-zinc-300">Projects</a>
            <a href="#" className="hover:text-zinc-300">Pages</a>
            <a href="#" className="hover:text-zinc-300">Blog</a>
            <a href="#" className="hover:text-zinc-300">Contact</a>
            <button className="focus:outline-none">
              <CiSearch size={30}/>
            </button>
          </div>
          
          
          <div className="flex items-center space-x-4">
          
            <span className="hidden md:inline">1800-456-7890</span>
            <button className="focus:outline-none">
              <img src="https://placehold.co/24x24?text=📞" alt="WhatsApp Icon" />
            </button>
          </div>
            </div>
          </nav>
  )
}

export default Navbar
