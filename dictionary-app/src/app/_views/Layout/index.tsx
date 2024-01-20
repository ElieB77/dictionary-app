"use client";

import { AudioButton } from "@/app/_components/atoms/AudioButton";
import { SearchBar } from "../../_components/atoms/SearchBar";
import { Header } from "../../_components/organisms/Header";
import "@/app/_styles/templates/_layout.scss";
import { WordPhoneticAudio } from "@/app/_components/molecules/WordPhoneticAudio";
import { useSearch } from "@/app/_contexts/SearchContext";
import { TextBlock } from "@/app/_components/organisms/TextBlock";
import { Divider } from "@/app/_components/atoms/Divider";
import { ApiLink } from "@/app/_components/atoms/ApiLink";

export const Layout = (): JSX.Element => {
  const { result } = useSearch();

  console.log(result);

  return (
    <div className="__layout">
      <Header />
      <SearchBar />
      <WordPhoneticAudio
        audioButton={<AudioButton />}
        word={result[0]?.word}
        phonetic={result[0]?.phonetic}
      />
      <TextBlock />
      <Divider noContent={true} />
      <ApiLink />
    </div>
  );
};
