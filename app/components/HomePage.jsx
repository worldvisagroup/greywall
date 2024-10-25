"use client";

import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen bg-gray-90 text-white flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg1-9ZH3bB652MI58rlS0bFlgTNErsKU34.png')",
        }}
      />

      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      <div className="relative z-20 flex-grow flex flex-col text-black">
        <header className="p-4 md:p-6 relative flex justify-between items-center">
          <div className="relative z-20">
            {/* <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-HDwHuLrPJ68UhSQrQyQMqXWFFGztmK.svg"
              alt="The Grey Wall Logo"
              className="w-[180px] my-4 h-[77px] md:w-[214px] md:h-[92px]"
            /> */}
          </div>
          <button
            className="text-white z-20 absolute top-[26px] sm:top-[86px] right-[20px] sm:right-[40px] w-[48px] h-[48px]"
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
          <h1 className="text-4xl md:text-7xl font-light md:mt-[9%] mb-4 md:mb-8 w-full ">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20grey%20wall-qwxHhjmVSe1TvNLb3628H58MGntEDu.svg"
              alt="The Grey Wall"
              className="w-full max-w-lg md:max-w-2xl"
              width={500}
              height={500}
            />
          </h1>
          <p className="text-lg my-7 md:text-xl mb-[2%] md:mb-[4%] text-[#FFEDE6]">
            <span className="mr-2">ARCHITECTURE</span> |{" "}
            <span className="mx-2">CIVIL</span> |{" "}
            <span className="mx-2">INTERIORS</span>
          </p>
          <Button
            variant="outline"
            className="
    px-6 my-8 md:px-9 py-4 md:py-6 text-black bg-[#DDDDDD]
    hover:bg-[#313131] hover:text-[#DDDDDD]
    rounded-none
    transition-all duration-300 ease-in-out
    transform hover:-translate-y-2 hover:shadow-lg
    hover:border-none
  "
            onClick={() => {
              setTimeout(() => {
                if (contactRef && contactRef.current) {
                  contactRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                } else {
                  console.error("Contact section ref is not available.");
                }
              }, 100);
            }}
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
