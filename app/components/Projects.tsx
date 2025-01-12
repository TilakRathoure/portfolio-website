import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import ezshiksha from "../../assets/shiksha.png";
import cryptify from "../../assets/crypto.png";
import Image, { StaticImageData } from "next/image";
import python from "../../assets/cosmic.png";

const Projects = () => {
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
      name: "EzShiksha",
      about:
        "EzShiksha is transforming education with AI-powered solutions: instant math help, concise notes, and text extraction. Empowering students to learn efficiently, collaborate effectively, and access education universally.",
      date: "March 2024",
      code: "https://github.com/TilakRathoure/EzShiksha",
      link: "/",
      image: ezshiksha,
      tech: [
        { name: "ExpressJs" },
        { name: "ExpressJs" },
        { name: "ExpressJs" },
      ],
    },
    {
      name: "EzShiksha",
      about:
        "EzShiksha is transforming education with AI-powered solutions: instant math help, concise notes, and text extraction. Empowering students to learn efficiently, collaborate effectively, and access education universally.",
      date: "March 2024",
      code: "https://github.com/TilakRathoure/EzShiksha",
      link: "/",
      image: cryptify,
      tech: [
        { name: "ExpressJs" },
        { name: "ExpressJs" },
        { name: "ExpressJs" },
      ],
    },
    {
      name: "EzShiksha",
      about:
        "EzShiksha is transforming education with AI-powered solutions: instant math help, concise notes, and text extraction. Empowering students to learn efficiently, collaborate effectively, and access education universally.",
      date: "March 2024",
      code: "https://github.com/TilakRathoure/EzShiksha",
      link: "/",
      image: python,
      tech: [
        { name: "ExpressJs" },
        { name: "ExpressJs" },
        { name: "ExpressJs" },
      ],
    },
    {
      name: "EzShiksha",
      about:
        "EzShiksha is transforming education with AI-powered solutions: instant math help, concise notes, and text extraction. Empowering students to learn efficiently, collaborate effectively, and access education universally.",
      date: "March 2024",
      code: "https://github.com/TilakRathoure/EzShiksha",
      link: "/",
      image: ezshiksha,
      tech: [
        { name: "ExpressJs" },
        { name: "ExpressJs" },
        { name: "ExpressJs" },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-[20px] flex items-center gap-5 text-center">
        Projects{" "}
        <span>
          <FaGithubSquare />
        </span>
      </h1>
      <div className="flex gap-4 mb-0 flex-wrap w-full">
        {projects.map((e, i) => (
          <a key={i} href={e.link} className="shadow-lg rounded-lg w-full sm:w-[48%]">
            <Image
              src={e.image}
              className="w-full h-1/2 object-cover rounded-lg"
              alt="projects"
            />
            <div className="w-full h-1/2 sm:h-auto p-3">
              <p>{e.name}</p>
              <p>{e.date}</p>
              <p className="font-light">{e.about}</p>
              <div className="flex gap-2 flex-wrap">
                {e.tech.map((e, i) => (
                  <div key={i} className="text-sm font-extralight rounded-lg px-2  bg-gray-200">
                    {e.name}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
