import React from "react";
import { getDocuments } from "outstatic/server";
import ImageSlider from "./ImageSlider";

const WorkPortfolio = async () => {
  const data = await getAllProjects();
  console.log(data);
  return (
    <div className="bg-[#FFF1EC] min-h-screen w-full items-center flex flex-col pb-9 justify-center overflow-hidden ">
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-3xl md:text-5xl lg:text-[48px] sm:mb-10 my-5 font-hurricane text-[#2C2C2C]">
          Our Work
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 flex-col gap-6 justify-center items-center ">
        {data?.map((project, index) => (
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
    console.log("all projeccts", allProjects);
    return allProjects;
  } catch (error) {
    console.error("Error fetching reels:", error);
    return [];
  }
}
