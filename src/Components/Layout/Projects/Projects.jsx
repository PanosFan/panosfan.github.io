import "./Projects.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section data-aos="fade-up" id="projects">
      <h4>Projects</h4>
    </section>
  );
};

export default Projects;
