import "./Config.scss";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Navbar from "./Components/Layout/Navbar/Navbar";
import LoadingEffect from "./Components/LoadingEffect/LoadingEffect";
import { useEffect, useState } from "react";
import Aside from "./Components/Layout/Aside/Aside";

function App() {
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEffect(false);
    }, 2000);
  }, []);

  return effect ? (
    <LoadingEffect />
  ) : (
    <>
      <Aside />
      <div className="container">
        <Navbar />
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
