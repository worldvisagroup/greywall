'use client';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { DotButton, useDotButton } from "./EmblaCarousalDotButton";
import TestimonialCard from './TestimonialCard';
import "./TestimonialSlider.css";

const TestimonialSlider = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);


  const { scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((review, index) => (
            <div key={index} className="embla__slide">
              <div className='embla__slide__number'>
                <TestimonialCard review={review} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <button
            className={`bg-[#FFEDE6] text-[#333333] rounded-full p-3 ${!canScrollPrev ? "opacity-50" : ""
              }`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ArrowBackIos className="w-6 h-6" />
          </button>
          <button
            className={`bg-[#FFEDE6] text-[#333333] rounded-full p-3 ${!canScrollNext ? "opacity-50" : ""
              }`}
            onClick={scrollNext}
            disabled={!canScrollNext}>
            <ArrowForwardIos className="w-6 h-6" />
          </button>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
