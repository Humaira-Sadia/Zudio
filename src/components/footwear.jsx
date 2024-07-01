import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { footware as slides } from "./constants";

const ShoeCarousel = () => {
  

  useEffect(() => {
    console.log("ShoeCarousel mounted");
  }, []);

  return (
    <div className="relative h-screen bg-gradient-radial from-[#2b2e4f] to-[#111126] overflow-hidden">
      {console.log("Rendering ShoeCarousel")}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="h-full"
        onInit={(swiper) => console.log("Swiper initialized", swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            {console.log("Rendering slide", slide.id)}
            <div className="flex flex-col md:flex-row h-full items-center px-4 md:px-12 lg:px-24">
              <div className="w-full md:w-3/5 h-1/2 md:h-full flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="max-w-full max-h-full object-contain scale-100 sm:scale-125"
                />
              </div>
              <div className="w-full md:w-2/5 h-1/2 md:h-full flex flex-col justify-center items-start md:items-end gap-6 md:gap-8 md:pr-8">
                <p className="font-medium text-xl md:text-2xl">
                  {slide.category}
                </p>
                <h2 className="font-['League_Gothic'] text-5xl md:text-7xl lg:text-[10rem] leading-none  -mt-8 sm:mt-0">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg max-w-[450px] text-white/80 md:text-right -mt-5 sm:mt-0">
                  {slide.description}
                </p>
                <div className="flex flex-row gap-4 md:gap-6">
                  <button className="rounded-full bg-gradient-to-r from-[#81baa0] to-[#46a39c] px-6 sm:px-8 py-3 text-lg uppercase font-['League_Gothic']">
                    Add To Cart
                  </button>
                  <button className="rounded-full border-2 border-transparent bg-[#242745] bg-clip-padding px-6 sm:px-8 py-3 text-lg uppercase font-['League_Gothic']">
                    <FontAwesomeIcon icon={faPlay} className="mr-3" /> See More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShoeCarousel;
