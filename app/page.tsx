"use client";

import React, { useState,createContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contactform from "./components/Contactform";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";


export const Contextfirst = createContext(null);

const Page = () => {

    const [mode,Setmode]=useState<string>("dark");

useEffect(() => {
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [mode]);


  return (
    <>
    <Contextfirst.Provider value={{mode,Setmode}}>
<div className="px-4 sm:px-12 xl:px-[200px] bg-white dark:bg-black dark:text-white">

        <Navbar />
        <Header />
        <Experience/>
        <Skills />
        <Projects />
        <Education />
        <Contactform />
      </div>
      <Footer />

    </Contextfirst.Provider>
    </>
  );
};

export default Page;
