import React from 'react';
import ArchitectCard from '../components/ArchitectCard';

const architects = [
  {
    image: "https://via.placeholder.com/400x300",
    name: "John Doe",
    title: "Lead Architect",
    description: "John is a visionary architect with over 20 years of experience in sustainable design.",
    rating: 4,
    address: "123 Main St, Springfield, IL",
    phone: "(123) 456-7890",
    social: [
      { platform: "Facebook", url: "https://facebook.com" },
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    image: "https://via.placeholder.com/400x300",
    name: "John Doe",
    title: "Lead Architect",
    description: "John is a visionary architect with over 20 years of experience in sustainable design.",
    rating: 4,
    address: "123 Main St, Springfield, IL",
    phone: "(123) 456-7890",
    social: [
      { platform: "Facebook", url: "https://facebook.com" },
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
];

const Architects = () => {
  return (
    <div className="container mx-auto px-4 py-[10rem] mt-6">
      <div className="flex items-center gap-2">
        {architects.map((architect) => (
          <ArchitectCard key={architect.name} {...architect} />
        ))}
      </div>
    </div>
  );
};

export default Architects;
