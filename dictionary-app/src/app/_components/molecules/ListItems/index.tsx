import "@/app/_styles/components/molecules/_list-items.scss";
import { ApiWordDefinitions } from "@/app/_types/api/ApiWordDefinitions";
import { uuid } from "uuidv4";

interface ListItemsProps {
  head: string;
  definitions?: ApiWordDefinitions[];
}

export const ListItems = (props: ListItemsProps) => {
  return (
    <div className="__list_items">
      <h3>{props.head}</h3>
      <ul>
        {props.definitions &&
          props.definitions.map((definition: ApiWordDefinitions) => {
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
