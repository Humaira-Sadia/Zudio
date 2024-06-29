import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Autoplay } from "swiper/modules";
import { banner } from "./constants";

const Slidder = ({ currentIndex }) => {
  return (
    <Swiper
      key={currentIndex} // Force re-render on currentIndex change
      // effect={"fade"}
      grabCursor={true}
      loop={true}
      initialSlide={currentIndex + 1} // Adjusted initialSlide
      slidesPerView={3}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
      className="swiper top-[55%] w-[60%] lg:w-[40%] left-[20%] lg:left-[28%] bg-[#eee2] rounded-2xl sm:block hidden"
    >
      {banner.map((slide, index) => (
        <SwiperSlide
          key={index} // Updated key to use index
          className="w-[20rem] h-auto flex justify-center items-center"
        >
          <img
            src={slide.image}
            alt={`Model ${index}`} // Updated alt text
            className="slide-img h-[11rem] w-[8rem] lg:h-[16rem] lg:w-[12rem] object-cover rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slidder;
