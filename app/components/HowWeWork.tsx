import { Eye, Layers, Grid, Shield, Handshake } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      icon: Eye,
      title: "Understanding\nYour Vision",
    },
    {
      icon: Layers,
      title: "Concept\nVisualization",
    },
    {
      icon: Grid,
      title: "Material\nSelection",
    },
    {
      icon: Shield,
      title: "Execution &\nQuality Control",
    },
    {
      icon: Handshake,
      title: "Final Touch &\nHandover",
    },
  ];

  return (
    <section className="w-full bg-[#2C2C2C] py-24 text-[#FFEDE6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-literata">
            How We Work
          </h2>
          <p className=" max-w-3xl mx-auto md:text-lg text-sm lg:text-lg font-montserrat">
            From Elegant Homes To Modern Offices, We Create Stylish, Functional,
            And Personalized Interiors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 flex items-center justify-center">
                <step.icon
                  className="w-12 h-12 "
                  strokeWidth={1}
                />
              </div>
              <h3 className="font-medium md:text-lg text-sm lg:text-lg whitespace-pre-line">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
