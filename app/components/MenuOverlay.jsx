import { X } from "lucide-react";

export default function MenuOverlay({ isOpen, onClose, scrollToSection, projectRef, serviceRef, contactRef,aboutRef }) {
  if (!isOpen) return null;

  const handleNavClick = (ref) => {
    onClose();
    scrollToSection(ref);
  };

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
        <a href="#about" className="block hover:text-gray-300" onClick={() => handleNavClick(aboutRef)}>
          About us
        </a>
        <a href="#projects" className="block hover:text-gray-300" onClick={() => handleNavClick(projectRef)}>
          Projects
        </a>
        <a href="#services" className="block hover:text-gray-300" onClick={() => handleNavClick(serviceRef)}>
          Services
        </a>
        <a href="#contact" className="block hover:text-gray-300" onClick={() => handleNavClick(contactRef)}>
          Contact us
        </a>
      </nav>
    </div>
  );
}
