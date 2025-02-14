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
      question: "What is the best color scheme for a small living room?",
      answer:
        "Light colors such as whites, creams, and pastels can make a small living room feel more spacious and open.",
    },
    {
      question: "How can I make my bedroom more cozy?",
      answer:
        "Adding layers with soft textiles like throws and cushions, using warm lighting, and incorporating personal touches can make your bedroom feel more cozy.",
    },
    {
      question: "What are some tips for choosing the right furniture?",
      answer:
        "Consider the size of your space, the functionality you need, and your personal style. It's also important to ensure that the furniture is proportionate to the room.",
    },
    {
      question: "How do I create a focal point in a room?",
      answer:
        "You can create a focal point by using a bold piece of art, a statement piece of furniture, or an accent wall with a different color or texture.",
    },
    {
      question:
        "What are some ways to incorporate plants into interior design?",
      answer:
        "Plants can be used as decorative elements on shelves, as centerpieces on tables, or as hanging installations. They add life and color to any space.",
    },
  ];

  return (
    <div className="bg-[#FFFBFA]  w-full items-center flex flex-col pb-9 justify-center overflow-hidden">
      <div className="flex justify-center my-5">
        <h1 className="text-4xl font-semibold font-hurricane">FAQ</h1>
      </div>
      <Accordion
        type="single"
        collapsible
        className="sm:w-[80%] w-full font-montserrat"
      >
        {sampleFAQ.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
