import React, { useState, useEffect } from 'react';
import './Slider.css'; // Assuming you'll create this CSS file for styling

const ProductsSlider = ({ sliderImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div className="slider" style={{ height: '30vh', width: '50vh' , borderColor : "white"}}>
      {sliderImages.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.img})` }}
        ></div>
      ))}
    </div>
  );
};

export default ProductsSlider;
