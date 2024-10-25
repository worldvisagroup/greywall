import { X } from "lucide-react";

export default function MenuOverlay({ isOpen, onClose}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-1/2 bg-black bg-opacity-95 z-50">
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
        <X size={32} className="text-white opacity-100" />
      </button>
      <nav
        className="absolute text-white text-2xl"
        style={{
          width: "calc(100% - 118px)",
          height: "323px",
          top: "109px",
          left: "59px",
          display: "flex",
          flexDirection: "column",
          gap: "65px",
          opacity: 1,
        }}
      >
        {["aboutus", "project", "service", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="block hover:text-gray-300"
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
          </a>
        ))}
      </nav>
    </div>
  );
}
