import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const images = [
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
    city: "London",
    landmark: "Big Ben",
    rating: 4.5
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    city: "Rome",
    landmark: "Colosseum",
    rating: 4.7
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    city: "Pisa",
    landmark: "Pisa Tower",
    rating: 4.3
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    city: "Paris",
    landmark: "Eiffel Tower",
    rating: 5.0
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    city: "New York",
    landmark: "Statue of Liberty",
    rating: 4.8
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    city: "Sydney",
    landmark: "Sydney Opera House",
    rating: 5.0
  }
];

const ImageGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const largeImage = images[0];
  const initialSmallImages = images.slice(1, 4); // First 3 images
  const extraSmallImages = images.slice(4); // Remaining images

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="flex flex-wrap -m-2">
        {/* Large image on the left */}
        <div className="w-full md:w-1/2 p-2 relative">
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              alt={`${largeImage.city} ${largeImage.landmark}`}
              className="block w-full h-80 object-cover object-center transition-transform duration-300 hover:scale-105"
              src={largeImage.src}
            />
            <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 text-sm font-bold shadow-md flex items-center">
              <FaStar className="text-yellow-500 mr-1" /> {largeImage.rating}
            </div>
            <div className="absolute bottom-2 left-2 text-white">
              <h2 className="text-lg font-bold">{largeImage.city}</h2>
              <p className="text-sm">{largeImage.landmark}</p>
            </div>
          </div>
        </div>

        {/* Grid of smaller images on the right */}
        <div className={`w-full md:w-1/2 p-2 grid ${showAll ? 'grid-cols-2 gap-4' : 'grid-cols-2 gap-4 md:grid-cols-1 md:gap-2'}`}>
          {initialSmallImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt={`${image.city} ${image.landmark}`}
                className="block w-full h-32 object-cover object-center transition-transform duration-300 hover:scale-105"
                src={image.src}
              />
              <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 text-xs font-bold shadow-md flex items-center">
                <FaStar className="text-yellow-500 mr-1" /> {image.rating}
              </div>
              <div className="absolute bottom-2 left-2 text-white">
                <h2 className="text-sm font-bold">{image.city}</h2>
                <p className="text-xs">{image.landmark}</p>
              </div>
            </div>
          ))}

          {/* Expandable panel for extra images */}
          {showAll && extraSmallImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt={`${image.city} ${image.landmark}`}
                className="block w-full h-32 object-cover object-center transition-transform duration-300 hover:scale-105"
                src={image.src}
              />
              <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 text-xs font-bold shadow-md flex items-center">
                <FaStar className="text-yellow-500 mr-1" /> {image.rating}
              </div>
              <div className="absolute bottom-2 left-2 text-white">
                <h2 className="text-sm font-bold">{image.city}</h2>
                <p className="text-xs">{image.landmark}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable section with button */}
      <div className="relative mt-4 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-black bg-opacity-50 text-white py-2 px-4 rounded-full transition-opacity duration-300 hover:bg-opacity-75 focus:outline-none"
        >
          {showAll ? 'Show Less' : 'Show More'}
          
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
