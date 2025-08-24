import React from "react";
import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiTypescript,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  interface Skill {
    name: string;
    icon: IconType;
    color: string; // New color property
  }

const skills: Skill[] = [
  // 🔹 Frontend
  { name: "Nextjs", icon: RiNextjsFill, color: "" },
  { name: "React", icon: FaReact, color: "text-sky-400" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-teal-400" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-500" },

  // 🔹 Backend & Databases
  { name: "NodeJS", icon: FaNodeJs, color: "text-green-700" },
  { name: "Express.js", icon: SiExpress, color: "" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Firebase", icon: IoLogoFirebase, color: "text-orange-500" },

  // 🔹 Programming Languages
  { name: "C++", icon: TbBrandCpp, color: "text-blue-700" },
  { name: "Python", icon: FaPython, color: "text-blue-500" },

  // 🔹 Tools & DevOps
  { name: "Git", icon: FaGitAlt, color: "text-red-600" },
  { name: "GitHub", icon: FaGithub, color: "" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
];


  return (
    <div className="m-4" id="skills">
      <h1 className="text-2xl mb-3">Skills</h1>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${skill.color}`}
          >
            <skill.icon size={35} />
            <p className="font-outfit font-extralight">{skill.name}</p>
          </div>
        ))}
      </div>
      {/* style={skill.name==="Express.js"?{color: "white"}: { color: skill.color }} */}
    </div>
  );
};

export default Skills;
