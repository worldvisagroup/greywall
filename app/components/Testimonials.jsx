import { load } from 'outstatic/server';
import TestimonialSlider from "./TestimonialSlider";


const Testimonials = async () => {
  const testimonials = await getReviews();
  const OPTIONS = { slidesToScroll: 'auto' }

  return (
    <div id="testimonials" className="bg-[#383838] py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto my-7">
        <h1 className="text-[#FFEDE6] text-4xl mb-10 lg:text-6xl font-tenPearl lg:mb-[8%] text-center">
          <span className="relative">
            Tes
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
          </span>
          <span>timonials</span>
        </h1>
        <TestimonialSlider slides={testimonials} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Testimonials;


export async function getReviews() {
  const db = await load();

  const reviews = await db
    .find({ collection: "reviews" }, [
      "title",
      "coverImage",
      "ratings",
      "content"
    ])
    .toArray();

  return reviews.reverse();
}