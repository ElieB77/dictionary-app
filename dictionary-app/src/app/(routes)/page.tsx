import { SearchBar } from "../_components/atoms/SearchBar";
import { Header } from "../_components/organisms/Header";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <SearchBar />
      </div>
    </main>
  );
}
