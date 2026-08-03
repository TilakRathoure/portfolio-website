"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Contactform from "@/components/Contactform";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import ResearchPaper from "@/components/ResearchPaper";
import Contextfirst from "@/Theme";

const Page = () => {
  const [mode, Setmode] = useState<string>("dark");
  const [image, setImage] = useState<boolean>(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    Setmode(isDark ? "dark" : "light");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", mode);
  }, [mode, ready]);

  return (
    <Contextfirst.Provider value={{ mode, Setmode, image, setImage }}>
      <div className="page-shell min-h-screen">
        <div className="px-5 sm:px-10 lg:px-16 xl:px-28 max-w-[1200px] mx-auto">
          <Navbar />
          <div className="flex flex-col gap-16 md:gap-20 pb-16 md:pb-20">
            <Header />
            <Experience />
            <ResearchPaper />
            <Skills />
            <Projects />
            <Education />
            <Contactform />
          </div>
        </div>
        <Footer />
      </div>
    </Contextfirst.Provider>
  );
};

export default Page;
