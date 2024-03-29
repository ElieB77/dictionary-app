"use client";
import { AudioButton } from "@/app/_components/atoms/AudioButton";
import { SearchBar } from "@/app/_components/atoms/SearchBar";
import { Header } from "../../_components/organisms/Header";
import "@/app/_styles/templates/_layout.scss";
import { WordPhoneticAudio } from "@/app/_components/molecules/WordPhoneticAudio";
import { useSearch } from "@/app/_contexts/SearchContext";
import { TextBlock } from "@/app/_components/organisms/TextBlock";
import { Divider } from "@/app/_components/atoms/Divider";
import { ApiLink } from "@/app/_components/atoms/ApiLink";
import { useTheme } from "@/app/_contexts/ThemeContext";
import { useFont } from "@/app/_contexts/FontContext";
import { NotFoundError } from "@/app/_components/molecules/NotFoundError";
import { Loader } from "@/app/_components/atoms/Loader";

export const Layout = (): JSX.Element => {
  const { result, searchInput, isLoading } = useSearch();
  const { themeString } = useTheme();
  const { selectedFont } = useFont();

  const isInitialRender =
    !isLoading && result?.length === 0 && searchInput === "";

  return (
    <body data-theme={themeString} data-font={selectedFont}>
      <div className="__layout">
        <Header />
        <SearchBar />
        {isLoading && <Loader />}
        {result &&
        result.length > 0 &&
        result[0]?.data !== null &&
        !isLoading ? (
          <>
            <WordPhoneticAudio
              audioButton={<AudioButton />}
              word={result[0]?.word}
              phonetic={result[0]?.phonetic}
            />
            <TextBlock />
            <Divider noContent={true} />
            <ApiLink />
          </>
        ) : isLoading ? (
          <Loader />
        ) : isInitialRender ? null : (
          <NotFoundError word={searchInput} />
        )}
      </div>
    </body>
  );
};
