import { StaticImageData } from "next/image";

export interface Publication {
  image: StaticImageData;
  alt: string;
  title: string;
  venue: string;
  link: string;
  points: string[];
}
