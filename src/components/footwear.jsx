import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const ShoeCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "src/images/shoe1.png",
      alt: "Red Nike Shoe",
      category: "Sport Shoes",
      title: "NIKE D.01",
      description: "Experience unparalleled comfort and style with our latest NIKE D.01. Perfect for athletes and fashion enthusiasts alike."
    },
    {
      id: 2,
      image: "src/images/shoe2.png",
      alt: "Blue Nike Shoe",
      category: "Sport Shoes",
      title: "NIKE D.02",
      description: "Step into the future with NIKE D.02. Cutting-edge design meets superior performance for the modern athlete."
    },
    {
      id: 3,
      image: "src/images/shoe3.png",
      alt: "White Nike Shoe",
      category: "Sport Shoes",
      title: "NIKE D.03",
      description: "Elevate your game with NIKE D.03. Engineered for peak performance and designed for those who demand the best."
    }
  ];

  return (
    <div className="shoe-carousel-container h-screen bg-gradient-radial from-[#2b2e4f] to-[#111126] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        fadeEffect={{
          crossFade: true
        }}
        navigation={{
          nextEl: '.shoe-carousel-next',
          prevEl: '.shoe-carousel-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'shoe-carousel-bullet',
          bulletActiveClass: 'shoe-carousel-bullet-active',
        }}
        className="shoe-carousel-swiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full opacity-0 transition-opacity duration-300 ease-in-out shoe-carousel-slide">
            <div className="flex flex-col md:flex-row h-full items-center px-4 md:px-8 lg:px-16">
              <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
                <img src={slide.image} alt={slide.alt} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-start md:items-end gap-4 md:gap-6">
                <p className="font-medium text-lg md:text-xl">{slide.category}</p>
                <h2 className="font-['League_Gothic'] text-6xl md:text-8xl lg:text-9xl leading-none">{slide.title}</h2>
                <p className="text-sm md:text-base max-w-[400px] text-white/80 md:text-right">
                  {slide.description}
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="rounded-full bg-gradient-to-r from-[#81baa0] to-[#46a39c] px-6 py-2 uppercase font-['League_Gothic']">
                    Add To Cart
                  </button>
                  <button className="rounded-full border-2 border-transparent bg-[#242745] bg-clip-padding px-6 py-2 uppercase font-['League_Gothic']">
                    <FontAwesomeIcon icon={faPlay} className="mr-2" /> See More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="shoe-carousel-next swiper-button-next"></div>
      <div className="shoe-carousel-prev swiper-button-prev"></div>
    </div>
  );
};

export default ShoeCarousel;
