"use client";

import Carousel from "@/components/ui/carousel";
import { StaticImageData } from "next/image";



interface ProjectCarouselProps {
  slideDate: (
    | { button: JSX.Element; url: string; reelImage: StaticImageData }
    | { image: StaticImageData }
  )[];
}


export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ slideDate }) => {
  return (
    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideDate} />
    </div>
  );
}
