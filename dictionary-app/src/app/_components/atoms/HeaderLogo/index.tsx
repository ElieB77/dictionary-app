import Image from "next/image";

interface HeaderLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const HeaderLogo = (props: HeaderLogoProps): JSX.Element => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};
