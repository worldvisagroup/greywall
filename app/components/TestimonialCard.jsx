import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Image from 'next/image';

const TestimonialCard = ({ review }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalfIcon key={i} className="h-4 w-4 text-yellow-400" />);
      } else {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-gray-600" />);
      }
    }

    return stars;
  };

  return (
    <div className="bg-transparent text-white max-w-xs lg:max-w-sm mx-auto mb-6">
      <div className="flex items-center text-left">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image src={review.image} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-base mb-1">{review.name}</h4>
          <div className="flex mb-2">
            {renderStars(review.rating)}
          </div>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mt-3 text-sm">
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
  );
};

export default TestimonialCard;
