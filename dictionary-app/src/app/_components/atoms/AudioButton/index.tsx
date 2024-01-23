import Image from "next/image";
import "@/app/_styles/components/atoms/_audio-button.scss";
import { useSearch } from "@/app/_contexts/SearchContext";
import { useState } from "react";

export const AudioButton = () => {
  const { result } = useSearch();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audioElement = document.getElementById("audioPlayer");

    if (isPlaying) {
      audioElement?.pause();
    } else {
      audioElement?.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Image
        onClick={handlePlayPause}
        className="__audio_button"
        src={"/images/icon-play.svg"}
        alt={"Play Button"}
        width={48}
        height={48}
      />
      <audio id="audioPlayer" src={result[0]?.phonetics[0]?.audio} />
    </>
  );
};
