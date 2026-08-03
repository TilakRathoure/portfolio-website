import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}
