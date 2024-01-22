"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface FontProviderProps {
  children: ReactNode;
}

interface FontContext {
  listOfFonts: string[];
  setSelectedFont: any;
  selectedFont: string;
}

const FontContext = createContext({} as FontContext);

export const useFont = () => {
  return useContext(FontContext);
};

export const FontProvider = ({ children }: FontProviderProps) => {
  const listOfFonts = ["sans-serif", "serif", "mono"];
  const [selectedFont, setSelectedFont] = useState<string>("sans-serif");

  return (
    <FontContext.Provider
      value={{
        listOfFonts,
        setSelectedFont,
        selectedFont,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};
