"use client";
import { useSearch } from "@/app/_contexts/SearchContext";
import "@/app/_styles/components/atoms/_search-bar.scss";
import Image from "next/image";
import { useState } from "react";

export const SearchBar = () => {
  const [word, setWord] = useState<string>("");
  const { handleSearchData } = useSearch();

  const handleSearch = () => {
    handleSearchData(word);
    setWord("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="__search_bar">
      <input
        placeholder="Search for any word.."
        value={word}
        type="text"
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Image
        onClick={handleSearch}
        src={"/images/icon-search.svg"}
        alt={"Search Icon"}
        width={15.55}
        height={15.55}
      />
    </div>
  );
};
