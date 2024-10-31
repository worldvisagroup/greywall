"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col">
      <Image
        src="/images/bg-svg.svg"
        alt="Background"
        fill
        sizes="(max-width: 1000px) 100vw, (max-width: 1000px) 50vw, 33vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0  z-10" />

      <div className="relative z-20 flex-grow flex flex-col text-black">
        <header className="p-4 md:p-6 relative flex justify-between items-center">
          <div className="relative z-20"></div>
          <button
            className="text-[#FAEFE6] z-20 absolute top-[26px] sm:top-[86px] right-[20px] sm:right-[40px] w-[48px] h-[48px]"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <Menu className="h-[36px] w-[36px] sm:h-[44px] sm:w-[44px]" />
          </button>
        </header>
        <style jsx>{`
          @media (max-width: 768px) {
            .mobile-spacing {
              margin-top: 8vh;
            }
            .mobile-spacing-sm {
              margin-top: 4vh;
            }
          }
        `}</style>

        <main className="flex-grow flex flex-col items-start justify-center text-left px-6 md:px-24">
          <h1 className="text-[50px] md:text-[65px] lg:text-[120px] font-bold md:mt-[9%] mb-4 md:mb-8 w-full font-goldenPlainsDemo text-[#FFEDE6]">
            The Grey Wall
          </h1>
          <p className="text-lg my-7 md:text-xl mb-[2%] md:mb-[4%] text-[#FFEDE6]">
            <span className="mr-2 font-montserrat">ARCHITECTURE</span> |{" "}
            <span className="mx-2 font-montserrat">CIVIL</span> |{" "}
            <span className="lg:mx-2 font-montserrat">INTERIORS</span>
          </p>
          <Button
            variant="outline"
            className="px-6 my-8 font-montserrat md:px-9 py-4 md:py-6 text-black bg-[#DDDDDD] hover:bg-[#313131] hover:text-[#DDDDDD] rounded-none transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg hover:border-none"
            onClick={scrollToContact}
          >
            Contact us
          </Button>
          <ChevronDown
            size={24}
            className="text-[#FFEDE6] md:mt-[2%] ml-0 md:ml-[3%]"
          />
        </main>
      </div>
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        projectRef="project"
        serviceRef="service"
        contactRef="contact"
        aboutRef="aboutus"
      />
    </div>
  );
}
