import Image from "next/image";
import "@/app/_styles/components/atoms/_audio-button.scss";
import { useSearch } from "@/app/_contexts/SearchContext";
import { useState } from "react";

export const AudioButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { result } = useSearch();

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePlayPause}
        className={`__audio_button ${isHovered ? "__hovered" : ""}`}
        src={`/images/icon-play${isHovered ? "-hover" : ""}.svg`}
        alt={"Play Button"}
        width={48}
        height={48}
      />
      <audio id="audioPlayer" src={result[0]?.phonetics[0]?.audio} />
    </>
  );
};
