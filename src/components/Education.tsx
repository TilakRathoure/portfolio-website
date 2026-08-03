"use client";

import React from "react";
import Image from "next/image";
import bennettimg from "@/assets/Bennett.png";
import fatheragnel from "@/assets/Father_agnel.png";
import SectionReveal from "./SectionReveal";
import { EducationItem } from "@/types";

const Education = () => {
  const educationDetails: EducationItem[] = [
    {
      img: bennettimg,
      alt: "bennett-university",
      duration: "2022–2026",
      institution: "Bennett University",
      description: "Bachelor of Technology in Computer Science Engineering",
      additional: "8.65 CGPA",
    },
    {
      img: fatheragnel,
      alt: "father-agnel-school",
      duration: "2007–2021",
      institution: "Father Agnel School",
      description: "Senior Secondary (CBSE)",
      additional: "X – 90.2% · XII – 88.2%",
    },
  ];

  return (
    <SectionReveal id="education" className="section-block">
      <h2 className="section-title">Education</h2>
      <p className="section-support">Where I studied and how I grew.</p>

      <div className="relative border-l border-border ml-3 sm:ml-4">
        {educationDetails.map((edu) => (
          <div
            key={edu.institution}
            className="relative pl-8 sm:pl-10 pb-8 last:pb-0"
          >
            <span className="absolute left-0 top-3 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex items-start gap-3">
              <Image
                src={edu.img}
                className="h-10 w-8 object-contain shrink-0 mt-0.5"
                alt={edu.alt}
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-ovo text-xl">{edu.institution}</h3>
                  <span className="text-sm text-muted font-light whitespace-nowrap">
                    {edu.duration}
                  </span>
                </div>
                <p className="font-light text-foreground/85 mt-1">
                  {edu.description}
                </p>
                <p className="font-light text-muted text-sm mt-0.5">
                  {edu.additional}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
};

export default Education;
