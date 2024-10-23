import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";

import Project1Image1 from "../../public/images/projects/DuraniEnclave/image1.webp";
import Project1Image2 from "../../public/images/projects/DuraniEnclave/image2.webp";
import Project1Image3 from "../../public/images/projects/DuraniEnclave/image3.webp";
import Project1Image4 from "../../public/images/projects/DuraniEnclave/image4.webp";

import Project2Image1 from "../../public/images/projects/WLDDimages/small-image1.webp";
import Project2Image2 from "../../public/images/projects/WLDDimages/small-image2.webp";
import Project2Image3 from "../../public/images/projects/WLDDimages/main-image.webp";

import Project3Image1 from "../../public/images/projects/Chilli_garlic/img1.webp";
import Project3Image2 from "../../public/images/projects/Chilli_garlic/img2.webp";
import Project3Image3 from "../../public/images/projects/Chilli_garlic/img3.webp";
import Project3Image4 from "../../public/images/projects/Chilli_garlic/image4.webp";
import Project3Image5 from "../../public/images/projects/Chilli_garlic/image5.webp";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("Construction");
  const [activeConstructionProject, setActiveConstructionProject] = useState(0);
  const [activeInteriorProject, setActiveInteriorProject] = useState(0);
  const [mainImage, setMainImage] = useState("");

  const categories = [
    {
      name: "Construction",
      projects: [
        {
          title: "Durani Enclave",
          mainImage: Project1Image4,
          smallImages: [
            Project1Image1,
            Project1Image2,
            Project1Image3,
            Project1Image4,
          ],
        },
        {
          title: "WLLD",
          mainImage: Project2Image3,
          smallImages: [Project2Image1, Project2Image2, Project2Image3],
        },
        {
          title: "Chilli Garlic",
          mainImage: Project3Image3,
          smallImages: [
            Project3Image1,
            Project3Image2,
            Project3Image4,
            Project3Image5,
          ],
        },
      ],
    },
  ];
  // @ts-expect-error unused function
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setMainImage("");
    if (category === "Construction") {
      setActiveConstructionProject(0);
    } else {
      setActiveInteriorProject(0);
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
    <div className="bg-[#313131] text-white p-4 lg:p-8">
      <div className="container mx-auto">
        <h1 className="font-serif text-4xl lg:text-6xl mb-[12px]">Projects</h1>
        <div className="lg:flex flex-col items-center">
          <div className="flex flex-row my-[12px] py-[12px]">
            <p
              onClick={() => handleCategoryChange("Construction")}
              className="text-2xl lg:text-3xl font-light border-b-2 pb-2 px-4 my-[18px]"
            >
              Construction
            </p>
          </div>
          <div className="overflow-x-auto lg:hidden">
            <div className="flex space-x-4 py-4 w-max">
              {categories
                .find((cat) => cat.name === activeCategory)
                .projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleProjectChange(index)}
                    className={`flex-shrink-0 px-6 py-2 text-sm  whitespace-nowrap ${(activeCategory === "Construction"
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
                <h3 className="text-2xl lg:text-3xl font-montserrat font-semibold text-center mb-[15%] mt-3 hidden lg:block">
                  {activeProjectData.title}
                </h3>
                <div className="flex flex-row lg:flex-auto lg:px-4 gap-4">
                  {activeProjectData.smallImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      width={500}
                      height={500}
                      alt={`Small image ${index + 1}`}
                      onClick={() => handleImageClick(img)}
                      className="w-[120px] h-[100px] lg:w-[171.25px] lg:h-[137px] object-cover cursor-pointer transition-transform hover:scale-105"
                    />
                  ))}
                </div>
              </div>

              <div className="lg:hidden w-full">
                <h3 className="text-xl font-serif font-semibold text-center mb-4 hidden lg:block">
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
                  className={`px-4 lg:px-16 py-2 text-sm  ${(activeCategory === "Construction"
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

export default Project;
