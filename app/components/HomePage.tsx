"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import ContactForm from "./ContactForm";
import { ContactSchema } from "@/validation";
import { cn } from "@/lib/utils";

interface Props {
  isLandingPage?: boolean;
}

export default function Homepage({ isLandingPage }: Props) {
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
        className="object-cover"
      />
      <div className="absolute inset-0 z-10" />

      {/* Logo Section */}
      {isLandingPage && (
        <div className="absolute left-[10%] top-20 md:top-24 z-30">
          <h1 className="font-serif text-3xl text-[#f3d5c1]">The Grey Wall</h1>
          <p className="text-white/80 tracking-widest text-sm">INTERIORS</p>
        </div>
      )}

      <div className="relative z-20 flex-grow flex flex-col text-black">
        {!isLandingPage && (
          <>
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
          </>
        )}

        <main
          className={cn(
            `${
              isLandingPage
                ? "flex flex-grow lg:flex-row md:flex-col flex-col justify-evenly min-h-screen gap-12 items-center"
                : "justify-center text-left px-6 md:px-24 flex-grow flex flex-col items-start"
            }`
          )}
        >
          <div>
            {isLandingPage ? (
              <div className="lg:space-y-6 md:space-y-5 space-y-4 flex flex-col lg:items-start md:items-center lg:text-start md:text-center text-center items-center px-4 mt-[50%] md:mt-[30%] lg:mt-[20%]">
                {/* Heading Section */}
                <div className="lg:space-y-4 md:space-y-3 space-y-3">
                  <h2 className="text-white/80 text-2xl md:text-3xl font-light">
                    Transform Your Space
                  </h2>
                  <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-serif">
                    With Stunning Interiors
                  </h3>
                </div>
                <p className="text-white/90 lg:text-lg md:text-lg text-sm max-w-xl">
                  From Elegant Homes To Modern Offices, We Create Stylish,
                  Functional, And Personalized Interiors.
                </p>
              </div>
            ) : (
              <>
                <h1 className="text-[50px] md:text-[65px] lg:text-[120px] font-bold md:mt-[9%] mb-4 md:mb-8 w-full font-northwell text-[#FFEDE6]">
                  The Grey Wall
                </h1>
                <p className="text-lg my-7 md:text-xl mb-[2%] md:mb-[4%] text-[#FFEDE6]">
                  <span className="mr-2 font-montserrat">ARCHITECTURE</span> |{" "}
                  <span className="mx-2 font-montserrat">CIVIL</span> |{" "}
                  <span className="lg:mx-2 font-montserrat">INTERIORS</span>
                </p>
              </>
            )}
          </div>
          {!isLandingPage && (
            <>
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
            </>
          )}
          {isLandingPage && (
            <div>
              <ContactForm
                schema={ContactSchema}
                defaultValues={{
                  name: "",
                  phoneNumber: "",
                  projectType: "",
                  budget: "",
                }}
                options={{
                  projectType: [
                    { value: "residential", label: "Residential" },
                    { value: "commercial", label: "Commercial" },
                    { value: "office", label: "Office" },
                  ],
                  budget: [
                    { value: "low", label: "Low" },
                    { value: "medium", label: "Medium" },
                    { value: "high", label: "High" },
                  ],
                }}
                onSubmit={() => {
                  return null;
                }}
              />
            </div>
          )}
        </main>
      </div>
      {!isLandingPage && (
        <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
      )}
    </div>
  );
}
