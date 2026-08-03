"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import ezshiksha from "@/assets/shiksha.png";
import cryptify from "@/assets/crypto.png";
import Image from "next/image";
import python from "@/assets/cosmic.png";
import shop from "@/assets/Screenshot 2025-08-09 022940.png";
import finuera from "@/assets/finuera.png";
import SectionReveal from "./SectionReveal";
import { Project } from "@/types";

const projects: Project[] = [
  {
    name: "Finuera",
    about:
      "AI finance assistant leveraging Next.js, LLMs, and Vercel AI SDK with an integrated chatbot, delivering real-time insights, multi-format data analysis, and interactive dashboards with secure authentication.",
    date: "July 2025",
    code: "https://github.com/TilakRathoure/Finuera",
    link: "https://finuera.vercel.app/",
    image: finuera,
    tech: [
      { name: "Next.js" },
      { name: "AuthJS" },
      { name: "LLM" },
      { name: "GenAI" },
      { name: "Shadcn UI" },
      { name: "TypeScript" },
    ],
  },
  {
    name: "DashCart",
    about:
      "MERN e-commerce platform with admin dashboard, Firebase auth, Stripe payments, Cloudinary storage, CRUD operations, and real-time analytics via Chart.js for efficient user, product, and order management.",
    date: "January 2025",
    code: "https://github.com/TilakRathoure/ShopHere-ecommerce",
    link: "https://dash-cart-ecommerce.vercel.app/",
    image: shop,
    tech: [
      { name: "Typescript" },
      { name: "React" },
      { name: "Firebase" },
      { name: "Stripe" },
      { name: "MongoDB" },
      { name: "Redux Toolkit" },
    ],
  },
  {
    name: "EzShiksha",
    about:
      "Transforming education with AI-powered solutions: instant math help, concise notes, and text extraction. Empowering students to learn efficiently, collaborate effectively, and access education universally.",
    date: "September 2024",
    code: "https://github.com/TilakRathoure/EzShiksha",
    link: "https://ez-shiksha.vercel.app/",
    image: ezshiksha,
    tech: [
      { name: "Python" },
      { name: "React" },
      { name: "MongoDB" },
      { name: "ExpressJs" },
      { name: "Nodejs" },
    ],
  },
  {
    name: "Cryptify",
    about:
      "React-powered platform offering crypto trading insights, real-time updates, exchange comparisons, and interactive charts for informed decisions.",
    date: "April 2024",
    code: "https://github.com/TilakRathoure/Cryptify",
    link: "https://tilakrathoure.github.io/Cryptify/",
    image: cryptify,
    tech: [
      { name: "React" },
      { name: "Javascript" },
      { name: "TailwindCss" },
    ],
  },
  {
    name: "Cosmic-Conquest",
    about:
      "A fun Python game built with Pygame, where players defend Earth from aliens using a rocket launcher.",
    date: "March 2024",
    code: "https://github.com/TilakRathoure/Cosmic-Conquest",
    link: "https://github.com/TilakRathoure/Cosmic-Conquest",
    image: python,
    tech: [{ name: "Python" }, { name: "pygame" }],
  },
];

const Projects = () => {
  return (
    <SectionReveal id="projects" className="section-block">
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h2 className="section-title mb-0">Projects</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/TilakRathoure"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          aria-label="GitHub profile"
        >
          <FaGithub size={18} />
          GitHub
        </a>
      </div>
      <p className="section-support">
        Selected work across AI products, platforms, and experiments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col border-b border-border pb-8"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              className="block overflow-hidden mb-4"
            >
              <Image
                src={project.image}
                className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                alt={project.name}
              />
            </a>
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <h3 className="font-ovo text-xl">{project.name}</h3>
              <span className="text-sm text-muted font-light whitespace-nowrap">
                {project.date}
              </span>
            </div>
            <p className="font-light text-[0.95rem] leading-relaxed text-foreground/85 mb-3">
              {project.about}
            </p>
            <p className="text-sm text-muted font-light mb-4">
              {project.tech.map((t) => t.name).join(" · ")}
            </p>
            <div className="mt-auto flex gap-4 text-sm">
              {project.name !== "Cosmic-Conquest" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-foreground/30 pb-0.5 transition-colors hover:border-accent hover:text-accent"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-foreground/30 pb-0.5 transition-colors hover:border-accent hover:text-accent"
              >
                View Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
};

export default Projects;
