"use client";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const VideoTestimonials = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="bg-[#FFF1EC] min-h-screen w-full flex sm:flex-row flex-col py-20 sm:justify-evenly justify-center items-center overflow-hidden relative">
        <div className="w-[343px] h-[617px] relative p-2">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/djvvz62dw/video/upload/v1739535168/greywall/Testimonial%20Video/Testimonial_video_for_landing_page_h7aodu.mp4"
            className="object-cover rounded-lg "
            muted
            playsInline
          />
          <button
            onClick={toggleMute}
            className="absolute lg:bottom-10 md:bottom-14 bottom-12 right-5 bg-black text-white p-2 rounded-full"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
        <div className="text-[#2C2C2C]">
          <p className=" sm:text-3xl text-2xl font-medium">Witness the</p>
          <p className="lg:text-6xl md:text-5xl text-4xl font-medium my-4">Transformation!</p>
        </div>
    </div>
  );
};

export default VideoTestimonials;
