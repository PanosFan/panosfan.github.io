import "./Config.scss";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Layout/Footer/Footer";
import Hero from "./Components/Layout/Hero/Hero";
import Navbar from "./Components/Layout/Navbar/Navbar";
import About from "./Components/Layout/About/About";
import Contact from "./Components/Layout/Contact/Contact";
import Skills from "./Components/Layout/Skills/Skills";
import LandingEffect from "./Components/LandingEffect/LandingEffect";
import Aside from "./Components/Layout/Aside/Aside";
import Projects from "./Components/Layout/Projects/Projects";

function App() {
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1500, once: true, offset: 200 });
    setTimeout(() => {
      setLanded(false);
    }, 2300);
  }, []);

  // const toggleLightMode = () => document.body.classList.toggle("light");

  return landed ? (
    <LandingEffect />
  ) : (
    <>
      {/* <button onClick={toggleLightMode}>Test</button> */}
      <Navbar />
      <Aside />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
