import React from "react";
import Specialization from "@/public/images/landingPage/specilization.svg";
import Sustainability from "@/public/images/landingPage/Sustainability.svg";
import Value from "@/public/images/landingPage/Value.svg";
import Image from "next/image";

const WhyChooseUs = () => {
  const chooseUs = [
    {
      title: "Specialization",
      image: Specialization,
    },
    {
      title: "Sustainability",
      image: Sustainability,
    },
    { title: "Value", image: Value },
  ];

  return (
    <div className="bg-[#FFF1EC] min-h-screen w-full items-center flex flex-col py-20 justify-center overflow-hidden ">
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-3xl md:text-5xl lg:text-[48px] font-hurricane text-[#2C2C2C]">
          Why choose us
        </h2>
      </div>
      <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-16 sm:mt-5">
        {chooseUs?.map((point, index) => {
          return (
            <div key={index} className="sm:w-[333px] px-6">
              <p className="text-[#4B4B4B] sm:text-xl text-lg">#{index + 1}</p>
              <h2 className="font-medium sm:text-3xl text-2xl text-[#2C2C2C] my-3">
                {point.title}
              </h2>
              <div className="sm:w-[333px] sm:h-[288px] w-[300px] h-[300px] shadow-lg">
                <Image
                  src={point.image}
                  alt={point.title}
                  width={500}
                  height={500}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
