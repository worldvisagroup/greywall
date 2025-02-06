import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const ImageCarousel = ({ slideData }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <Carousel className="w-full lg:max-w-7xl mx-auto">
        <CarouselContent className="-ml-1">
          {slideData.map((slide, index) => (
            <CarouselItem
              key={index}
              className={`pl-1 md:basis-1/2 lg:basis-1/3 ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <Card className="p-1 lg:w-[500px] h-[350px] flex m-2">
                <Image src={slide.image} alt="image" width={500} height={500} />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block md:block" onClick={handlePrevious} />
        <CarouselNext className="hidden lg:block md:block" onClick={handleNext} />
        <div className="flex justify-center mt-4">
          {slideData.map((_, index) => (
            <span
              key={index}
              className={`mx-1 w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
    );
  };

export default ImageCarousel;
