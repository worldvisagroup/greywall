import React from "react";
import Homepage from "../components/HomePage";
import WorkPortfolio from "../components/WorkPortfolio";
import { AboutUslandingPage } from "../components/AboutUsLandingPage";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";
import HowWeWork from "../components/HowWeWork";
import VideoTestimonials from "../components/VideoTestimonials";

const Page = () => {
  return (
    <div>
      <Homepage isLandingPage={true} />
      <WorkPortfolio />
      <HowWeWork />
      <VideoTestimonials />
      <AboutUslandingPage />
      <WhyChooseUs />
      <Testimonials isLandingPage={true} />
      <FAQ />
      <Contact isLandingPage={true} />
    </div>
  );
};

export default Page;
