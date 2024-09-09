import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    "src/assets/nurse1.png",
    "src/assets/nurse2.png",
    "src/assets/nurse3.png",
    "src/assets/nurse4.png",
    "src/assets/nurse5.png",
    "src/assets/nurse6.png",
    "src/assets/nurse7.png",
    "src/assets/nurse8.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative h-72 sm:h-120 w-full max-w-2xl mx-auto overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover sm:object-contain"
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
