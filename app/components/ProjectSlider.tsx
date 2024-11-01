"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  ArrowBackIos,
  ArrowForwardIos,
  PlayCircleFilled,
} from "@mui/icons-material";

interface ProjectSliderProps {
  title: string;
  imageOne?: string;
  imageTwo?: string;
  imageThree?: string;
  imageFour?: string;
  imageFive?: string;
  location?: string;
  // Start Generation Here
  imageSix?: string;
  inProgress?: boolean;
  videoOne?: string;
  videoTwo?: string;
  videoThree?: string;
  videoFour?: string;
}

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  title,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  location,
  inProgress,
  videoOne,
  videoTwo,
  videoThree,
  videoFour,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // Function to open zoomed image
  const openZoomedImage = (imageUrl) => {
    setZoomedImage(imageUrl);
  };
  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
  ].filter(Boolean);

  const isVideo = videoOne || videoTwo || videoThree || videoFour;
  const videos = [];

  if (videoOne) {
    videos.push(videoOne);
  }

  if (videoTwo) {
    videos.push(videoTwo);
  }
  if (videoThree) {
    videos.push(videoThree);
  }
  if (videoFour) {
    videos.push(videoFour);
  }

  const allDots = isVideo ? [...images, ...videos] : images;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    setIsVideoPlaying(false);
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    setIsVideoPlaying(false);
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (emblaApi) {
      setTweenFactor(emblaApi);
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect, tweenOpacity]);

  return (
    <div className="relative mb-40">
      <h2 className="text-[50px] lg:text-[55px] tracking-wider leading-[60px] sm:leading-[82px] mt-8 mb-4 font-northwell">
        {title}
        {inProgress ? <span> (Under Development)</span> : <></>}
      </h2>
      <p className="text-lg mb-8">{location}</p>
      {/* Embla carousel container */}
      <div className="embla overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((imgSrc, index) => (
              <div
                className="embla__slide flex-[0_0_calc(100%-2rem)] md:flex-[0_0_calc(90%-2rem)] lg:flex-[0_0_calc(80%-2rem)] relative p-2 mr-8"
                key={index}
              >
                <div
                  className="w-full h-96 overflow-hidden rounded-lg"
                  onClick={() => openZoomedImage(imgSrc)}
                >
                  <Image
                    src={imgSrc}
                    alt={`Project Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    placeholder="blur"
                    blurDataURL="https://res.cloudinary.com/djvvz62dw/image/upload/v1730118236/greywall/Eclipse_1x-1.0s-200px-200px_fihtnz.svg"
                  />
                </div>
              </div>
            ))}
            {isVideo ? (
              videos.map((videoSrc, index) => (
                <div
                  className="embla__slide flex-[0_0_calc(100%-2rem)] md:flex-[0_0_calc(90%-2rem)] lg:flex-[0_0_calc(80%-2rem)] relative p-2 mr-8"
                  key={index}
                >
                  <div className="relative w-full h-96 overflow-hidden rounded-lg">
                    <video
                      className="w-full h-full object-cover"
                      src={videoSrc}
                      controls={false}
                      muted
                      onClick={(e) => {
                        const videoElement = e.currentTarget;
                        if (videoElement.paused) {
                          videoElement.play();
                          setIsVideoPlaying(true);
                        } else {
                          videoElement.pause();
                          setIsVideoPlaying(false);
                        }
                      }}
                    />
                    {!isVideoPlaying ? (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <PlayCircleFilled className="text-white text-6xl opacity-70" />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          {zoomedImage && (
            <div className="zoomed-image-container" onClick={closeZoomedImage}>
              <Image
                src={zoomedImage}
                alt="zoomed-image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute -bottom-20 left-0 hidden sm:flex gap-4">
        <button
          className={`bg-[#FFEDE6] text-[#333333] rounded-full p-3 ${
            !canScrollPrev ? "opacity-50" : ""
          }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ArrowBackIos className="w-6 h-6" />
        </button>
        <button
          className={`bg-[#FFEDE6] text-[#333333] rounded-full p-3 ${
            !canScrollNext ? "opacity-50" : ""
          }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ArrowForwardIos className="w-6 h-6" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
        {allDots.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              selectedIndex === index
                ? "bg-[#ffff] border-[#000000]"
                : "bg-transparent border-gray-300 hover:border-[#333333]"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
