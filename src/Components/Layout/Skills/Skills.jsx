import "./Skills.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section data-aos="fade-up" id="skills">
      <h4>Skills</h4>
    </section>
  );
};

export default Skills;
