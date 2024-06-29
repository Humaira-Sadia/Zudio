import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export const beauty = () => {
    return (
        <div class="beauty w-full h-screen">
            <h1 class="text-2xl font-bold mb-4">Beauty products</h1>
            <div class="swiper mySwiper w-full h-full" id="swpi">
                <div class="swiper-wrapper">
                    <div class="swiper-slide text-center text-lg flex justify-center items-center">
                        <img src="src\images\beautypr1.jpg" alt="Beauty Product 1" class="w-[90%] h-full object-contain" />
                    </div>
                    <div class="swiper-slide text-center text-lg flex justify-center items-center">
                        <img src="src\images\beautypr2.jpg" alt="Beauty Product 2" class="w-[90%] h-full object-contain" />
                    </div>
                    <div class="swiper-slide text-center text-lg flex justify-center items-center">
                        <img src="src\images\beautypr3.jpg" alt="Beauty Product 3" class="w-full h-full object-contain" />
                    </div>
                    <div class="swiper-slide text-center text-lg flex justify-center items-center">
                        <img src="src\images\beautypr4.jpg" alt="Beauty Product 4" class="w-full h-full object-contain" />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    )
}

export default beauty
