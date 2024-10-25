import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <div>
      <HomePage />
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
        <Contact />
      </div>
    </div>
  );
}
