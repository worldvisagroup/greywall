import Image from "next/image";

export function AboutUslandingPage() {
  return (
    <section className="w-full bg-[#FFFBFA] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-literata  text-zinc-800">
            About The Grey Wall
          </h2>
          <p className="text-zinc-600 max-w-3xl mx-auto lg:text-lg text-sm md:text-lg font-montserrat">
            From Elegant Homes To Modern Offices, We Create Stylish, Functional,
            And Personalized Interiors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-2 items-start max-w-7xl mx-auto">
          <div className="relative aspect-square w-full max-w-sm mx-auto">
            <Image
              src="/images/interior_design.png"
              alt="Luxurious interior design"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="space-y-8">
            <p className="text-[#2C2C2CF] text-sm lg:text-lg md:text-lg leading-relaxed font-montserrat">
              At <span className="text-zinc-950 font-semibold  ">The Grey Wall</span>, We Redefine Architecture, Civil
              Construction, And Luxury Interior Design By Seamlessly Blending
              Sustainability With Exceptional Craftsmanship. Our Zero-Carbon
              Methodology Ensures That Every Project Is A True Reflection Of Our
              Clients&apos; Unique Vision And Personality.
            </p>

            <p className="text-[#2C2C2C] text-sm lg:text-lg md:text-lg leading-relaxed font-montserrat">
              From Iconic Architectural Landmarks To Intricate Civil Projects
              And Exquisite Interiors, We Merge Innovation With Deep Client
              Insight To Craft Spaces That Inspire. Whether Designing
              Residential Or Commercial Spaces, We Prioritize Aesthetics,
              Structural Integrity, And Environmental Responsibility, Delivering
              Designs That Stand The Test Of Time.
            </p>

            <p className="text-[#2C2C2C] text-sm lg:text-lg md:text-lg leading-relaxed font-montserrat">
              We Don&apos;t Just Build Spaces—We Create Legacies That Embody
              Elegance, Sustainability, And Innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
