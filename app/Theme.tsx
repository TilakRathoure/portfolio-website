import { createContext } from "react";


const Contextfirst = createContext<{
  image:boolean,
  setImage:React.Dispatch<React.SetStateAction<boolean>>,
  mode: string;
  Setmode: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export default Contextfirst;
