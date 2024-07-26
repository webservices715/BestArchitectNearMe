import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogSection() {
  return (
    <section className="py-24 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-barlow">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">Our latest  blog</h2>
      <p className='text-xl text-gray-500 text-center mb-16'>We&apos;re constantly trying to express ourselves and actualize our
        dreams. If you have the opportunity to play this game of life you need
        to appreciate every moment.</p>
      <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
         <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
          <div className="flex items-center">
              <img src="https://pagedone.io/asset/uploads/1696244317.png" alt="blogs tailwind section" className="rounded-t-2xl w-full" />
          </div>
          <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
              <span className="text-red-600 font-medium mb-3 block">Jan 01, 2023</span>
              <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">Clever ways to invest in product to organize your portfolio</h4>
              <p className="text-gray-500 leading-6 mb-10">Discover smart investment strategies to streamline and organize your portfolio..</p>
              <a href="javascript:;" className="cursor-pointer text-lg text-red-600 font-semibold">Read more..</a>
          </div>
         </div>
         <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
          <div className="flex items-center">
              <img src="https://pagedone.io/asset/uploads/1696244340.png" alt="blogs tailwind section" className="rounded-t-2xl w-full" />
          </div>
          <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
              <span className="text-red-600 font-medium mb-3 block">Feb 01, 2023</span>
              <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">How to grow your profit through systematic investment with us</h4>
              <p className="text-gray-500 leading-6 mb-10">Unlock the power of systematic investment with us and watch your profits soar. Our..</p>
              <a href="javascript:;" className="cursor-pointer text-lg text-red-600 font-semibold">Read more..</a>
          </div>
         </div>
         <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
          <div className="flex items-center">
              <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section" className="rounded-t-2xl w-full" />
          </div>
          <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
              <span className="text-red-600 font-medium mb-3 block">Mar 01, 20233</span>
              <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">How to analyze every holdings of your portfolio</h4>
              <p className="text-gray-500 leading-6 mb-10">Our comprehensive guide will equip you with the tools and insights needed to..</p>
              <a href="javascript:;" className="cursor-pointer text-lg text-red-600 font-semibold">Read more..</a>
          </div>
         </div>
      </div>
    </div>
    <NavLink
                to="/blogs" className="cursor-pointer border border-red-400 shadow-sm rounded-full py-3.5 px-7 mt-12 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-500 ease-in-out hover:text-white hover:bg-red-500">View All</NavLink>
</section>
                                        
  )
}

export default BlogSection
