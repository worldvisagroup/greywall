import React from "react";
import Homepage from "../components/HomePage";
import WorkPortfolio from "../components/WorkPortfolio";
import { HowWeWork } from "../components/HowWeWork";
import { AboutUslandingPage } from "../components/AboutUsLandingPage";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";

const Page = () => {
  return (
    <div>
      <Homepage isLandingPage={true} />
      <WorkPortfolio />
      <HowWeWork />
      <WhyChooseUs />
      <AboutUslandingPage />
      <FAQ />
      <Testimonials isLandingPage={true} />
      <Contact isLandingPage={true} />
    </div>
  );
};

export default Page;
