import { useFont } from "@/app/_contexts/FontContext";
import "@/app/_styles/components/molecules/_font-modal.scss";
import { uuid } from "uuidv4";

interface FontModalProps {
  isOpen: boolean;
}

export const FontModal = (props: FontModalProps) => {
  const { listOfFonts, setSelectedFont } = useFont();

  return (
    <div className={`__font_modal ${props.isOpen ? "__is_open" : ""}`}>
      <ul>
        {listOfFonts.map((font: string) => {
          const uniqueKey: string = uuid();
          return (
            <li key={uniqueKey} onClick={() => setSelectedFont(font)}>
              {font}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
