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
        <h2>{props.word}</h2>
        <h5>{props.phonetic}</h5>
      </div>
      {props.audioButton}
    </div>
  );
};
