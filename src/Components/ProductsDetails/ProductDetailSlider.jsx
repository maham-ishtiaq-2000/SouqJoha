import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const carouselItems = [
  {
    id: 1,
    imageUrl: "https://souqjoha.com/wp-content/uploads/2019/12/26712190005-788x824.jpg",
    description: "Men's Sweater",
    val : 'EGP140.00 With VAT'
  },
  {
    id: 2,
    imageUrl: "https://souqjoha.com/wp-content/uploads/2019/09/1914.jpg",
    description: "Men's Red Sweater",
    val : 'EGP140.00 With VAT'
  },
];

const ProductDetailSlider = () => {
  const validPercentage = Math.min(200, 200);
  const [current, setCurrent] = useState(0);
  const length = carouselItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="flex flex-col items-center justify-center w-3/4 border border-2 mt-5 border-black p-5">
      <div className="flex justify-between items-center w-full max-w-md mb-2">
        <button className="z-10 text-purple p-2">Day Offer</button>
        <div>
           <button onClick={prevSlide} className="z-10 border border-gray-500 text-gray-500 p-2 mr-3"><FaArrowLeft /></button>
           <button onClick={nextSlide} className="z-10 border border-gray-500 text-gray-500 p-2"><FaArrowRight /></button>
        </div>
      </div>
      <div className="w-full border-t border-gray-500 mb-7"></div>
      {carouselItems.map((slide, index) => (
        <div className={`w-full h-auto max-w-md ${index === current ? 'block' : 'hidden'}`} key={slide.id}>
          {index === current && (
            <div className="flex flex-col items-start">
              <img src={slide.imageUrl} alt={slide.title} className="w-64 h-64 object-cover" style={{"marginLeft" : "45px"}}/> {/* Adjusted height */}
              <button className="mt-4 py-2 text-black text-1xl font-semibold">{slide.description}</button>
              <button className="mt-4 py-2 text-purple text-2xl font-semibold">{slide.val}</button>
              <div className="flex justify-between w-full">
                    <button className="py-2 text-black text-sm">Already Sold: <span className='font-semibold'>10</span></button>
                    <button className="py-2 text-black text-sm">Available: <span className='font-semibold'>20</span></button>
              </div>
              <div className="relative w-full bg-lightPurple h-6 mt-2 mb-3">
                <div
                    className="bg-purple-600 h-6"
                    style={{ width: `${validPercentage}%` }}
                ></div>
                <span className="absolute right-2 top-0 flex items-center h-full text-sm font-semibold text-white">
                    {validPercentage}%
                </span>
                </div>
              <button className="mt-4 py-2 text-gray-500 text-sm">Hurry Up! Offer End Soon.</button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductDetailSlider;
