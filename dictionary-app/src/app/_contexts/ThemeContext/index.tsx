"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContext {
  theme: boolean;
  toggleTheme: () => void;
  themeString: string;
}

const ThemeContext = createContext({} as ThemeContext);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<boolean>(false);
  const [themeString, setThemeString] = useState<string>("light");

  const toggleTheme = () => {
    return setTheme(!theme);
  };

  useEffect(() => {
    setThemeString(theme ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeString,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
