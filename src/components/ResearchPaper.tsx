"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import ieee from "@/assets/ieee.jpg";
import Image from "next/image";
import SectionReveal from "./SectionReveal";
import { Publication } from "@/types";

const ResearchPaper = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const publications: Publication[] = [
    {
      image: ieee,
      alt: "IEEE",
      title:
        "Unpaired Image-to-Image Translation with CycleGAN: An Expanded Review",
      venue: "Research Paper",
      link: "https://ieeexplore.ieee.org/document/11436189",
      points: [
        "Comprehensive review of unpaired image-to-image translation using CycleConsistent Generative Adversarial Networks (CycleGAN).",
        "Covers GAN theory, CycleGAN architecture, and its adversarial, cycle-consistency, and identity loss functions for learning from unaligned data.",
        "Trained and evaluated on diverse datasets including Monet2Photo (artistic style transfer) and CT-MRI (medical imaging).",
        "Quantitative comparisons with related models using Fréchet Inception Distance (FID), Inception Score (IS), and LPIPS.",
        "Highlights key directions for future research in unsupervised image translation.",
      ],
    },
  ];

  return (
    <SectionReveal id="publications" className="section-block">
      <h2 className="section-title">Publications</h2>
      <p className="section-support">
        Research exploring generative models and image translation.
      </p>

      <div className="relative border-l border-border ml-3 sm:ml-4">
        {publications.map((paper, index) => (
          <div key={index} className="relative pl-8 sm:pl-10">
            <span className="absolute left-0 top-3 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-accent" />

            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-start justify-between gap-4 text-left py-1"
            >
              <div className="flex items-start gap-3 min-w-0">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="shrink-0 mt-0.5"
                >
                  <Image
                    alt={paper.alt}
                    src={paper.image}
                    className="h-9 w-9 object-contain"
                  />
                </a>
                <div className="min-w-0">
                  <div className="font-ovo text-lg sm:text-xl leading-snug">
                    {paper.title}
                  </div>
                  <div className="text-muted font-light mt-1">{paper.venue}</div>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted transform transition-transform duration-300 mt-1 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
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
                {paper.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-[0.95rem] font-light leading-relaxed text-foreground/90"
                  >
                    <span className="text-accent mt-1.5 shrink-0">–</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {openIndex === index && (
                <div className="pl-12 mt-4">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm border-b border-accent/50 text-accent pb-0.5 transition-opacity hover:opacity-75"
                  >
                    Read on IEEE
                    <MdArrowOutward size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
};

export default ResearchPaper;
