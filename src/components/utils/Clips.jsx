import React from "react";
import { FaPlay } from "react-icons/fa";

const Clips = ({ clip, imgsrc }) => {
  return (
    <>
      <div
        className="relative w-32 h-28 rounded-xl overflow-hidden group 
      cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14 "
      >
        <img
          src={imgsrc}
          alt=""
          className="inset-0 h-full w-full object-cover absolute top-0 left-0 right-0 
          rounded-xl opacity-100 z-10 transition-opacity duration-500"
        />
        <div
          className=" blur-effect-theme absolute top-11 left-11 lg:top-8 lg:left-9 
           sm:left:5 sm:top-4 right-0 opacity-100 
        z-[100] w-8 h-8 md:w-5 md:h-5 flex items-center justify-items-center rounded-full"
        >
          <FaPlay className="icon-style text-white md:w-3 md:h-3" />
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 right-0 flex h-full w-full object-cover
           opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
