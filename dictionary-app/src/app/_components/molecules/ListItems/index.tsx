import "@/app/_styles/components/molecules/_list-items.scss";
import { Definition } from "@/app/_types/api/ApiGlobal";
import { uuid } from "uuidv4";

interface ListItemsProps {
  head: string;
  definitions?: Definition[];
}

export const ListItems = (props: ListItemsProps) => {
  return (
    <div className="__list_items">
      <h3>{props.head}</h3>
      <ul>
        {props.definitions?.map((definition: Definition) => {
          const uniqueKey: string = uuid();
          return (
            <div key={uniqueKey} className="__list_items_item">
              <li>{definition.definition}</li>
              {definition.example && <p>{`"${definition.example}"`}</p>}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
