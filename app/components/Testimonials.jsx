import React from 'react';
import TestimonialCard from './TestimonialCard';
import Image1 from "../../public/review/img1.webp"
import Image2 from "../../public/review/img2.webp"
import Image3 from "../../public/review/img3.webp"

const testimonials = [
  {
    text: "Got my office done with Grey Wall Interiors, very impressed and happy with the execution and timely completion of work. Would recommend for high quality service.",
    name: 'Lionel Roshan',
    rating: 5,
    image: Image2 
  },
  {
    text: "I recently got my interiors done for my apartment at Ecolife Elements. The quality of the work was excellent. The team paid close attention to detail and made sure everything was done to the highest standards. They also stayed within my budget and completed the project on time",
    name: 'Syed Mahak Bukhari',
    rating: 4.5,
    image: Image3 
  },
  {
    text: "Absolutely loved working with Catherine and Zarka for my home interiors. They managed to turn my house into a home and made it warm, inviting, interesting, and contemporary. They really delved into finding out who we were and what we wanted out of our space. Both the ladies are doing a fab job. They're super easy to talk to and always kept us in the loop. Super cooperative and great design sense. The hand over was on time as promised which I appreciate the most!",
    name: "Rida aftab",
    rating: 4.5,
    image: Image1 
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-[#383838] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto my-7">
        <h1 className="text-white text-4xl lg:text-6xl font-playfair lg:mb-[8%] text-center">
          <span className="relative">
            Tes
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
          </span>
          <span>timonials</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
          {testimonials.map((review, index) => (
            <div key={index} className="w-full md:w-[30%]">
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
