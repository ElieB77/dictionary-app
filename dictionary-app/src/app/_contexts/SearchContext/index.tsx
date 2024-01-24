"use client";
import { api } from "@/app/_services/api";
import { createContext, ReactNode, useContext, useState } from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContext {
  handleSearchData: any;
  result: any;
  searchInput: string;
}

const SearchContext = createContext({} as SearchContext);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [result, setResult] = useState<any>("");
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchData = async (word: string) => {
    const data = await api.fetchWords(word);
    setResult(data);
    setSearchInput(word);
  };

  return (
    <SearchContext.Provider
      value={{
        handleSearchData,
        result,
        searchInput,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
