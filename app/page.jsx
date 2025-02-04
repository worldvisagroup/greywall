
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import { EnquiryContactFromSchema } from "@/validation";
import EnquiryContactForm from "./components/EnquiryContactForm";
export default function Home() {
  return (
    <div>
      <HomePage isLandingPage={false} />
      <div>
        <AboutUs />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
       <EnquiryContactForm />
      </div>
    </div>
  );
}
