"use client"
import React from "react";
import ImageSlider from "./ImageSlider";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import { Card } from "@/components/ui/card";

const ImageCarousel = ({ images }) => {
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default ImageCarousel;
