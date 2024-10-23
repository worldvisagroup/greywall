"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-[#FFF1EC] flex flex-col lg:flex-row items-center overflow-hidden justify-center">
      <div className="min-h-[70%] h-[800px] w-full lg:min-w-[70%] px-[20px] flex lg:mt-[22px] lg:mx-[40px]">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-4xl text-[#363636] mt-[10%] lg:text-6xl font-serif mb-7">
            About Us
          </h1>
          <h2 className="text-4xl lg:text-4xl font-cursive mb-8">
            <Image
              src="/images/We_are_a_creative_studio.svg"
              alt="We are a creative studio"
              width={500}
              height={500}
            />
          </h2>
          <div className="space-y-6 font-montserrat text-[#363636] font-medium text-[17px] lg:text-[20px] leading-[1.5]">
            <p>
              At{" "}
              <span className="font-semibold text-[#363636]">
                The Grey Wall
              </span>{" "}
              we transform architecture, civil construction, and luxury interior
              design by combining sustainability with exceptional craftsmanship.
              Our zero-carbon methodology ensures each project is tailored to
              reflect the distinct personality of our clients.
            </p>
            Whether shaping architectural landmarks, executing intricate civil
            projects, or designing exquisite interiors, we blend innovation with
            deep client insight.
            <p>
              From residential to commercial spaces, we deliver not only on
              aesthetics and structural integrity but also on our unwavering
              commitment to environmental stewardship and enduring elegance. We
              don’t just build spaces; we create legacies.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[40%] lg:min-h-full h-[260px] sm:h-[400px] lg:h-[785px]  bg-[#7C7C7C] w-full px-[20px] relative">
        <div className="flex items-center justify-center relative">
          <Image
            src="/images/interior_design.png"
            alt="Luxurious interior design"
            className="object-cover rounded-lg shadow-lg absolute top-[-130px] lg:top-[100px] lg:left-[-200px] h-[360px] sm:h-[420px] lg:h-[580px] w-full lg:min-w-[500px]"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
