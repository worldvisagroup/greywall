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
    <section className="w-full bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            How We Work
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            From Elegant Homes To Modern Offices, We Create Stylish, Functional,
            And Personalized Interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 flex items-center justify-center">
                <step.icon
                  className="w-12 h-12 text-white/80"
                  strokeWidth={1}
                />
              </div>
              <h3 className="text-white font-medium text-lg whitespace-pre-line">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
