import React, { useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import devslane from "../../assets/devslane_logo.jpg";
import Image from "next/image";
import Contextfirst from "../Theme";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { setImage } = useContext(Contextfirst)!;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const educationDetails = [
    {
      img: devslane,
      alt: "DevsLane",
      duration: "Jun 2024 - Aug 2024",
      institution: "DevsLane",
      description: "Fullstack Developer Trainee",
      link: "https://devslane.com/",
      additional: [
        "Selected on-campus as Full-Stack Developer Trainee; gained hands-on experience in React, Redux, TypeScript, Node.js, Tailwind CSS & RESTful APIs",
        "Delivered 2 major and 5 minor projects, including a scalable e-commerce platform with auth & state management",
        "Collaborated with 50+ peers to debug, solve issues, and enhance coding skills.",
      ],
    },
  ];

  return (
    <div id="experience" className="mb-6">
      <h1 className="text-[22px] py-3">Experience</h1>
      <div className="flex flex-col gap-6">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-300 dark:border-gray-700 shadow-sm"
          >
            <button
              onClick={() => {
                setImage((prev) => !prev);
                toggle(index);
              }}
              className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100"
            >
              <div className="flex items-center gap-3">
                <a href={edu.link} target="_blank">
                  <Image
                    alt="company"
                    src={edu.img}
                    className="h-9 w-9 object-cover"
                  />
                </a>
                <div>
                  <div>{edu.institution}</div>
                  <div className="font-normal">{edu.description}</div>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Animated content */}
            <div
              className={`px-4 text-md pl-[60px] transition-all duration-300 overflow-hidden font-extralight ${
                openIndex === index ? "max-h-[250px] pb-2" : "max-h-0"
              }`}
            >
              {edu.additional.map((e, i) => (
                <div key={i} className="flex gap-2 items-center justify-start">
                  <p className="self-start">-</p>
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
