import { StaticImageData } from "next/image";

export interface ExperienceItem {
  img: StaticImageData;
  alt: string;
  duration: string;
  institution: string;
  description: string;
  link: string;
  additional: string[];
}
