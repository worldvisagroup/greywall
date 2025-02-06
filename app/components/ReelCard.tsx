"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ReelCard = ({ reelUrl, coverImage }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="w-[252px] h-[418px] rounded-lg shadow-lg flex flex-row justify-center mx-auto">
      {isVideoPlaying ? (
        <video
          className="w-full h-full object-cover"
          src={reelUrl}
          controls={false}
          muted
          autoPlay
        />
      ) : (
        <div className="relative overflow-hidden">
          <Image
            src={coverImage}
            alt="CoverImage"
            width={500}
            height={500}
            className="object-fill"
          />
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={handlePlayButtonClick}
          >
            <Play className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ReelCard;
