"use client";
import React, { useState } from "react";
import ReelCard from "./ReelCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Play } from "lucide-react";

const ReelCarousel = ({ slideData }) => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const handlePlayButtonClick = (index) => {
    setPlayingVideoIndex(index);
  };

  return (
    <div className="flex flex-row gap-8 justify-center">
      <Carousel className="w-full max-w-6xl">
        <CarouselContent className="-ml-5">
          {slideData.map((slide, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/4 lg:basis-1/4"
            >
              <div className="p-1">
                <div className="w-[252px] h-[418px] rounded-lg shadow-lg flex flex-row justify-center mx-auto ">
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
      </Carousel>
    </div>
  );
};

export default ReelCarousel;
