import "@/app/_styles/components/atoms/_search-bar.scss";
import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="__search_bar">
      <input type="text" />
      <Image
        src={"/images/icon-search.svg"}
        alt={"Search Icon"}
        width={15.55}
        height={15.55}
      />
    </div>
  );
};
