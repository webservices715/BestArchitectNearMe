import React, { useState } from 'react';

const images = [
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
  }
];

const ImageGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const largeImage = images[0];
  const initialSmallImages = images.slice(1, 5); // First 4 images
  const extraSmallImages = images.slice(5); // Remaining images

  return (
    <div className="container mx-auto md:px-32 px-2">
      <div className="flex flex-wrap -m-2">
        {/* Large image on the left */}
        <div className="w-full md:w-1/2 p-2 relative">
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              alt="Large"
              className="block w-full h-80 object-cover object-center transition-transform duration-300 hover:scale-105"
              src={largeImage.src}
            />
          </div>
        </div>

        {/* Grid of smaller images on the right */}
        <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-4">
          {initialSmallImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="Small"
                className="block w-full h-40 object-cover object-center transition-transform duration-300 hover:scale-105"
                src={image.src}
              />
            </div>
          ))}

          {/* Expandable panel for extra images */}
          {showAll && extraSmallImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="Extra"
                className="block w-full h-40 object-cover object-center transition-transform duration-300 hover:scale-105"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Expandable section with arrow icon */}
      {extraSmallImages.length > 0 && (
        <div className="relative mt-4">
          <div
            onClick={() => setShowAll(!showAll)}
            className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white cursor-pointer transition-opacity duration-300"
            style={{ opacity: 1 }}
          >
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={showAll ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
