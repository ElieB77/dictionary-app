import Image from "next/image";
import "@/app/_styles/components/atoms/_audio-button.scss";
import { useSearch } from "@/app/_contexts/SearchContext";
import { useRef, useState } from "react";
import { getAudioSource, playPauseAudio } from "@/app/_utils/audio";

export const AudioButton = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { result } = useSearch();

  const audioSource = getAudioSource(result[0]?.phonetics);

  const handlePlayPause = () => {
    playPauseAudio(isPlaying, setIsPlaying, audioRef.current);
  };

  return (
    <>
      <Image
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePlayPause}
        className={`__audio_button ${isHovered ? "__hovered" : ""} ${
          audioSource ?? "__disabled"
        }`}
        src={`/images/icon-play${isHovered ? "-hover" : ""}.svg`}
        alt={"Play Button"}
        width={48}
        height={48}
      />
      <audio id="audioPlayer" src={audioSource} ref={audioRef} />
    </>
  );
};
