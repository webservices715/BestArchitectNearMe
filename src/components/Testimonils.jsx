import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const testimonials = [
  {
    name: 'Jane D',
    role: 'CEO',
    image: 'https://pagedone.io/asset/uploads/1696229969.png',
    feedback: 'The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.',
    stars: 5,
  },
  {
    name: 'Harsh P.',
    role: 'Product Designer',
    image: 'https://pagedone.io/asset/uploads/1696229994.png',
    feedback: 'The features offered by pagedone have greatly improved my productivity and workflow.',
    stars: 5,
  },
  // Add more testimonials as needed
];

const Testimonils = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-24 font-barlow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5">
            <span className="text-sm text-gray-500 font-medium mb-4 block">Testimonial</span>
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
              23k+ Customers gave their{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
                Feedback
              </span>
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-10">
              <button
                onClick={prevSlide}
                className="group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
              >
                <FaArrowLeft className="h-6 w-6 text-indigo-600 group-hover:text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
              >
                <FaArrowRight className="h-6 w-6 text-indigo-600 group-hover:text-white" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5 relative">
            <div className="overflow-hidden relative h-72">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full top-0 left-0 transition-transform duration-700 ease-in-out transform ${
                    index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                  }`}
                  style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                >
                  <div className="bg-white border border-solid border-gray-300 rounded-2xl mx-2 max-sm:max-w-sm max-sm:mx-auto p-5">
                    <div className="flex items-center gap-5 mb-5 sm:mb-9">
                      <img className="rounded-full" src={testimonial.image} alt="avatar" />
                      <div className="grid gap-1">
                        <h5 className="text-gray-900 font-medium">{testimonial.name}</h5>
                        <span className="text-sm leading-6 text-gray-500">{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500">
                      {[...Array(testimonial.stars)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 leading-6 min-h-24">{testimonial.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonils;
