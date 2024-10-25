"use client";
import React, { useRef } from 'react'
import HomePage from './HomePage'


const MainPage = () => {
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
        aboutRef={aboutRef}
        projectRef={projectRef}
        serviceRef={serviceRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
        />
     <div ref={aboutRef}>
        <AboutUs />
     </div>
     {/* <div ref={projectRef}>
        <Project />
     </div> */}
     <div ref={serviceRef}>
        <Service />
     </div>
     <div ref={contactRef}>
        <Contact />
     </div>

    </div>
  )
}

export default MainPage