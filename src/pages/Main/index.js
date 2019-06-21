import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Blog from "../../components/Blog";
import Portfolio from "../../components/Porfolio";
import Bio from "../../components/Bio";
import "./styles.css"; // Estilos globais adicionados
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const Main = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Blog />
      <Portfolio />
      <Bio />
      <Contact />
      <Footer />
    </>
  );
};
export default Main;