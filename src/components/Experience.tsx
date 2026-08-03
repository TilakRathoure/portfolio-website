"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import devslane from "@/assets/devslane_logo.jpg";
import Image from "next/image";
import suntek from "@/assets/image.png";
import SectionReveal from "./SectionReveal";
import { ExperienceItem } from "@/types";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const experiences: ExperienceItem[] = [
    {
      img: suntek,
      alt: "Suntek AI",
      duration: "Jan 2026 - Present",
      institution: "Suntek AI",
      description: "Fullstack Developer Intern",
      link: "https://suntek.ai/",
      additional: [
        "Revamped a revenue-generating Timesheet platform used by 50+ employees, migrating 20,000+ legacy records with zero data loss and integrating Jira and Slack workflows, reducing time-entry effort by 30%.",
        "Built a Kanban platform for clients, PMs, delivery leads, and admins, centralizing requests, estimations, approvals, blockers, and execution workflows while replacing spreadsheet-based tracking; implemented RBAC and Timesheet visibility for clients.",
        "Engineered a client-facing image platform enabling secure asset exchange between clients and operations teams, supporting 10+ GB bulk ZIP uploads on Google Cloud.",
        "Architected and developed 3 production platforms end-to-end, owning frontend, backend, database design, authentication, and authorization using Next.js, TypeScript, PostgreSQL, Prisma/Drizzle, and Clerk.",
      ],
    },
    {
      img: devslane,
      alt: "DevsLane",
      duration: "Jun 2024 - Aug 2024",
      institution: "DevsLane",
      description: "Software Engineering Trainee",
      link: "https://devslane.com/",
      additional: [
        "Selected on-campus as Full-Stack Developer Trainee; gained hands-on experience in React, Redux, TypeScript, Node.js, Tailwind CSS & RESTful APIs",
        "Delivered 2 major and 5 minor projects, including a scalable e-commerce platform with auth & state management",
        "Collaborated with 50+ peers to debug, solve issues, and enhance coding skills.",
      ],
    },
  ];

  return (
    <SectionReveal id="experience" className="section-block">
      <h2 className="section-title">Experience</h2>
      <p className="section-support">
        Roles where I ship production software end to end.
      </p>

      <div className="relative border-l border-border ml-3 sm:ml-4">
        {experiences.map((edu, index) => (
          <div key={index} className="relative pl-8 sm:pl-10 pb-8 last:pb-0">
            <span className="absolute left-0 top-3 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-accent" />

            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-start justify-between gap-4 text-left py-1"
            >
              <div className="flex items-start gap-3 min-w-0">
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="shrink-0 mt-0.5"
                >
                  <Image
                    alt={edu.alt}
                    src={edu.img}
                    className="h-9 w-9 object-cover rounded-sm"
                  />
                </a>
                <div className="min-w-0">
                  <div className="font-ovo text-xl">{edu.institution}</div>
                  <div className="text-muted font-light">{edu.description}</div>
                  <div className="text-sm text-muted/80 font-light mt-0.5 sm:hidden">
                    {edu.duration}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:block text-sm text-muted font-light whitespace-nowrap">
                  {edu.duration}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-[800px] opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
              aria-hidden={openIndex !== index}
            >
              <ul className="space-y-2.5 pl-12">
                {edu.additional.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-[0.95rem] font-light leading-relaxed text-foreground/90"
                  >
                    <span className="text-accent mt-1.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
};

export default Experience;
