"use client";
import { useRef } from "react";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import Project2 from "./components/Project2";
import Service from "./components/Service";
import Contact from "./components/Contact";

export default function Home() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HomePage
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectRef={projectRef} i
        serviceRef={serviceRef}
        contactRef={contactRef}
      />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
