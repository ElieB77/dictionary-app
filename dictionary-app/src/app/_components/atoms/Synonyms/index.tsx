import { uuid } from "uuidv4";

interface SynonymsProps {
  head: string;
  synonyms?: string[];
}

export const Synonyms = (props: SynonymsProps) => {
  return (
    <div>
      <h2>{props.head}</h2>
      {props.synonyms &&
        props.synonyms.map((synonym: string) => {
          const uniqueKey: string = uuid();
          return <span key={uniqueKey}>{synonym}</span>;
        })}
    </div>
  );
};
