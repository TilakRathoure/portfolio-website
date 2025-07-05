import { createContext } from "react";


const Contextfirst = createContext<{
  mode: string;
  Setmode: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export default Contextfirst;
