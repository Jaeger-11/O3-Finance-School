import React, { useState, useEffect } from "react";

function PartnersCarousel({
  images,
  numImagesToShow = 5,
  slideInterval = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [images.length, slideInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='relative'>
      <button
        onClick={prevSlide}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white hover:bg-gray-700'
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white hover:bg-gray-700'
      >
        Next
      </button>
      <div className='mx-auto w-64 h-64 overflow-hidden relative'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`w-full h-full absolute transition-transform duration-300 transform ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : `translate-x-${(index - currentIndex) * 100}% opacity-0`
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;
