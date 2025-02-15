import { BadgeDollarSign, Eye, Sparkle } from "lucide-react";

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
              <BadgeDollarSign className="w-10 h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold">
              No-Cost EMI Options
            </h3>
            <p className="text-sm md:text-sm text-[#383838] leading-relaxed max-w-xs mx-auto">
              Transform your space without financial stress! Our no-cost EMI
              plans make it easier to bring your dream interiors to life with
              flexible payment solutions.
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
              As a boutique interior design firm, we offer a highly
              personalized, client-focused experience, ensuring each design
              reflects your unique style and needs..
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
              We guarantee precision in execution, bringing 3D designs to life
              exactly as envisioned for a seamless and flawless result.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
