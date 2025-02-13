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
    <div className="bg-transparent text-[#FFEDE6] max-w-xs lg:max-w-sm mx-auto mb-6">
      <div className="flex items-center text-left gap-[12px]">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image src={review.coverImage} alt={review.title} className="w-full h-full object-cover bg-white" width={200} height={200} />
        </div>
        <div>
          <h4 className="font-bold text-base mb-1">{review.title}</h4>
          <div className="flex mb-2">
            {renderStars(review.ratings)}
          </div>
        </div>
      </div>
      <p className="text-[#FFEDE6] font-montserrat leading-relaxed mt-3 text-sm">
        &ldquo;{review.content}&rdquo;
      </p>
    </div>
  );
};

export default TestimonialCard;
