import Image from "next/image";
import "@/app/_styles/components/atoms/_audio-button.scss";

export const AudioButton = () => {
  return (
    <Image
      className="__audio_button"
      src={"/images/icon-play.svg"}
      alt={"Play Button"}
      width={48}
      height={48}
    />
  );
};
