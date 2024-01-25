import { useFont } from "@/app/_contexts/FontContext";
import "@/app/_styles/components/molecules/_font-modal.scss";

interface FontModalProps {
  isOpen: boolean;
}

export const FontModal = (props: FontModalProps) => {
  const { listOfFonts, setSelectedFont, selectedFont } = useFont();

  return (
    <div className={`__font_modal ${props.isOpen ? "__is_open" : ""}`}>
      <ul>
        {listOfFonts.map((font: string) => {
          console.log(font === selectedFont);
          return (
            <li
              key={font}
              onClick={() => setSelectedFont(font)}
              className={font === selectedFont ? "__font_selected" : ""}
            >
              {font}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
