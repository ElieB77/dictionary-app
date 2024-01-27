import Link from "next/link";
import Image from "next/image";
import "@/app/_styles/components/atoms/_api-link.scss";
import { useSearch } from "@/app/_contexts/SearchContext";

export const ApiLink = (): JSX.Element => {
  const { result } = useSearch();
  const link: string = `https://en.wiktionary.org/wiki/${
    result && result[0]?.word
  }`;

  return (
    <Link href={link} className="__api_link" target="blank">
      <h4>
        Source
        <span>
          {link}
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
