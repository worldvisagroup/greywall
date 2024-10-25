import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    text: "This service was fantastic! I can't believe how much it helped me.",
    name: 'Jane Doe',
    rating: 5,
    date: '2024-05-15',
    image: 'https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43b25bee70.png',
  },
  {
    text: "A truly great experience! Highly recommend to anyone.",
    name: 'John Smith',
    rating: 3,
    date: '2024-05-15',
    image: 'https://cdn.goenhance.ai/user/2024/07/12/0a2640eb-1120-42e1-8478-eb2a5c19367b_0.jpg',
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-[#363636d3] min-h-[532px] flex flex-col items-center justify-center p-4 sm:p-8">
     <h1 className="text-white text-2xl lg:text-4xl font-playfair font-bold mb-8">Testimonials</h1>
     <div className="grid w-full max-w-6xl gap-12 sm:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-2 place-items-center">
      {testimonials.map((review, index) => (
        <TestimonialCard key={index} review={review} />
      ))}
      </div>
    </div>
  );
};

export default Testimonials;
