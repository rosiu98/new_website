import React from "react";
import About from "../Components/About";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <>
      <Header/>
      <About />
      <Projects />
      <Contacts />
      <Footer/>
    </>
  );
};

export default Home;
