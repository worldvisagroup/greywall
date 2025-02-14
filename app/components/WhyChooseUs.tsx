import {  BadgeDollarSign, Eye, Sparkle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#FFF1EC] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium font-hurricane mb-12 md:mb-16">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto font-montserrat">
          <div className="text-center space-y-4">
            <div className="mx-auto rounded-full flex items-center justify-center ">
              <BadgeDollarSign  className="w-10 h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold">
              No-Cost EMI Options
            </h3>
            <p className="text-sm md:text-sm text-[#383838] leading-relaxed max-w-xs mx-auto">
              Transform Your Space Without Financial Stress! Our No-Cost EMI
              Plans Make It Easier To Bring Your Dream Interiors To Life With
              Flexible Payment Solutions.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto flex items-center justify-center ">
              <Eye className="w-10 h-10" />
            </div>
            <h3 className="text-xl md:text-xl font-semibold">
              Boutique Interior Firm
            </h3>
            <p className="text-sm md:text-sm text-[#383838] leading-relaxed max-w-xs mx-auto">
              As A Boutique Interior Design Firm, We Offer A Highly
              Personalized, Client-Focused Experience, Ensuring Each Design
              Reflects Your Unique Style And Needs.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto flex items-center justify-center ">
              <Sparkle className="w-10 h-10" />
            </div>
            <h3 className="text-xl md:text-xl font-semibold">
              Render To Reality
            </h3>
            <p className="text-sm md:text-sm text-[#383838] leading-relaxed max-w-xs mx-auto">
              We Guarantee Precision In Execution, Bringing 3D Designs To Life
              Exactly As Envisioned For A Seamless And Flawless Result.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
