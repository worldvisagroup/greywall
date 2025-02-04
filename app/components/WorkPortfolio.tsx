import React from "react";
import { ProjectCarousel } from "./ProjectCarousel";

const WorkPortfolio = () => {
  return (
    <div className="bg-[#FFFBFA] max-h-screen container mx-auto my-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl lg:text-[48px] font-literata text-primary">
          Our Work Portfolio
        </h2>
        <p className="text-black/85 max-w-3xl px-6 lg:p-0 md:p-0 font-montserrat mx-auto md:text-lg text-sm lg:text-lg">
          Explore our diverse portfolio that showcases our creativity and
          attention to detail through transformative designs that inspire and
          elevate your lifestyle.
        </p>
      </div>
      <ProjectCarousel />
    </div>
  );
};

export default WorkPortfolio;
