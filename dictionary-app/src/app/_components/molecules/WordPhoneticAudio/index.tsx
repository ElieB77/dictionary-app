import "@/app/_styles/components/molecules/_word-phonetic-audio.scss";

interface WordPhoneticAudioProps {
  audioButton: JSX.Element;
  word: string;
  phonetic: string;
}

export const WordPhoneticAudio = (props: WordPhoneticAudioProps) => {
  return (
    <div className="__word_phonetic_audio">
      <div>
        <h1>{props.word}</h1>
        <h2>{props.phonetic ? props.phonetic : "No phonetic available."}</h2>
      </div>
      {props.audioButton}
    </div>
  );
};
