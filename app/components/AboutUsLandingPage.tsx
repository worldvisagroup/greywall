import Image from "next/image";
import AboutUsImage from "@/public/images/landingPage/Aboutus_image.webp";

export function AboutUslandingPage() {
  return (
    <section className="w-full bg-[#FFF1EC] py-24 p-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-hurricane  text-[#2C2C2C]">
            About us
          </h2>
          {/* <p className="text-zinc-600 max-w-3xl mx-auto lg:text-lg text-sm md:text-lg font-montserrat">
            From Elegant Homes To Modern Offices, We Create Stylish, Functional,
            And Personalized Interiors.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-2 items-start max-w-7xl mx-auto">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src={AboutUsImage}
              alt="Luxurious interior design"
              width={500}
              height={500}
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>

          <div className="space-y-8 ">
            <p className="text-[#2C2C2CF] text-sm lg:text-lg md:text-lg leading-relaxed font-montserrat">
              At{" "}
              <span className="text-zinc-950 font-semibold mr-1">
                The Grey Wall
              </span>
              we transform architecture, civil construction, and luxury interior
              design by combining sustainability with exceptional craftsmanship.
              Our zero-carbon methodology ensures each project is tailored to
              reflect the distinct personality of our clients.
            </p>

            <p className="text-[#2C2C2C] text-sm lg:text-lg md:text-lg leading-relaxed font-montserrat">
              Whether shaping architectural landmarks, executing intricate civil
              projects, or designing exquisite interiors, we blend innovation
              with deep client insight.
            </p>

            <p className="text-[#2C2C2C] text-sm lg:text-lg md:text-lg leading-relaxed font-montserrat">
              From residential to commercial spaces, we deliver not only on
              aesthetics and structural integrity but also on our unwavering
              commitment to environmental stewardship and enduring elegance. We
              don&apos;t just build spaces we create legacies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
