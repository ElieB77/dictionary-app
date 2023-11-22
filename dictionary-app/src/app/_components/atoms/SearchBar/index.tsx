"use client";
import { useSearch } from "@/app/_contexts/SearchContext";
import "@/app/_styles/components/atoms/_search-bar.scss";
import Image from "next/image";
import { useState } from "react";

export const SearchBar = () => {
  const [word, setWord] = useState("");
  const { handleSearchData } = useSearch();

  return (
    <div className="__search_bar">
      <input
        value={word}
        type="text"
        onChange={(e) => setWord(e.target.value)}
      />
      <Image
        onClick={() => handleSearchData(word)}
        src={"/images/icon-search.svg"}
        alt={"Search Icon"}
        width={15.55}
        height={15.55}
      />
    </div>
  );
};
