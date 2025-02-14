import { Eye, Layers, Grid2X2, Shield, HandshakeIcon } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      icon: Eye,
      title: "Understanding Your Vision",
      description:
        "We Start By Learning Your Style, Needs, And Preferences To Craft A Personalized Design Plan.",
    },
    {
      number: "02",
      icon: Layers,
      title: "Understanding Your Vision",
      description:
        "Our Experts Create Detailed Layouts And Designs To Bring Your Ideas To Life.",
    },
    {
      number: "03",
      icon: Grid2X2,
      title: "Material Selection",
      description:
        "Choose From Premium Materials, Textures, And Finishes To Match Your Aesthetic And Functionality.",
    },
    {
      number: "04",
      icon: Shield,
      title: "Understanding Your Vision",
      description:
        "Our Skilled Team Ensures Precise Execution With Regular Supervision For Flawless Results.",
    },
    {
      number: "05",
      icon: HandshakeIcon,
      title: "Final Touch & Handover",
      description:
        "We Perfect Every Detail Before Delivering A Space That Exceeds Your Expectations.",
    },
  ];

  return (
    <div className="bg-zinc-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-white text-center mb-16 font-hurricane">
          How We Work
        </h2>
        <div className="space-y-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col sm:flex-row sm:items-start items-center gap-6 sm:gap-8"
            >
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="text-4xl font-light text-zinc-500 w-12 sm:w-16 flex-shrink-0">
                  {step.number}
                </div>
                <div className="text-zinc-500 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                  <step.icon className="w-full h-full" />
                </div>
              </div>
              <div className="flex-1 mt-4 sm:mt-0 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-light text-[#FADDC4] mb-2 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-montserrat">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
