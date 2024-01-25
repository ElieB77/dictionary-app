"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface FontProviderProps {
  children: ReactNode;
}

interface FontContext {
  listOfFonts: string[];
  setSelectedFont: Dispatch<SetStateAction<string>>;
  selectedFont: string;
}

const FontContext = createContext({} as FontContext);

export const useFont = () => {
  return useContext(FontContext);
};

export const FontProvider = ({ children }: FontProviderProps): JSX.Element => {
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
