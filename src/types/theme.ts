import { Dispatch, SetStateAction } from "react";

export interface ThemeContextValue {
  image: boolean;
  setImage: Dispatch<SetStateAction<boolean>>;
  mode: string;
  Setmode: Dispatch<SetStateAction<string>>;
}
