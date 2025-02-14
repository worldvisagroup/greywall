import React from "react";
import commericalImage1 from "@/public/images/portfolioImage/commerical1.webp";
import commericalImage2 from "@/public/images/portfolioImage/commerical2.webp";
import commericalImage3 from "@/public/images/portfolioImage/commerical3.webp";
import commericalImage4 from "@/public/images/portfolioImage/res_image.webp";
import commericalImage5 from "@/public/images/landingPage/Aboutus_image.webp";

// import { getDocuments } from "outstatic/server";
import ImageSlider from "./ImageSlider";

const residencialSlideData = [
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
];

const WorkPortfolio = async () => {
  // const data = await getAllReels();
  return (
    <div className="bg-[#FFF1EC] min-h-screen w-full items-center flex flex-col justify-center overflow-hidden ">
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-3xl md:text-5xl lg:text-[48px] sm:mb-10 my-5 font-hurricane text-[#2C2C2C]">
          Our Work
        </h2>
      </div>
      <div className="flex sm:flex-row flex-col gap-5 justify-center items-center ">
        {residencialSlideData?.map((images, index) => (
          <div key={index} className="">
            <ImageSlider images={images} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPortfolio;

// export async function getAllReels() {
//   try {
//     const allReels = getDocuments("reels", ["reelUrl", "coverImage"]);
//     return allReels;
//   } catch (error) {
//     console.error("Error fetching reels:", error);
//     return [];
//   }
// }
