"use client";
import Image from "next/image";
import React from "react";
import construction from "../../public/services/worker.webp";
import blueprint from "../../public/services/blueprint.webp";
import interior from "../../public/services/interior-design.webp";

const Service = () => {
  const services = [
    {
      title: "Architecture",
      content:
        "We design structures that are both functional and aesthetically pleasing.",
      logo: blueprint,
    },
    {
      title: "Civil",
      content:
        "We build structures that last, safely and sustainably.",
      logo: construction,
    },
    {
      title: "Interior",
      content:
        "We transform spaces into stunning reflections of your style",
      logo: interior,
    },
  ];

  return (
    <div id="service" className="bg-[#FFF1E9] min-h-[477px] flex flex-col items-center sm:p-8 relative">
      <h1 className="font-playfair text-[50px] sm:mt-0 lg:text-[60px] lg:mb-8 text-center relative pt-8">
        <span className="relative">
          <span className="absolute bottom-0 -left-4 w-[calc(100%*8/7)] h-[3px] bg-black"></span>
          Ser
        </span>
        vices
      </h1>
      <div className="grid w-full max-w-6xl gap-12 sm:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-3 place-items-center mt-11 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full sm:w-[300px] h-auto gap-4"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Image src={service.logo} alt={service.title} className="w-full h-full" />
            </div>
            <h2 className="text-lg font-montserrat font-medium text-black">{service.title}</h2>
            <p className="text-base font-montserrat mb-6 text-black opacity-80 md:hidden">
              {service.content.split(' ').slice(0, Math.ceil(service.content.split(' ').length / 2)).join(' ')}
              <br />
              {service.content.split(' ').slice(Math.ceil(service.content.split(' ').length / 2)).join(' ')}
            </p>
            <p className="text-base font-montserrat text-black opacity-80 hidden md:block">
              {service.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
