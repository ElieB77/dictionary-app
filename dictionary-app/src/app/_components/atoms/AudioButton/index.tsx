import Image from "next/image";
import "@/app/_styles/components/atoms/_audio-button.scss";
import { useSearch } from "@/app/_contexts/SearchContext";
import { useState } from "react";

export const AudioButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { result } = useSearch();

  const audioSource =
    result[0]?.phonetics[0]?.audio ||
    result[0]?.phonetics[1]?.audio ||
    result[0]?.phonetics[2]?.audio;

  const handlePlayPause = () => {
    const audioElement = document.getElementById("audioPlayer");

    if (isPlaying) {
      audioElement?.pause();
    } else {
      audioElement?.play();
    }

    setIsPlaying(!isPlaying);
  };

  console.log(audioSource);

  return (
    <>
      <Image
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePlayPause}
        className={`__audio_button ${isHovered ? "__hovered" : ""} ${
          audioSource === "" ? "__disabled" : ""
        }`}
        src={`/images/icon-play${isHovered ? "-hover" : ""}.svg`}
        alt={"Play Button"}
        width={48}
        height={48}
      />
      <audio id="audioPlayer" src={audioSource} />
    </>
  );
};
