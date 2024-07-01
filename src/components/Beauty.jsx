
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { beautySlides as slides } from './constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Beauty = () => {
    console.log('Beauty component rendering');

    return (
        <div className="beauty w-full">
            <h1 className="text-6xl font-bold font-dancing p-3 mb-4">Beauty Products</h1>
            <div className="w-full h-[calc(60vh-5rem)]"> {/* Container for Swiper */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    direction={'vertical'}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    className="w-full h-full sm:h-full" // Full width and height
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center text-center text-lg">
                            <img
                                src={slide.img}
                                alt={`Beauty Product ${index + 1}`}
                                className="block w-full h-full object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Beauty;