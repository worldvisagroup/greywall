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
  return (
    <Carousel className="w-full lg:max-w-7xl mx-auto">
    <CarouselContent className="-ml-1">
      {slideData.map((slide, index) => (
        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
          <Card className="p-1 lg:w-[500px] h-[350px] flex m-2">
            <Image src={slide.image} alt="image" width={1000} height={1000} className="object-cover" />
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="hidden lg:block md:block" />
    <CarouselNext className="hidden lg:block md:block" />
    <div className="flex justify-center mt-2 lg:hidden">
      {slideData.map((_, index) => (
        <span key={index} className="mx-1 w-2 h-2 bg-slate-300 rounded-full"></span>
      ))}
    </div>
  </Carousel>
  );
};

export default ImageCarousel;
