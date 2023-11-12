import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaClock, FaHashtag, FaHeart } from "react-icons/fa";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="nike-container mb-11 ">
      <Title title={title} />
      <div className="mt-10">
        <Splide options={splideOptions}>
          {news.map((val, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <div
                className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200
               ring-1 ring-slate-200"
              >
                <div className="flex items-center justify-items-center">
                  <img
                    src={val.img}
                    alt=""
                    className="w-full h-auto object-cover shadow-md shadow-sky-200
                  rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-0.5">
                    <FaHeart className="icon-style text-red-500 w-5 h-5" />
                    <span>{val.like}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <FaClock className="icon-style text-black w-5 h-5" />
                    <span className="text-xs font-bold">{val.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <FaHashtag className="icon-style text-blue-600 w-5 h-5" />
                    <span className="text-blue-600 text-xs font-bold">
                      {val.by}
                    </span>
                  </div>
                </div>
                <div className="grid items-center justify-items-start px-4">
                  <h3 className="text-base font-semibold lg:text-sm">
                    {val.title}
                  </h3>
                  <p className="text-sm text-justify lg:text-xs">{val.text}</p>
                </div>
                <div className="flex justify-items-center items-center w-full px-4">
                  <a
                    href={val.url}
                    className="w-full bg-slate-900 bg-gradient-to-b from-slate-900 to-black
                  shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                  >
                    {val.btn}
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
