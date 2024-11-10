"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Carousel = () => {
  const slides = [
    '/products/slider 1.jpg',  
    '/products/slider 2.jpg',  
    '/products/slider 3.jpg',  
    '/products/slider 4.jpg',
    '/products/image 3.jpg',
    '/products/image 4.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
   
    <div className="relative w-[500px] mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 66.66}%)` }} // Adjust to show part of the next image
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-[300px] h-[400px] flex-shrink-0 transition-transform duration-700 ease-in-out 
              ${currentSlide === index ? 'scale-110 z-10' : 'scale-90'} 
              ${index === currentSlide + 1 ? 'opacity-100' : 'opacity-80'}`} // Active image scaled, next is half visible
              style={{ marginRight: index === currentSlide ? '20px' : '0px' }} // Adjust space between active and next
            >
              <Image
                src={slide}
                alt={`Slide ${index}`}
                width={300}
                height={400}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left and Right navigation */}
    <button
      onClick={handlePrev}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-20"
>
    <ChevronLeftIcon className="w-6 h-6" />
    </button>
    <button
      onClick={handleNext}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-20"
>
      <ChevronRightIcon className="w-6 h-6" />
    </button>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
    
  );
};

export default Carousel;