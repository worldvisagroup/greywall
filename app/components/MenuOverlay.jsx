import { X } from "lucide-react";
import Link from "next/link";

export default function MenuOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-1/2 sm:w-1/3 lg:1/4 bg-[#FFEDE6] bg-opacity-95 z-50">
      <button
        className="absolute"
        style={{
          width: "32px",
          height: "32px",
          top: "32.13px",
          right: "32px",
        }}
        aria-label="Close menu"
        onClick={onClose}
      >
        <X size={32} className="text-[#383838] opacity-100" />
      </button>
      <nav
        className="absolute text-[#383838] text-2xl min-w-[calc(100%-118px)] h-[323px] top-[109px] left-[29px]  sm:left-[59px] flex flex-col gap-[42px] sm:gap-[65px] opacity-100"
      >
        {["aboutus", "project", "service", "contact"].map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className="block hover:text-[#535353e1]"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              const element = document.getElementById(section);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {section === "aboutus" ? "About us" :
              section === "project" ? "Projects" :
                section === "service" ? "Services" : "Contact us"}
          </Link>
        ))}
      </nav>
    </div>
  );
}
