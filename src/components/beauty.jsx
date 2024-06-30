// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// export const beauty = () => {
//     return (
//         <div class="beauty w-full h-screen">
//             <h1 class="text-2xl font-bold mb-4">Beauty products</h1>
//             <div class="swiper mySwiper w-full h-full" id="swpi">
//                 <div class="swiper-wrapper">
//                     <div class="swiper-slide text-center text-lg flex justify-center items-center">
//                         <img src="src\images\beautypr1.jpg" alt="Beauty Product 1" class="w-[90%] h-full object-contain" />
//                     </div>
//                     <div class="swiper-slide text-center text-lg flex justify-center items-center">
//                         <img src="src\images\beautypr2.jpg" alt="Beauty Product 2" class="w-[90%] h-full object-contain" />
//                     </div>
//                     <div class="swiper-slide text-center text-lg flex justify-center items-center">
//                         <img src="src\images\beautypr3.jpg" alt="Beauty Product 3" class="w-full h-full object-contain" />
//                     </div>
//                     <div class="swiper-slide text-center text-lg flex justify-center items-center">
//                         <img src="src\images\beautypr4.jpg" alt="Beauty Product 4" class="w-full h-full object-contain" />
//                     </div>
//                 </div>
//                 <div class="swiper-pagination"></div>
//             </div>
//         </div>
//     )
// }

// export default beauty
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Beauty = () => {
  console.log('Beauty component rendering');

  const slides = [
    "src/images/beautypr1.jpg",
    "src/images/beautypr2.jpg",
    "src/images/beautypr3.jpg",
    "src/images/beautypr4.jpg",
  ];

  return (
    <div className="beauty w-full h-screen">
      <h1 className="text-2xl font-bold mb-4">Beauty Products</h1>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img 
              src={slide} 
              alt={`Beauty Product ${index + 1}`} 
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Beauty;
