import { IconType } from "react-icons";

export interface ContactIcon {
  icon: IconType;
  link: string;
  label: string;
  color: string;
}

export interface ContactField {
  name: string;
  title: string;
  type: string;
}
