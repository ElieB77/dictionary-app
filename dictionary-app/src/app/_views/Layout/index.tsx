"use client";

import { AudioButton } from "@/app/_components/atoms/AudioButton";
import { SearchBar } from "../../_components/atoms/SearchBar";
import { Header } from "../../_components/organisms/Header";
import "@/app/_styles/templates/_layout.scss";
import { WordPhoneticAudio } from "@/app/_components/molecules/WordPhoneticAudio";
import { useSearch } from "@/app/_contexts/SearchContext";
import { Divider } from "@/app/_components/atoms/Divider";
import { ListItems } from "@/app/_components/molecules/ListItems";
import { Synonyms } from "@/app/_components/atoms/Synonyms";

export const Layout = (): JSX.Element => {
  const { result } = useSearch();

  console.log("****", result[0].meanings[0].synonyms);

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
      <Synonyms head="Synonyms" synonyms={result[0]?.meanings[0]?.synonyms} />
      <Divider content="verb" />
    </div>
  );
};
