import React from 'react';
import ArchitectCard from '../components/ArchitectCard';

const architects = [
  {
    image: 'https://via.placeholder.com/400x300',
    name: 'John Doe',
    title: 'Chief Architect',
    description: 'John has over 20 years of experience in the field of architecture.',
    social: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe' },
      { platform: 'Twitter', url: 'https://twitter.com/johndoe' },
    ],
  },
  {
    image: 'https://via.placeholder.com/400x300',
    name: 'Jane Smith',
    title: 'Senior Architect',
    description: 'Jane specializes in sustainable architecture and design.',
    social: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/janesmith' },
      { platform: 'Instagram', url: 'https://instagram.com/janesmith' },
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
