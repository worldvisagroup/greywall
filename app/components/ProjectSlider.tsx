"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface ProjectSliderProps {
  title: string;
  imageOne?: string;
  imageTwo?: string;
  imageThree?: string;
  imageFour?: string;
  imageFive?: string;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  title,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const images = [imageOne, imageTwo, imageThree, imageFour, imageFive].filter(Boolean);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mb-40">
      <h2 className="text-4xl my-8 font-playfair">{title}</h2>
      
      {/* Embla carousel container */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((imgSrc, index) => (
            <div
              className="embla__slide flex-[0_0_calc(100%-2rem)] md:flex-[0_0_calc(90%-2rem)] lg:flex-[0_0_calc(80%-2rem)] relative p-2 mr-8"
              key={index}
            >
              <div className="w-full h-96 overflow-hidden rounded-lg">
                <Image
                  src={imgSrc}
                  alt={`Project Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute -bottom-20 left-0 flex gap-4">
        <button
          className={`bg-[#FFEDE6] text-[#333333] rounded-full p-3 ${!canScrollPrev ? 'opacity-50' : ''}`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ArrowBackIos />
        </button>
        <button
          className={`bg-[#FFEDE6] text-[#333333] rounded-full p-3 ${!canScrollNext ? 'opacity-50' : ''}`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ArrowForwardIos />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              selectedIndex === index
                ? 'bg-[#ffff] border-[#000000]'
                : 'bg-transparent border-gray-300 hover:border-[#333333]'
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
