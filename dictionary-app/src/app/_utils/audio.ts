import { Dispatch, RefObject, SetStateAction } from "react";
import { ApiAudioArray, ApiAudioObject } from "../_types/api/ApiAudio";

export const playPauseAudio = async (
  isPlaying: boolean,
  setIsPlaying: Dispatch<SetStateAction<boolean>>,
  audioRef: RefObject<HTMLAudioElement>
) => {
  const audioElement = audioRef.current;

  if (audioElement) {
    try {
      if (isPlaying) {
        await audioElement.pause();
      } else {
        await audioElement.play();
      }

      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error playing/pausing audio:", error);
    }
  }
};

export const getAudioSource = (result: ApiAudioArray) => {
  return result?.find((audio: ApiAudioObject) => audio.audio !== "")?.audio;
};
