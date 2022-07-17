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
import Projects from "./Components/Layout/Projects/Projects";

function App() {
  const [landed, setLanded] = useState(false);

  useEffect(() => {
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
        <Header />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        doloribus consequuntur asperiores aliquid officiis voluptatum dolore
        quis veniam at facilis modi excepturi debitis tempore, a sit nemo
        obcaecati ipsum neque iusto nostrum qui saepe? Modi dignissimos sapiente
        natus ducimus optio eligendi suscipit, sed doloremque! Exercitationem
        suscipit, officiis nobis rem dicta at praesentium, sed consectetur quos,
        nihil iste adipisci quam eius similique animi minus nemo rerum sapiente.
        Aut labore aspernatur iure cum, doloribus consequuntur, nobis amet
        debitis voluptas corporis excepturi animi saepe quia ut impedit ducimus
        qui atque fugiat sapiente? Quod sit totam pariatur reprehenderit earum
        commodi beatae minima enim vel quo, fugiat veritatis ex error modi
        repellendus voluptatum facilis qui esse quae est a labore
        necessitatibus. Corrupti, culpa iste! Corrupti pariatur, accusantium
        praesentium, enim facere optio, non necessitatibus excepturi ullam
        delectus rerum reprehenderit inventore mollitia distinctio blanditiis
        culpa autem cupiditate soluta nam explicabo itaque nemo veniam eligendi
        voluptatem. Nihil cum beatae accusantium voluptatibus eligendi, voluptas
        esse iusto illo pariatur laudantium perferendis? Placeat blanditiis
        fugiat ab praesentium, incidunt, voluptates perspiciatis commodi
        accusamus cupiditate qui fuga maiores recusandae vel veniam quo
        obcaecati dolor officia architecto debitis nam! A dolores harum nostrum
        error expedita exercitationem enim modi molestiae. Animi et aspernatur
        nobis placeat?
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
