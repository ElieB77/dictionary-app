import { uuid } from "uuidv4";
import "@/app/_styles/components/atoms/_synonyms.scss";

interface SynonymsProps {
  head: string;
  synonyms?: string[];
}

export const Synonyms = (props: SynonymsProps) => {
  return (
    <div className="__synonyms">
      <h2>{props.head}</h2>
      {props.synonyms &&
        props.synonyms.map((synonym: string, index: number) => {
          const uniqueKey: string = uuid();
          return (
            <span key={uniqueKey}>
              {synonym}
              {index < (props.synonyms?.length ?? 0) - 1 && " "}
            </span>
          );
        })}
    </div>
  );
};