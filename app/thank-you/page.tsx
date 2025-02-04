import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="relative mx-auto min-h-screen">
      {/* Background Image */}
      <Image
        src="/images/bg-svg.svg"
        alt="Background"
        fill
        className="object-cover"
      />

      <header className="p-4 md:p-6 relative flex justify-between items-center z-20">
        <div className="absolute left-0 top-0 z-30 md:w-[257px] md:h-[111px] w-[150px] h-[90px]">
          <Image
            src="/logo/The-greywall-logo.svg"
            alt="Logo"
            width={500}
            height={500}
          />
        </div>
        <Link
          href="/interior-designers"
          className="absolute right-4 lg:top-5 md:top-5 top-4 text-[#FAEFE6] rounded-full p-2 border border-[#FAEFE6]"
          aria-label="Home"
        >
          <Home size={20} />
        </Link>
      </header>

      {/* Content */}
      <div className="flex items-center justify-center relative min-h-[80vh]">
        <div className="absolute text-center font-literata text-[#FFEDE6] md:text-5xl text-4xl lg:text-8xl">
          Thank you for your submission
        </div>
        <div className="absolute text-center font-literata text-[#FFEDE6] md:text-3xl text-xl lg:text-5xl lg:mt-[16%] md:mt-[20%] mt-[46%]">
          We will contact you shortly!
          <div className="lg:mt-4 md:text-2xl text-lg lg:text-3xl flex items-center justify-center gap-4">
            Follow us on with
            <div className="flex gap-[28px] py-[12px]">
              <a
                href="https://www.instagram.com/the_greywall_interiors/"
                className="transition-transform hover:scale-110 hover:text-[#1877F2]"
                target="_blank"
              >
                <Image
                  src="/icons/fb.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="transition-transform hover:scale-110 hover:text-[#E1306C]"
                href="https://www.facebook.com/thegreywallinteriors/"
                target="_blank"
              >
                <Image
                  src="/icons/insta.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-[30px] w-[30px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
