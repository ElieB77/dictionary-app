"use client";
import { api } from "@/app/_services/api";
import { createContext, ReactNode, useContext, useState } from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContext {
  handleSearchData: any;
  result: any;
}

const SearchContext = createContext({} as SearchContext);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [result, setResult] = useState<any>("");

  const handleSearchData = async (word: string) => {
    const data = await api.fetchWords(word);
    setResult(data);
  };

  return (
    <SearchContext.Provider
      value={{
        handleSearchData,
        result,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
