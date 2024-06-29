import React from "react";
import Swipper from "./Swipper";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex justify-center items-center  tracking-widest font-bold font-subHeading opacity-10">
        ZUDIO
      </div>
      <div className="relative z-10">
        <Swipper />
      </div>
    </div>
  );
};

export default Hero;
