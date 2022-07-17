import "./About.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section data-aos="fade-up" id="about">
      <h4>About</h4>
    </section>
  );
};

export default About;
