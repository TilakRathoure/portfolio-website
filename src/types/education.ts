import { StaticImageData } from "next/image";

export interface EducationItem {
  img: StaticImageData;
  alt: string;
  duration: string;
  institution: string;
  description: string;
  additional: string;
}
