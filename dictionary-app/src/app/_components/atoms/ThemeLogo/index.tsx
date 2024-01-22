import Image from "next/image";
import "@/app/_styles/components/atoms/_theme-logo.scss";

interface ThemeLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  dark: boolean;
}

export const ThemeLogo = (props: ThemeLogoProps): JSX.Element => {
  return (
    <div className="__theme_logo">
      <Image
        className={props.dark ? "__theme_logo" : ""}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};
