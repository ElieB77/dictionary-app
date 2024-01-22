import Image from "next/image";
import "@/app/_styles/components/molecules/_select-font.scss";
import { FontModal } from "../FontModal";
import { useState } from "react";
import { useFont } from "@/app/_contexts/FontContext";

export const SelectFont = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="__select_font" onClick={toggleModal}>
        <div className="__select_font_btn">
          <p>Sans Serif</p>
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
