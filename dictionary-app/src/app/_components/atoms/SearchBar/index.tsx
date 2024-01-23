"use client";
import { useSearch } from "@/app/_contexts/SearchContext";
import "@/app/_styles/components/atoms/_search-bar.scss";
import Image from "next/image";
import { useState } from "react";

export const SearchBar = () => {
  const [word, setWord] = useState<string>("");
  const { handleSearchData } = useSearch();
  const [error, setError] = useState<boolean>(false);

  const handleSearch = () => {
    if (word !== "") {
      handleSearchData(word);
      setWord("");
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className={`__search_bar ${error ? "__error" : ""}`}>
        <input
          placeholder="Search for any word.."
          value={word}
          type="text"
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={handleKeyPress}
          autoFocus
          className={error ? "__input_error" : ""}
        />
        <Image
          onClick={handleSearch}
          src={"/images/icon-search.svg"}
          alt={"Search Icon"}
          width={15.55}
          height={15.55}
        />
      </div>
      {error && <span className="__text_error">Can't be empty..</span>}
    </>
  );
};
