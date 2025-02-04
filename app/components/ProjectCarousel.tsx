"use client";

import Carousel from "@/components/ui/carousel";
import { Play } from "lucide-react";
import reelImage1 from "@/public/images/reel/reel1.webp";
import reelImage2 from "@/public/images/reel/reel2.webp";
import reelImage3 from "@/public/images/reel/reel3.webp";
import reelImage4 from "@/public/images/reel/reel4.webp";
import reelImage5 from "@/public/images/reel/reel5.webp";
import reelImage6 from "@/public/images/reel/reel6.webp";

export function ProjectCarousel() {
  const slideData = [
    {
      button: <Play />,
      url: "https://www.instagram.com/reel/DE7P42bvnnw/",
      reelImage: reelImage1,
    },
    {
      button: <Play />,
      url: "https://www.instagram.com/reel/DFe8J__yIAo/",
      reelImage: reelImage2,
    },
    {
      button: <Play />,
      url: "https://www.instagram.com/reel/CuY4gyFsiLX/",
      reelImage: reelImage3,
    },
    {
      button: <Play />,
      url: "https://www.instagram.com/reel/DFIKEauS_nP/",
      reelImage: reelImage4,
    },
    {
      button: <Play />,
      url: "https://www.instagram.com/reel/C2fSLrJPEGU/",
      reelImage: reelImage5,
    },
    {
      button: <Play />,
      url: "https://www.instagram.com/reel/C0s-a9kvQLF/",
      reelImage: reelImage6,
    },
  ];
  return (
    <div className="w-full lg:h-[560px] md:h-[540px] h-[380px] overflow-hidden ">
      <Carousel slides={slideData} />
    </div>
  );
}
