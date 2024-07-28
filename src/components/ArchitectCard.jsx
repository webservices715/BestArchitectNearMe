import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaStar, FaRegStar, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ArchitectCard = ({ image, name, title, description, rating, address, phone, social }) => {
  const socialIcons = {
    Facebook: <FaFacebookF />,
    Twitter: <FaTwitter />,
    LinkedIn: <FaLinkedinIn />,
  };

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-200">
      <div className="relative h-48">
        <img className="w-full h-full object-cover rounded-t-2xl" src={image} alt={`${name}'s image`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white text-lg font-bold">{name}</h3>
          <p className="text-gray-300">{title}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          {renderRating(rating)}
        </div>
        <p className="text-gray-700 text-base mt-2">{description}</p>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <FaMapMarkerAlt className="mr-2" />
          {address}
        </div>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <FaPhoneAlt className="mr-2" />
          {phone}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-wrap">
        {social.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialIcons[link.platform]}
            <span className="ml-2">{link.platform}</span>
          </a>
        ))}
      </div>
      <div className="px-6 py-4 flex justify-center">
        <button className="bg-green-500 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center">
          <FaWhatsapp className="mr-2" />
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default ArchitectCard;