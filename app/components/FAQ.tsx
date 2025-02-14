import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const sampleFAQ = [
    {
      question: "What makes your interior design services unique?",
      answer:
        "We specialize in creating personalized, functional, and aesthetically stunning interiors tailored to your lifestyle. Our team blends modern design trends with timeless elements, ensuring every space reflects your personality while maximizing comfort and efficiency.",
    },
    {
      question: "How do you ensure designs fit my budget?",
      answer:
        "We believe great design should be accessible to everyone. Our team works closely with you to develop a plan that aligns with your budget while maintaining quality and creativity. We provide transparent pricing with no hidden costs.",
    },
    {
      question: "Do you offer end-to-end interior solutions?",
      answer:
        "Yes! From concept design and material selection to execution and final styling, we manage every detail of your project. Whether it's a home, office, or commercial space, we handle everything for a hassle-free experience",
    },
    {
      question: "How long does the design and execution process take?",
      answer:
        "Timelines vary based on project size and complexity, but we ensure efficient planning and execution. On average, design finalization takes 2-4 weeks, and project completion ranges from 6-12 weeks. We provide a clear project timeline from the start.",
    },
    {
      question: "Can I see a 3D visualization of my space before execution?",
      answer:
        "Absolutely! We offer high-quality 3D renders and virtual walkthroughs, allowing you to visualize your space before any work begins. This ensures that you're fully satisfied with the design before implementation.",
    },
  ];

  return (
    <div className="bg-[#FFF1EC] w-full items-center flex flex-col pb-9 justify-center overflow-hidden px-2">
      <div className="flex justify-center my-14">
        <h1 className="sm:text-4xl text-3xl font-semibold font-hurricane">FAQ</h1>
      </div>
      <div className="p-2 w-full flex flex-col justify-center mx-auto items-center">
        <Accordion
          type="single"
          collapsible
          className="sm:w-[80%] w-full font-montserrat"
        >
          {sampleFAQ.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="sm:text-lg text-sm text-start">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="sm:text-[16px] text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
