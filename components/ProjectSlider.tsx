"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Arrows from "./Arrows";

function ProjectSlider({
  title,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      breakpoints: {
        "(min-width: 100px)": {
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
        "(min-width: 600px)": {
          slides: {
            perView: 2,
            spacing: 10,
          },
        },
        "(min-width: 1200px)": {
          slides: {
            perView: 3,
            spacing: 16,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider?.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        <p className="keen-slider__slide"></p>
        <div key={title}>
          <h1 className="text-xl font-bold leading-10">{title}</h1>
          <div className="flex items-center gap-[12px]">
            {[imageOne, imageTwo, imageThree, imageFour, imageFive]
              .filter(Boolean)
              .map((image, index) => (
                <Image
                  key={index}
                  width={200}
                  height={200}
                  alt={`${title} - Image ${index + 1}`}
                  src={image}
                  className="h-[200px] w-[200px]"
                />
              ))}
          </div>
        </div>
      </div>
      instanceRef.current && (
      <>
        <Arrows
          left
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        />

        <Arrows
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={
            currentSlide ===
            instanceRef.current?.track?.details.slides?.length - 1
          }
        />
      </>
      )
    </div>
  );
}

export default ProjectSlider;
