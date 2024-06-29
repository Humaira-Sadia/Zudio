import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export const mens = () => {
  return (
    <div class="men w-full h-fit flex flex-col flex-wrap text-center">
            <div class="banner w-full h-3/5 object-cover">
                <h1 class="text-2xl font-bold mb-4">Mens Clothing</h1>
                <img src="src\images\banner1.jpg" alt="men collection banner" class="w-full h-full object-fill object-center" />
            </div>
            <div
                class="swiper mySwiper w-full h-2/5 relative overflow-hidden pr-[1.875rem] pt-[1.875rem] pb-[3.75rem] top-[20%] mx-auto">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men1.avif" alt="men image 1" class="block w-full h-full object-cover" />
                    </div>
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men2.avif" alt="men image 2" class="block w-full h-full object-cover" />
                    </div>
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men3.avif" alt="men image 3" class="block w-full h-full object-cover" />
                    </div>
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men4.avif" alt="men image 4" class="block w-full h-full object-cover" />
                    </div>
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men5.avif" alt="men image 5" class="block w-full h-full object-cover" />
                    </div>
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men6.avif" alt="men image 6" class="block w-full h-full object-cover" />
                    </div>
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men7.avif" alt="men image 7" class="block w-full h-full object-cover" />
                    </div>
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men8.avif" alt="men image 8" class="block w-full h-full object-cover" />
                    </div>
                    <div
                        class="swiper-slide text-center text-lg flex justify-center items-center bg-center bg-cover w-[40rem] h-[25rem]">
                        <img src="src\images\men9.avif" alt="men image 9" class="block w-full h-full object-cover" />
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
  )
}
export default mens