import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contactform from "./components/Contactform";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <div className="px-4 sm:px-12 xl:px-[200px]">
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Education />
        <Contactform />
      </div>
      <Footer />
    </>
  );
};

export default page;
