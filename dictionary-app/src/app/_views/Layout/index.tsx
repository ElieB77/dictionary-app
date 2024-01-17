"use client";

import { AudioButton } from "@/app/_components/atoms/AudioButton";
import { SearchBar } from "../../_components/atoms/SearchBar";
import { Header } from "../../_components/organisms/Header";
import "@/app/_styles/templates/_layout.scss";
import { WordPhoneticAudio } from "@/app/_components/molecules/WordPhoneticAudio";
import { useSearch } from "@/app/_contexts/SearchContext";
import { Divider } from "@/app/_components/atoms/Divider";
import { ListItems } from "@/app/_components/molecules/ListItems";

export const Layout = (): JSX.Element => {
  const { result } = useSearch();

  return (
    <div className="__layout">
      <Header />
      <SearchBar />
      <WordPhoneticAudio
        audioButton={<AudioButton />}
        word={result[0]?.word}
        phonetic={result[0]?.phonetic}
      />
      <Divider content="noun" />
      <ListItems head="Meaning" def={result[0]?.meanings[0]?.definitions} />
      <Divider content="verb" />
    </div>
  );
};
