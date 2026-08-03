"use client";

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Image1 from "@/assets/WhatsApp_Image_2025-08-24_at_20.30.36_88736715-removebg-preview.png";
import Image2 from "@/assets/profile-alt.png";
import { HiDownload } from "react-icons/hi";
import { useContext, useState } from "react";
import Contextfirst from "@/Theme";

const Header = () => {
  const { image, setImage } = useContext(Contextfirst)!;
  const [hovered, setHovered] = useState<boolean>(false);

  const currentSrc = hovered
    ? image
      ? Image2
      : Image1
    : image
      ? Image1
      : Image2;

  return (
    <section id="home" className="section-block relative pt-6 md:pt-8">
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
        <div className="min-w-0 shrink">
          <h1 className="animate-fade-rise font-ovo text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] tracking-tight mb-2">
            Tilak Rathoure
          </h1>
          <p className="animate-fade-rise-delay font-ovo text-accent text-sm tracking-[0.18em] uppercase mb-3">
            Full-stack Developer
          </p>
          <p className="animate-fade-rise-delay-2 text-base sm:text-lg font-light text-muted max-w-md leading-relaxed mb-6">
            B.Tech CSE (AI) student building dynamic web apps with AI-powered
            features.
          </p>
          <div className="animate-fade-rise-delay-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm sm:text-base font-normal transition-opacity hover:opacity-85"
            >
              Connect with me
              <MdArrowOutward />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1dlthciRokC17NXVYCYdOZpa3y7cail4V/view?usp=sharing"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-normal border-b border-foreground/40 pb-0.5 transition-colors hover:border-accent hover:text-accent"
            >
              My resume
              <HiDownload />
            </a>
          </div>
        </div>

        <div className="animate-fade-rise shrink-0">
          <button
            type="button"
            onClick={() => setImage((prev: boolean) => !prev)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group cursor-pointer border-0 bg-transparent p-0"
            aria-label="Swap profile photo"
          >
            <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle,var(--glow)_0%,transparent_70%)] opacity-90 pointer-events-none" />
            <Image
              src={currentSrc}
              alt="Tilak Rathoure"
              className="relative w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] object-cover object-top rounded-full border border-border transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
