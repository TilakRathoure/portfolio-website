import { createContext } from "react";
import { ThemeContextValue } from "@/types";

const Contextfirst = createContext<ThemeContextValue | null>(null);

export default Contextfirst;
