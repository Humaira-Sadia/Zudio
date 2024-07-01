import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { mens as slides } from "./constants";

const Mens = () => {
  return (
    <div className="men w-full h-fit flex flex-col text-center">
      <div className="banner w-full h-3/5">
        <h1 className="text-6xl p-3 font-bold mb-4 font-dancing">Mens Clothing</h1>
        <img
          src="src/images/banner_land.jpg"
          alt="men collection banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="swiper-container mySwiper w-full h-2/5 relative overflow-hidden pr-[1.875rem] pt-[1.875rem] pb-[3.75rem] top-[20%] mx-auto">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          loop={true}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ el: ".swiper-pagination" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="text-center flex justify-center items-center bg-center bg-cover sm:w-[40rem] h-full sm:h-[25rem]"
            >
              <img
                src={slide}
                alt={`men image ${index + 1}`}
                className="block w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Mens;
