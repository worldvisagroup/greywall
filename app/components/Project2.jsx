"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project1Img1 from "../../public/images/projects/Anima/anima-1.webp";
import Project1Img2 from "../../public/images/projects/Anima/anima-2.webp";
import Project1Img3 from "../../public/images/projects/Anima/anima-3.webp";
import Project1Img4 from "../../public/images/projects/Anima/anima-4.webp";
import Project1Img5 from "../../public/images/projects/Anima/anima-6.webp";

import Project2Img1 from "../../public/images/projects/Hemanth/hemanth-1.webp";
import Project2Img2 from "../../public/images/projects/Hemanth/hemanth-2.webp";
import Project2Img3 from "../../public/images/projects/Hemanth/hemanth-3.webp";
import Project2Img4 from "../../public/images/projects/Hemanth/hemanth-4.webp";
import Project2Img5 from "../../public/images/projects/Hemanth/hemanth-6.webp";

import Project3Img1 from "../../public/images/projects/Model Flat/model-1.webp";
import Project3Img2 from "../../public/images/projects/Model Flat/model-2.webp";
import Project3Img3 from "../../public/images/projects/Model Flat/model-3.webp";
import Project3Img4 from "../../public/images/projects/Model Flat/model-4.webp";
import Project3Img5 from "../../public/images/projects/Model Flat/model-5.webp";
import Image from "next/image";

const Project2 = () => {
  const [activeCategory, setActiveCategory] = useState("Interior");
  const [activeConstructionProject, setActiveConstructionProject] = useState(0);
  const [activeInteriorProject, setActiveInteriorProject] = useState(0);
  const [mainImage, setMainImage] = useState("");

  const categories = [
    {
      name: "Interior",
      projects: [
        {
          title: "Anima",
          mainImage: Project1Img1,
          smallImages: [Project1Img2, Project1Img3, Project1Img4, Project1Img5],
        },
        {
          title: "Hemanth",
          mainImage: Project2Img1,
          smallImages: [Project2Img2, Project2Img3, Project2Img4, Project2Img5],
        },
        {
          title: "Model Flat",
          mainImage: Project3Img1,
          smallImages: [Project3Img2, Project3Img3, Project3Img4, Project3Img5],
        },
      ],
    },
  ];

  // @ts-expect-error unused function
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "Construction") {
      setActiveConstructionProject(0);
    } else {
      setActiveInteriorProject(1);
    }
  };

  const handleProjectChange = (index) => {
    if (activeCategory === "Construction") {
      setActiveConstructionProject(index);
    } else {
      setActiveInteriorProject(index);
    }
    setMainImage("");
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const getActiveProjectIndex = () => {
    return activeCategory === "Construction"
      ? activeConstructionProject
      : activeInteriorProject;
  };

  const activeProjectData = categories.find(
    (cat) => cat.name === activeCategory
  ).projects[getActiveProjectIndex()];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "20px",
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="bg-[#313131d3] text-white p-4 lg:p-8 py-[18px]">
      <div className="container mx-auto">
        <div className="lg:flex flex-col items-center  ">
          <div className="inline-block my-[12px] py-[12px]">
            <p
              onClick={() => handleCategoryChange("Interior")}
              className="text-2xl lg:text-4xl font-light pb-2 px-4 my-[4px] border-b-2 border-white"
            >
              Interior
            </p>
          </div>
          <div className="flex overflow-x-auto space-x-4 lg:space-x-6 my-4 lg:hidden">
            {categories
              .find((cat) => cat.name === activeCategory)
              .projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleProjectChange(index)}
                  className={`flex-shrink-0 px-6 py-2 text-sm whitespace-nowrap ${(activeCategory === "Construction"
                    ? activeConstructionProject
                    : activeInteriorProject) === index
                    ? "bg-black text-white border-black"
                    : "bg-[#f5f5f5e1] text-black border-gray-400"
                    } transition-colors`}
                >
                  <span className="font-montserrat">Project {index + 1}</span>
                </button>
              ))}
          </div>

          <div className="flex flex-col lg:flex-wrap items-start gap-8 mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4 lg:gap-0 w-full">
              <h3 className="text-2xl font-montserrat font-semibold text-center mb-4 mt-3 lg:hidden w-full">
                {activeProjectData.title}
              </h3>
              <Image
                src={mainImage || activeProjectData.mainImage}
                alt={activeProjectData.title}
                width={500}
                height={500}
                className="w-full lg:w-[491.02px] h-[393px] object-cover opacity-100"
              />

              <div className="hidden lg:flex flex-col items-center w-full lg:w-[50%]">
                <h3 className="text-xl lg:text-3xl font-montserrat font-semibold text-center mb-[15%]">
                  {activeProjectData.title}
                </h3>
                <div className="flex flex-row lg:flex-auto lg:px-4 gap-4">
                  {activeProjectData.smallImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Small image ${index + 1}`}
                      onClick={() => handleImageClick(img)}
                      className="w-[120px] h-[100px] lg:w-[171.25px] lg:h-[137px] object-cover cursor-pointer transition-transform hover:scale-105"
                      width={400}
                      height={400}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:hidden w-full">
                <h3 className="text-xl font-montserrat font-semibold text-center mb-4 hidden lg:block">
                  {activeProjectData.title}
                </h3>
                <div className="slider-container">
                  <Slider {...sliderSettings}>
                    {activeProjectData.smallImages.map((img, index) => (
                      <div key={index} className="px-2">
                        <Image
                          src={img}
                          alt={`Small image ${index + 1}`}
                          onClick={() => handleImageClick(img)}
                          className="w-full h-[200px] object-cover cursor-pointer"
                          width={400}
                          height={400}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex overflow-x-auto space-x-4 lg:space-x-6 my-4 ">
            {categories
              .find((cat) => cat.name === activeCategory)
              .projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleProjectChange(index)}
                  className={`px-4 lg:px-16 py-2 text-sm ${(activeCategory === "Construction"
                    ? activeConstructionProject
                    : activeInteriorProject) === index
                    ? "bg-black text-white border-black"
                    : "bg-[#f5f5f5e1] text-black border-gray-400"
                    } transition-colors`}
                >
                  Project {index + 1}
                </button>
              ))}
          </div>
        </div>

        {/* Add this style tag at the end of the component, just before the closing div */}
        <style jsx>{`
          :global(.custom-dots li button:before) {
            color: white !important;
          }
          :global(.custom-dots li.slick-active button:before) {
            color: white !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Project2;
