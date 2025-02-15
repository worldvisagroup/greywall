import React from "react";
import { getDocuments } from "outstatic/server";
import ImageSlider from "./ImageSlider";
import ReelCarousel from "./ReelCarousel";

const WorkPortfolio = async () => {
  const data = await getAllProjects();
  const allReels = await getAllReels();

  const normalizeTitle = (title) => {
    return title.trim().toLowerCase().replace(/\s+/g, "");
  };

  // Sort the projects based on the desired order
  const orderedData = data.sort((a, b) => {
    const order = ["2bhkapartment", "3bhkapartment", "holidayhome", "office"];
    const indexA = order.indexOf(normalizeTitle(a.title));
    const indexB = order.indexOf(normalizeTitle(b.title));

    return indexA - indexB;
  });

  return (
    <div className="bg-[#FFF1EC] min-h-screen w-full items-center flex flex-col py-20 justify-center overflow-hidden ">
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-3xl md:text-5xl lg:text-[48px] font-medium font-hurricane text-[#2C2C2C]">
          Our Work
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 flex-col gap-6 justify-center items-center p-4 ">
        {orderedData?.map((project, index) => (
          <div key={index} className="">
            <ImageSlider
              data={{
                imageOne: project.imageOne,
                imageTwo: project.imageTwo,
                imageThree: project.imageThree,
                imageFour: project.imageFour,
                imageFive: project.imageFive,
                title: project.title,
                sqft: project.sqft,
              }}
            />
          </div>
        ))}
      </div>
      <div>
        <ReelCarousel slideData={allReels} />
      </div>
    </div>
  );
};

export default WorkPortfolio;

export async function getAllProjects() {
  try {
    const allProjects = getDocuments("landingpage-projects", [
      "imageOne",
      "imageTwo",
      "imageThree",
      "imageFour",
      "imageFive",
      "title",
      "sqft",
    ]);
    return allProjects;
  } catch (error) {
    console.error("Error fetching reels:", error);
    return [];
  }
}

export async function getAllReels() {
  try {
    const allReels = getDocuments("reels", [
      "reelUrl",
      "coverImage",
      "title",
      "sqft",
    ]);
    return allReels;
  } catch (error) {
    console.error("Error fetching reels:", error);
    return [];
  }
}
