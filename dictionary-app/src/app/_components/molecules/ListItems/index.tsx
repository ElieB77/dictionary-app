import "@/app/_styles/components/molecules/_list-item.scss";
import { ApiWordDefintions } from "@/app/_types/api/ApiWordDefinitions";
import { uuid } from "uuidv4";

interface ListItemsProps {
  head: string;
  def?: ApiWordDefintions[];
}

export const ListItems = (props: ListItemsProps) => {
  return (
    <div>
      <h2>{props.head}</h2>
      <ul>
        {props.def &&
          props.def.map((el: ApiWordDefintions) => {
            const uniqueKey = uuid();
            console.log(uniqueKey);
            return <li key={uniqueKey}>{el.definition}</li>;
          })}
      </ul>
    </div>
  );
};
