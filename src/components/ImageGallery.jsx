import React, { useState, useEffect } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div id="custom-controls-gallery" className="relative w-full max-w-screen-lg mx-auto">
      {/* Carousel wrapper */}
      <div className="relative h-64 overflow-hidden rounded-lg md:h-[32rem]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute  inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center">
        <button
          type="button"
          className="flex justify-center items-center p-2 cursor-pointer group focus:outline-none bg-white rounded-full shadow-lg"
          onClick={prevSlide}
        >
          <MdArrowBack className="w-6 h-6 text-gray-600 hover:text-gray-900" />
          <span className="sr-only">Previous</span>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center">
        <button
          type="button"
          className="flex justify-center items-center p-2 cursor-pointer group focus:outline-none bg-white rounded-full shadow-lg"
          onClick={nextSlide}
        >
          <MdArrowForward className="w-6 h-6 text-gray-600 hover:text-gray-900" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
