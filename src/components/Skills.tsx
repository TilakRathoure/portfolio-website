"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDrizzle,
  SiPostman,
  SiRedux,
  SiTypescript,
  SiShadcnui,
  SiFastapi,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import SectionReveal from "./SectionReveal";
import { SkillGroup } from "@/types";

const groups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "Next.js", icon: RiNextjsFill, color: "" },
      { name: "React", icon: FaReact, color: "text-sky-400" },
      { name: "Redux", icon: SiRedux, color: "text-purple-600" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-teal-400" },
      { name: "Shadcn UI", icon: SiShadcnui, color: "" },
    ],
  },
  {
    label: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-700" },
      { name: "Express.js", icon: SiExpress, color: "" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700" },
      { name: "Prisma", icon: SiPrisma, color: "text-teal-500" },
      { name: "Drizzle", icon: SiDrizzle, color: "text-lime-500" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-600" },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-500" },
      { name: "C++", icon: TbBrandCpp, color: "text-blue-700" },
      { name: "Python", icon: FaPython, color: "text-blue-500" },
    ],
  },
  {
    label: "Tools & DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-red-600" },
      { name: "GitHub", icon: FaGithub, color: "" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    ],
  },
];

const Skills = () => {
  return (
    <SectionReveal id="skills" className="section-block">
      <h2 className="section-title">Skills</h2>
      <p className="section-support">
        Tools I reach for when building products.
      </p>

      <div className="flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted mb-4 font-normal">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2 ${skill.color}`}
                >
                  <skill.icon size={22} />
                  <span className="font-light text-[0.95rem] text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
};

export default Skills;
