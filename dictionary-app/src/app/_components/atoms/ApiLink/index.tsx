import Link from "next/link";
import Image from "next/image";
import "@/app/_styles/components/atoms/_api-link.scss";

interface ApiLinkProps {
  word?: string;
}

export const ApiLink = (props: ApiLinkProps) => {
  return (
    <Link href={"/"} className="__api_link">
      <h4>
        Source
        <span>
          https://en.wiktionary.org/wiki/keyboard
          <Image
            src={"/images/tabler_external-link.svg"}
            alt={"External Link"}
            width={12}
            height={12}
          />
        </span>
      </h4>
    </Link>
  );
};
