import Image from "next/image";
import "@/app/_styles/components/molecules/_select-font.scss";
import { FontModal } from "../FontModal";
import { useEffect, useState } from "react";
import { useFont } from "@/app/_contexts/FontContext";

export const SelectFont = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { selectedFont } = useFont();

  const toggleModal = () => {
    return setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [selectedFont]);

  return (
    <>
      <div className="__select_font" onClick={toggleModal}>
        <div className="__select_font_btn">
          <p>{selectedFont}</p>
          <Image
            src={"/images/icon-arrow-down.svg"}
            alt={"Down Arrow"}
            width={12}
            height={6}
          />
        </div>
      </div>
      <FontModal isOpen={isOpen} />
    </>
  );
};
