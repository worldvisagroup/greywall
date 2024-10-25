"use client";
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Construction",
      content:
        "Designing spaces that endure through time, we construct more than just buildings; we create lasting legacies.",
      backgroundImage: "/images/construction.jpg",
    },
    {
      title: "Interior Design",
      content:
        "Enhance your living environment with our meticulously curated selection of refined interior design elements",
      backgroundImage: "/images/interior.jpg",
    },
    {
      title: "Architecture",
      content:
        "Refine your architectural vision with our expertly crafted selection of sophisticated design solutions.",
      backgroundImage: "/images/interior.jpg",
    },
  ];

  return (
    <div id="service" className="bg-[#FFF1E9] min-h-[532px] flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="font-serif w-full max-w-[223px] text-4xl sm:text-5xl text-center mb-8 sm:mb-12">
        Services
      </h1>
      <div className="grid w-full max-w-6xl gap-12 sm:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-2 place-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="card w-full sm:w-[596.5px] h-[120px] sm:h-[157px] rounded-[2px] px-4 overflow-hidden relative transform-gpu preserve-3d perspective-1000 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.320,1)] cursor-pointer hover:rotate-y-10 hover:rotate-x-10 hover:scale-105 hover:shadow-lg mb-12 md:mb-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${service.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="card-content p-3 sm:p-5 relative z-10 flex flex-col gap-2 sm:gap-2.5 items-center justify-center text-center h-full">
              <h2 className="card-title text-xl sm:text-2xl text-white font-bold font-montserrat uppercase">
                {service.title}
              </h2>
              <p className="card-para text-xs sm:text-sm text-white font-semibold font-montserrat opacity-90">
                {service.content}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.320,1)] z-[1] hover:translate-x-full"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.320,1)] z-[1] hover:translate-x-[-100%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
