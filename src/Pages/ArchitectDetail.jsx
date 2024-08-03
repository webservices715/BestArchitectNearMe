import React from 'react';
import { useLocation } from 'react-router-dom';
import BookAppointment from '../components/BookAppointment';
import ImageGallery from '../components/ImageGallery';
import OverView from '../components/OverView';
import ProfileInfo from '../components/ProfileInfo';

function ArchitectDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const image = searchParams.get('image');
  const name = searchParams.get('name');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const rating = parseFloat(searchParams.get('rating')) || 0;
  const address = searchParams.get('address');
  const phone = searchParams.get('phone');
  const social = JSON.parse(searchParams.get('social') || '[]');

  console.log("Parsed params:", {
    image, name, title, description, rating, address, phone, social
  });

  return (
    <div className="flex flex-col py-32 px-1">
      {/* Gallery */}
      <ImageGallery />
      <ProfileInfo/>
      <OverView/>

  </div>
  );
}

export default ArchitectDetail;
