import "./Config.scss";
import { useEffect, useState } from "react";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Navbar from "./Components/Layout/Navbar/Navbar";
import About from "./Components/Layout/About/About";
import Contact from "./Components/Layout/Contact/Contact";
import Skills from "./Components/Layout/Skills/Skills";
import LandingEffect from "./Components/LandingEffect/LandingEffect";
import Aside from "./Components/Layout/Aside/Aside";

function App() {
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLanded(false);
    }, 2300);
  }, []);

  const toggleLightMode = () => document.body.classList.toggle("light");

  return landed ? (
    <LandingEffect />
  ) : (
    <>
      <button onClick={toggleLightMode}>Test</button>
      <Navbar />
      <Aside />
      <main className="container">
        <Header />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
