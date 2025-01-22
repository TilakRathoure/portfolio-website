import React from "react";
import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  interface Skill {
    name: string;
    icon: IconType;
    color: string; // New color property
  }

  const skills: Skill[] = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "NodeJS", icon: FaNodeJs, color: "#339933" },
    { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38B2AC" },
    { name: "C++", icon: TbBrandCpp, color: "#00599C" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
  ];

  return (
    <div className="m-4" id="skills">
      <h1 className="text-2xl mb-3">Skills</h1>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <skill.icon size={35} style={{ color: skill.color }} />
            <p className="font-outfit font-extralight">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
