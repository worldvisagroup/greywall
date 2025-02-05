import React from "react";
import { ProjectCarousel } from "./ProjectCarousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from "lucide-react";
import reelImage1 from "@/public/images/reel/reel1.webp";
import reelImage2 from "@/public/images/reel/reel2.webp";
import reelImage3 from "@/public/images/reel/reel3.webp";
import reelImage4 from "@/public/images/reel/reel4.webp";
import reelImage5 from "@/public/images/reel/reel5.webp";
import reelImage6 from "@/public/images/reel/reel6.webp";
import commericalImage1 from "@/public/images/portfolioImage/commerical1.webp";
import commericalImage2 from "@/public/images/portfolioImage/commerical2.webp";
import commericalImage3 from "@/public/images/portfolioImage/commerical3.webp";

const commericalSlideDate = [
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

const residencialSlideData = [
  {
    image: commericalImage1,
  },
  {
    image: commericalImage2,
  },
  {
    image: commericalImage3,
  },
];

const WorkPortfolio = () => {
  return (
    <div className="bg-[#FFFBFA] max-h-screen container mx-auto my-20">
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-3xl md:text-5xl lg:text-[48px] font-hurricane text-[#2C2C2C]">
          Our Work 
        </h2>
        {/* <p className="text-black/85 max-w-3xl px-6 lg:p-0 md:p-0 font-montserrat mx-auto md:text-lg text-sm lg:text-lg">
          Explore our diverse portfolio that showcases our creativity and
          attention to detail through transformative designs that inspire and
          elevate your lifestyle.
        </p> */}
      </div>
      <Tabs defaultValue="Commerical" className="w-full">
        <TabsList className="flex justify-center lg:h-[40%] lg:w-[70%] md:w-[70%] w-full mx-auto gap-10 mb-8">
          <TabsTrigger
            className="lg:w-[50%] md:w-[50%] w-full mx-4 min-h-10 rounded-lg font-montserrat data-[state=active]:bg-[#2C2C2C] data-[state=active]:text-[#FFFBFA]"
            value="Commerical"
          >
            Commerical
          </TabsTrigger>
          <TabsTrigger
            className="lg:w-[50%] md:w-[50%] w-full mx-4 min-h-10 rounded-lg font-montserrat data-[state=active]:bg-[#2C2C2C] data-[state=active]:text-[#FFFBFA]"
            value="Residencial"
          >
            Residencial
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Commerical">
          <ProjectCarousel slideDate={commericalSlideDate} />
        </TabsContent>
        <TabsContent value="Residencial">
          <ProjectCarousel slideDate={residencialSlideData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkPortfolio;
