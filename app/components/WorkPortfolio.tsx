import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import commericalImage1 from "@/public/images/portfolioImage/commerical1.webp";
import commericalImage2 from "@/public/images/portfolioImage/commerical2.webp";
import commericalImage3 from "@/public/images/portfolioImage/commerical3.webp";
import commericalImage4 from "@/public/images/portfolioImage/res_image.webp";
import commericalImage5 from "@/public/images/landingPage/Aboutus_image.webp";

import ReelCarousel from "./ReelCarousel";
import ImageCarousel from "./ImageCarousel";
import { getDocuments } from "outstatic/server";

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
  {
    image: commericalImage4,
  },
  {
    image: commericalImage5,
  },
];

const WorkPortfolio = async () => {
  const data = await getAllReels();
  return (
    <div className="bg-[#FFF1EC] max-h-screen  lg:pb-24 md:pb-18 py-4">
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
      <Tabs defaultValue="Commercial" className="w-full">
        <TabsList className="flex justify-center lg:h-[40%] lg:w-[70%] md:w-[70%] bg-[#FEF7F1] w-[90%] mx-auto gap-10 mb-8">
          <TabsTrigger
            className="lg:w-[50%] md:w-[50%] w-full mx-4 min-h-10 rounded-lg font-montserrat data-[state=active]:bg-[#2C2C2C] data-[state=active]:text-[#FFFBFA]"
            value="Commercial"
          >
            Commercial
          </TabsTrigger>
          <TabsTrigger
            className="lg:w-[50%] md:w-[50%] w-full mx-4 min-h-10 rounded-lg font-montserrat data-[state=active]:bg-[#2C2C2C] data-[state=active]:text-[#FFFBFA]"
            value="Residential"
          >
            Residential
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Commercial">
          <ReelCarousel slideData={data} />
        </TabsContent>
        <TabsContent value="Residential">
          <ImageCarousel slideData={residencialSlideData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkPortfolio;

export async function getAllReels() {
  try {
    const allReels = getDocuments("reels", ["reelUrl", "coverImage"]);
    return allReels;
  } catch (error) {
    console.error("Error fetching reels:", error);
    return [];
  }
}
