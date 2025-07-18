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
  { name: "React", icon: FaReact, color: "text-sky-400" },
  { name: "NodeJS", icon: FaNodeJs, color: "text-green-700" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-900" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-teal-400" },
  { name: "C++", icon: TbBrandCpp, color: "text-blue-700" },
  { name: "Python", icon: FaPython, color: "text-blue-500" },
];


  return (
    <div className="m-4" id="skills">
      <h1 className="text-2xl mb-3">Skills</h1>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div key={index} className={`flex flex-col items-center ${skill.name==="Express.js" && ("dark:text-white")} ${skill.color}`}>
            <skill.icon size={35}  />
            <p className="font-outfit font-extralight">{skill.name}</p>
          </div>
        ))}
      </div>
      {/* style={skill.name==="Express.js"?{color: "white"}: { color: skill.color }} */}
    </div>
  );
};

export default Skills;
