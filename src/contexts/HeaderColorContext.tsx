/* eslint-disable react-refresh/only-export-components */
// src/contexts/HeaderColorContext.tsx
import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

type HeaderColor = "black" | "white";

interface HeaderColorContextType {
    headerColor: HeaderColor;
    setHeaderColor: (color: HeaderColor) => void;
}

export const HeaderColorContext = createContext<HeaderColorContextType>({
    headerColor: "black",
    setHeaderColor: () => { },
});

export const HeaderColorProvider = ({ children }: { children: ReactNode }) => {
    const [headerColor, setHeaderColorState] = useState<HeaderColor>("black");

    const setHeaderColor = useCallback((color: HeaderColor) => {
        setHeaderColorState(color);
    }, []);

    return (
        <HeaderColorContext.Provider value={{ headerColor, setHeaderColor }}>
            {children}
        </HeaderColorContext.Provider>
    );
};

export const useHeaderColor = () => useContext(HeaderColorContext);
