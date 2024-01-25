import { Dispatch, RefObject, SetStateAction } from "react";
import { ApiAudioArray, ApiAudioObject } from "../_types/api/ApiAudio";

export const playPauseAudio = (
  isPlaying: boolean,
  setIsPlaying: Dispatch<SetStateAction<boolean>>,
  audioRef: any
) => {
  if (isPlaying) {
    audioRef?.pause();
  } else {
    audioRef?.play();
  }

  setIsPlaying(!isPlaying);
};

export const getAudioSource = (result: ApiAudioArray) => {
  return result?.find((audio: ApiAudioObject) => audio.audio !== "")?.audio;
};
