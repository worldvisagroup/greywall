import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-transparent text-white max-w-xs lg:max-w-sm mx-auto mb-6 p-4 lg:p-6">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mb-3 lg:mb-4">
          <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <h4 className="font-bold font-montserrat text-base lg:text-lg mb-1 lg:mb-2">{review.name}</h4>
        <div className="flex mb-2 lg:mb-3">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-4 w-4 lg:h-5 lg:w-5 ${
                i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-600'
              }`}
            />
          ))}
          {review.rating % 1 !== 0 && (
            <StarIcon 
              className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400" 
              style={{ clipPath: `inset(0 ${100 - (review.rating % 1) * 100}% 0 0)` }} 
            />
          )}
        </div>
        
        <p className="text-gray-300 font-montserrat leading-relaxed mb-3 lg:mb-4 italic text-sm lg:text-base">
          {review.text}
        </p>
        
        <div className="w-12 lg:w-16 h-0.5 bg-white bg-opacity-20 mb-2 lg:mb-3"></div>
        
        <p className="text-xs lg:text-sm text-gray-400">{review.date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
