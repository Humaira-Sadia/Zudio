import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Womens = () => {
  const slides = [
    "src/images/women (1).svg",
    "src/images/women.svg",
    "src/images/women2.svg",
    "src/images/women3.svg",
    "src/images/women4.svg",
    "src/images/women5.svg",
    "src/images/women6.svg",
    "src/images/women7.svg",
    "src/images/women8.svg",
    "src/images/women9.svg"
  ];

  return (
    <div className="women w-full h-fit box-border bg-[white] shadow-[0px_4px_6px_rgba(0,0,0,0.1)] mt-5 p-5">
      <h1 className="text-2xl font-bold mb-4">Women's Clothing</h1>
      <div className="banner text-[white] w-full text-center mb-5 px-5 py-[60px]">
        <img src="src/images/banner3.jpg" alt="" className="w-full h-full object-fill mb-5" />
      </div>
      <div className="clothing-container object-fill flex overflow-x-auto px-0 py-2.5">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="clothing-item scroll-smooth min-w-[300px] h-[400px] bg-white box-border border shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-[0.3s,box-shadow] delay-[0.3s] text-center mx-4 my-0 p-6 rounded-[8px] border-solid border-[#ddd] hover:translate-y-[-5px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] mt-2.5 mb-0"
          >
            <img 
              src={slide} 
              alt={`Clothing Item ${index + 1}`} 
              className="text-center w-full h-[300px] object-cover mb-4 rounded-[5px]" 
            />
            <p className="font-semibold text-lg mb-0 mx-0 my-2.5">Item {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Womens;