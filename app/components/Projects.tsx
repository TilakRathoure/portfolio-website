import React, { useContext } from "react";
import { FaGithubSquare } from "react-icons/fa";
import ezshiksha from "../../assets/shiksha.png";
import cryptify from "../../assets/crypto.png";
import Image, { StaticImageData } from "next/image";
import python from "../../assets/cosmic.png";
import shop from "../../assets/Screenshot 2025-08-09 022940.png";
import Contextfirst from "../Theme";
import finuera from "@/assets/finuera.png";

const Projects = () => {
  const { mode } = useContext(Contextfirst)!;
  interface Projects {
    name: string;
    about: string;
    code: string;
    link: string;
    date: string;
    image: StaticImageData;
    tech: { name: string }[];
  }

  const projects: Projects[] = [
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
      link: "https://dashcartmern.netlify.app/",
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

  return (
    <div id="projects" className="mt-10">
      <h1 className="text-[20px] flex items-center gap-5 text-center mb-4">
        Projects{" "}
        <span>
          <a target="_blank" href="https://github.com/TilakRathoure">
            <FaGithubSquare size={30} />
          </a>
        </span>
      </h1>
      <div className="flex justify-center gap-5 mb-0 flex-wrap w-full">
        {projects.map((e, i) => (
          <a
            target="_blank"
            key={i}
            href={e.link}
            className={`${
              mode === "light" ? "" : " shadow-slate-700"
            } shadow-lg rounded-lg w-full sm:w-[48%] pb-2 max-w-[421px]`}
          >
            <Image
              src={e.image}
              className="w-full object-cover lg:object-top rounded-lg"
              alt="projects"
            />
            <div className="flex flex-col gap-3 w-full p-3">
              <h1 className="relative">
                {e.name}
                <p className="absolute right-0 top-0 font-extralight">
                  {e.date}
                </p>
              </h1>
              <p className="font-light">{e.about}</p>
              <div className="flex gap-2 flex-wrap">
                {e.tech.map((e, i) => (
                  <div
                    key={i}
                    className={` text-sm font-extralight rounded-lg px-2  ${
                      mode != "dark" ? "bg-gray-200" : "bg-gray-700"
                    }`}
                  >
                    {e.name}
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-end gap-3">
                {e.name !== "Cosmic-Conquest" && (
                  <a href={e.link} target="_blank">
                    Live Demo
                  </a>
                )}
                <a href={e.code} target="_blank">
                  View Code
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
