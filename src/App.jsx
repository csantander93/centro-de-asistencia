import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/sections/section-about/About";
import Principal from "./components/sections/section-principal/Principal";
import Features from "./components/sections/section-features/Features";
import Services from "./components/sections/section-services/Services";
import Contact from "./components/sections/section-contact/Contact";
import Featured from "./components/sections/section-featured/featured";
import Client from "./components/sections/section-client/Client";
import Faq from "./components/sections/section-faq/Faq";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones en milisegundos
      once: true, // Las animaciones solo ocurren una vez
    });
  }, []);

  return (
    <>
      <Header />
      <Principal />
      <Featured />
      <About />
      <Features />
      <Services />
      <Client />
      <Faq/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
