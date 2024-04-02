import React, { useState, useEffect } from 'react';
import './AutoPlayCarousel.css';



const AutoPlayCarousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default AutoPlayCarousel;
