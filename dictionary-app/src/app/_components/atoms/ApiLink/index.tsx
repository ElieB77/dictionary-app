import Link from "next/link";
import Image from "next/image";
import "@/app/_styles/components/atoms/_api-link.scss";
import { useSearch } from "@/app/_contexts/SearchContext";

export const ApiLink = () => {
  const { result } = useSearch();

  return (
    <Link
      href={`https://en.wiktionary.org/wiki/${result[0]?.word}`}
      className="__api_link"
      target="blank"
    >
      <h4>
        Source
        <span>
          {`https://en.wiktionary.org/wiki/${result[0]?.word}`}
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
