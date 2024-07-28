import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ArchitectCard = ({ image, name, title, description, social }) => {
  const socialIcons = {
    Facebook: <FaFacebookF />,
    Twitter: <FaTwitter />,
    LinkedIn: <FaLinkedinIn />,
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
        <p className="text-gray-700 text-base mt-2">{description}</p>
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
    </div>
  );
};

export default ArchitectCard;
