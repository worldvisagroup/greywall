"use client";
import React, { useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
import Image from "next/image";
import { Play } from "lucide-react";

const ReelCarousel = ({ slideData }) => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const handlePlayButtonClick = (index) => {
    setPlayingVideoIndex(index);
  };

  return (
    <div className="flex sm:flex-row flex-col justify-center  w-full">
      <div className=" w-full mx-auto">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slideData.map((slide, index) => (
            <div key={index} className="p-4 sm:p-0">
              <div className="sm:w-[300px] w-full sm:h-[418px] rounded-lg shadow-lg flex flex-row justify-center mx-auto">
                {playingVideoIndex === index ? (
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    src={slide.reelUrl}
                    controls={false}
                    muted
                    autoPlay
                  />
                ) : (
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={slide.coverImage}
                      alt="CoverImage"
                      width={1000}
                      height={1000}
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                    <div className="absolute bottom-[90%] left-16 transform -translate-x-14  bg-white/75 text-black px-4 py-2 font-medium h-6 flex justify-start items-center rounded-full text-center text-xs">
                      {slide.title}
                    </div>
                    <div className="absolute sm:bottom-[83%] bottom-[85%] left-12 transform -translate-x-1/2 bg-white/75 text-black px-4 py-2 font-medium h-6 flex justify-center items-center rounded-full text-center text-xs">
                      {slide.sqft ? slide.sqft : "1500"} sqft
                    </div>
                    <button
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={() => handlePlayButtonClick(index)}
                    >
                      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white/85">
                        <Play className="text-black" />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Carousel className="w-full mx-auto md:hidden">
        <CarouselContent className="mt-10">
          {slideData.map((slide, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/3 lg:basis-1/4 -ml-1"
            >
              <div className="p-1">
                <div className="w-[252px] h-[418px] rounded-lg shadow-lg flex flex-row justify-center mx-auto">
                  {playingVideoIndex === index ? (
                    <video
                      className="w-full h-full object-cover"
                      src={slide.reelUrl}
                      controls={false}
                      muted
                      autoPlay
                    />
                  ) : (
                    <div className="relative overflow-hidden">
                      <Image
                        src={slide.coverImage}
                        alt="CoverImage"
                        width={500}
                        height={500}
                        className="object-fill"
                      />
                      <button
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={() => handlePlayButtonClick(index)}
                      >
                        <Play className="text-white" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-2 md:hidden">
          {slideData.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                playingVideoIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel> */}
    </div>
  );
};

export default ReelCarousel;
