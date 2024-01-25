import { useSearch } from "@/app/_contexts/SearchContext";
import { Divider } from "../../atoms/Divider";
import { ListItems } from "../../molecules/ListItems";
import { Synonyms } from "../../atoms/Synonyms";
import { ApiGlobal } from "@/app/_types/api/ApiGlobal";
import { uuid } from "uuidv4";

export const TextBlock = () => {
  const { result } = useSearch();

  return (
    <>
      {result[0]?.meanings.map((meaning: ApiGlobal) => {
        const uniqueKey: string = uuid();

        return (
          <div className="__text_block" key={uniqueKey}>
            <Divider content={meaning.partOfSpeech} />
            <ListItems head={"Meaning"} definitions={meaning.definitions} />
            <Synonyms head="Synonyms" synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </>
  );
};
