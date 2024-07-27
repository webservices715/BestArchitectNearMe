import React from 'react'

function Subscribe() {
  return (
    <div className="container  bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
    <h2 className="font-bold break-normal text-2xl py-2 md:text-5xl">
      Subscribe to Ghostwind CSS
    </h2>
    <h3 className="font-bold break-normal text-gray-600 text-base md:text-xl">
      Get the latest posts delivered right to your inbox
    </h3>
    <div className="w-full text-center pt-4">
      <form action="#">
        <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
          <input
            type="email"
            placeholder="youremail@example.com"
            className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
          />
          <button
            type="submit"
            className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-3 rounded shadow hover:bg-green-400"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Subscribe
