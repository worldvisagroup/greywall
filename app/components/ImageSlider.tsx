"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const ImageSlider = ({ data: { imageOne, imageTwo, imageThree, imageFour, imageFive, title, sqft } }) => {
  const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === images.length + 1) {
        setTimeout(() => setCurrentIndex(1), 300);
      } else if (currentIndex === 0) {
        setTimeout(() => setCurrentIndex(images.length), 300);
      }
    };

    return () => handleTransitionEnd();
  }, [currentIndex, images.length]);

  const nextSlide = () => setCurrentIndex((prevIndex) => prevIndex + 1);
  const prevSlide = () => setCurrentIndex((prevIndex) => prevIndex - 1);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <>
      <div
        className="relative w-[300px] h-[300px] mx-auto overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="min-w-full relative">
            <Image
              src={images[images.length - 1]}
              className="w-full h-96 object-cover"
              alt="Image"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>

          {images.map((src, index) => (
            <div key={index} className="min-w-full relative">
              <Image
                src={src}
                className="w-full h-96 object-cover"
                alt="Image"
                width={500}
                height={500}
                loading="lazy"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-[86%] left-16 transform -translate-x-1/2 bg-white/95 text-black px-4 py-2 font-medium h-6 flex justify-center items-center rounded-md text-center text-xs">
                {title}
              </div>
              <div className="absolute bottom-[78%] left-12 transform -translate-x-1/2 bg-white/85 text-black px-4 py-2 font-medium h-6 flex justify-center items-center rounded-md text-center text-xs">
                {sqft} sqft
              </div>
            </div>
          ))}

          <div className="min-w-full relative">
            <Image
              src={images[0]}
              className="w-full h-96 object-cover"
              alt="Image"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
        </div>

        {isHovered && (
          <div className="mx-2">
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
              onClick={prevSlide}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
              onClick={nextSlide}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index + 1 ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index + 1)}
            ></span>
          ))}
        </div>
      </div>

      {/* <h1 className="text-[16px] font-medium flex justify-center my-4">
        {title}
      </h1> */}
    </>
  );
};

export default ImageSlider;
