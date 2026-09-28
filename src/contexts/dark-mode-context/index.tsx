import { useState, type ReactNode } from "react";
import { DarkModeContext } from "./context";

export const DarkModeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(
    Boolean(sessionStorage.getItem("isDarkMode")),
  );
  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
