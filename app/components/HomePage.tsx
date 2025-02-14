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
    <div className="relative lg:px-6 min-h-screen text-white flex flex-col overflow-hidden">
      <Image
        src="/images/bg-svg.svg"
        alt="Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 z-10" />

      {/* Logo Section */}
      {isLandingPage && (
        <div className="absolute md:left-[8%] left-[5%] top-5 md:top-10 z-30 md:w-[257px] md:h-[111px] w-[150px] h-[90px]">
          <Image
            src="/logo/new_logo.svg"
            alt="Logo"
            width={1000}
            height={1000}
          />
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
                ? "flex flex-grow lg:flex-row sm:flex-col md:flex-col flex-col justify-evenly min-h-screen gap-12 items-center"
                : "justify-center text-left px-6 md:px-24 flex-grow flex flex-col items-start"
            }`
          )}
        >
          <div>
            {isLandingPage ? (
              <div className="lg:space-y-8 md:space-y-5 space-y-4 flex flex-col lg:items-center md:items-center lg:text-center md:text-center text-center items-center px-4 mt-[40%] md:mt-[30%] lg:mt-[20%]">
                {/* Heading Section */}
                <div className="lg:space-y-6 md:space-y-3 space-y-3">
                  <h3 className="text-[#CDCDCD] text-2xl md:text-3xl lg:text-5xl font-serif">
                    YOUR <span className="text-white">SPACE</span> SPEAKS{" "}
                    <span className="text-white">YOUR STORY !</span>
                  </h3>
                </div>
                <p className="text-[#FFEDE6] lg:text-xl md:text-lg text-sm lg:w-[681px] font-montserrat ">
                  From luxurious homes to modern workspaces, we specialize in
                  creating sophisticated, functional, and bespoke interiors
                  tailored to your unique vision
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
            <div className="md:mb-10 lg:mb-0 mb-10 mx-auto">
              <ContactForm
                schema={ContactSchema}
                defaultValues={{
                  name: "",
                  phoneNumber: "",
                  // location: "",
                  projectType: "",
                  budget: "",
                }}
                options={{
                  projectType: [
                    { value: "2BHK", label: "2BHK" },
                    { value: "3BHK", label: "3BHK" },
                    {
                      value: "Villa/Independent House",
                      label: "Villa/Independent House",
                    },
                    { value: "Commercial Space", label: "Commercial Space" },
                  ],
                  budget: [
                    { value: "10-20", label: "10-20 Lac" },
                    { value: "20-30", label: "20-30 Lac" },
                    { value: "30-40", label: "30-40 Lac" },
                    { value: "40+", label: "40 Lac +" },
                  ],
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
