import "./Config.scss";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Navbar from "./Components/Layout/Navbar/Navbar";
import LoadingEffect from "./Components/LoadingEffect/LoadingEffect";
import { useEffect, useState } from "react";

function App() {
  const [effect, setEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEffect(false);
    }, 2000);
  }, []);

  return effect ? (
    <LoadingEffect />
  ) : (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default App;
