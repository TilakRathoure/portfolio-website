import React from "react";
import Image from "next/image";
import devslane from "../../assets/devslane_logo.jpg";

const Experience = () => {
  const educationDetails = [
    {
      img: devslane,
      alt: "DevsLane",
      duration: "Jun 2024 - Aug 2024",
      institution: "DevsLane",
      description: "Fullstack Developer Trainee",
      additional: {
        first:
          "- Gained hands-on experience with React, Redux, TypeScript, and API integration.",
        second:
          "- Built an e-commerce site with state management and authentication, collaborating with peers to solve problems.",
      },
    },
  ];

  return (
    <div id="experience" className="mb-6">
      <h1 className="text-[22px] py-3">Experience</h1>
      <div className="flex flex-col gap-6">
        {educationDetails.map((edu, index) => (
          <div key={index}>
            <a href="https://devslane.com">
            <div className="flex items-center gap-3">
              <Image
                src={edu.img}
                className="h-[45px] w-[37px]"
                alt={edu.alt}
              />
              <div className="relative w-full">
                <p className="absolute top-0 right-0 font-extralight text-gray-700">
                  {edu.duration}
                </p>
                <p className="text-lg">{edu.institution}</p>
                <span className="font-extralight">{edu.description} </span>
              </div>
            </div>
            </a>
            <div className="ml-16 font-extralight">
                <div> {edu.additional.first}</div>
                <div> {edu.additional.second}</div>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
