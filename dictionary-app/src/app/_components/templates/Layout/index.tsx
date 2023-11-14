import { SearchBar } from "../../atoms/SearchBar";
import { Header } from "../../organisms/Header";
import "@/app/_styles/templates/_layout.scss";

export const Layout = (): JSX.Element => {
  return (
    <div className="__layout">
      <Header />
      <SearchBar />
    </div>
  );
};
