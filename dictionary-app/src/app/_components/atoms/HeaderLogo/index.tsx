import Link from "next/link";
import Image from "next/image";

interface HeaderLogoProps {
  to: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const HeaderLogo = (props: HeaderLogoProps): JSX.Element => {
  return (
    <Link href={props.to}>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Link>
  );
};
