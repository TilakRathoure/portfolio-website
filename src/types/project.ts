import { StaticImageData } from "next/image";

export interface ProjectTech {
  name: string;
}

export interface Project {
  name: string;
  about: string;
  code: string;
  link: string;
  image: StaticImageData;
  tech: ProjectTech[];
}
