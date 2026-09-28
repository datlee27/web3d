import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

interface IDarkModeContextProps {
  isDarkMode?: boolean;
  setIsDarkMode?: Dispatch<SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<IDarkModeContextProps>({});
