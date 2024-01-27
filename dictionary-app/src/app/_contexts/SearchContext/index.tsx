"use client";
import { api } from "@/app/_services/api";
import { ApiGlobal } from "@/app/_types/api/ApiGlobal";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContext {
  handleSearchData: (word: string) => void;
  result: ApiGlobal[];
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
  const [result, setResult] = useState<ApiGlobal[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchData = async (word: string) => {
    setIsLoading(true);
    try {
      const data = await api.fetchWords(word);
      setResult(data);
      setSearchInput(word);
    } catch (error) {
      setResult([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchDefaultWord = async () => {
      const defaultWord = "keyboard";
      await handleSearchData(defaultWord);
    };

    fetchDefaultWord();
  }, []);

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
