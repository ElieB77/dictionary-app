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
  isLoading: boolean;
}

const SearchContext = createContext({} as SearchContext);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({
  children,
}: SearchProviderProps): JSX.Element => {
  const [result, setResult] = useState<any>("");
  const [searchInput, setSearchInput] = useState<string>("keyboard");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchData = async (word: string) => {
    setIsLoading(true);
    const data = await api.fetchWords(word);
    setResult(data);
    setSearchInput(word);
    setIsLoading(false);
  };

  return (
    <SearchContext.Provider
      value={{
        handleSearchData,
        result,
        searchInput,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
