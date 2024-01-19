import "@/app/_styles/components/molecules/_list-item.scss";
import { ApiWordDefinitions } from "@/app/_types/api/ApiWordDefinitions";
import { uuid } from "uuidv4";

interface ListItemsProps {
  head: string;
  definitions?: ApiWordDefinitions[];
}

export const ListItems = (props: ListItemsProps) => {
  return (
    <div>
      <h2>{props.head}</h2>
      <ul>
        {props.definitions &&
          props.definitions.map((definition: ApiWordDefinitions) => {
            const uniqueKey: string = uuid();
            return (
              <>
                <li key={uniqueKey}>{definition.definition}</li>
              </>
            );
          })}
      </ul>
    </div>
  );
};
