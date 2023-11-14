import Image from "next/image";
import "@/app/_styles/components/molecules/_select-font.scss";

export const SelectFont = (): JSX.Element => {
  return (
    <div className="__select_font">
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
  );
};
