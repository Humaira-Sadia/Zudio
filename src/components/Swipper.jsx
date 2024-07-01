import React, { useState, useEffect } from "react";
import { banner } from "./constants";
import Slidder from "./Slidder";

const Swipper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banner.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change autoplay delay here (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banner.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banner.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel mt-[50px] h-screen overflow-hidden relative">
      <div className="list">
        {banner.map((item, index) => (
          <div
            key={index}
            className={`item absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt="banner"
              className="h-full w-full object-cover"
            />
            <div className="content bg-[#eee3] backdrop-blur-sm rounded-2xl absolute top-[10%] pr-[30%] w-[80%] md:w-[60%] h-96 sm:w-[550px] box-border text-white left-1/2 -translate-x-2/4 p-5 flex flex-col justify-center">
              <div className="author font-bold tracking-widest text-6xl md:text-8xl  font-dancing">
                {item.author}
              </div>
              <div className="title font-bold text-orange-500 text-5xl md:text-8xl">
                {item.title}
              </div>
              <div className="topic font-bold text-xl"></div>
              {/* <div className="desc">{item.desc}</div> */}
              <button
                className="bg-white text-orange-500 text-md w-32 font-semibold p-2 mt-8 rounded-md transition-all duration-200 transform hover:bg-orange-500 hover:text-white hover:scale-105"
                onClick={() => alert("Working")}
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnail synchronized swiper */}
      <Slidder currentIndex={currentIndex} />

      {/* arrows */}
      <div className="arrows absolute top-[80%] right-[52%] w-[30%] sm:w-[300px] flex gap-10 items-center">
        <button
          onClick={handlePrev}
          className="w-[40px] h-[40px] rounded-[50%] text-white font-bold texl-xl bg-[#eee4] hover:bg-[#555] hover:transition-all duration-500"
          id="prev"
        >
          {" "}
          ᐊ{" "}
        </button>
        <button
          onClick={handleNext}
          className="w-[40px] h-[40px] rounded-[50%] text-white font-bold texl-xl bg-[#eee4] hover:bg-[#555] hover:transition-all duration-500"
          id="next"
        >
          {" "}
          ᐅ{" "}
        </button>
      </div>
    </div>
  );
};

export default Swipper;
