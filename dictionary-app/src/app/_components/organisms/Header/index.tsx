import { HeaderLogo } from "../../atoms/HeaderLogo";
import { ThemeLogo } from "../../atoms/ThemeLogo";
import { ThemeSwitch } from "../../atoms/ThemeSwitch";
import "@/app/_styles/components/organisms/_header.scss";
import { SelectFont } from "../../molecules/SelectFont";

export const Header = (): JSX.Element => {
  return (
    <div className="__header">
      <HeaderLogo
        to={"/"}
        src={"/images/logo.svg"}
        alt={"Header Logo"}
        width={32}
        height={36}
      />

      <div className="__header_theme">
        <SelectFont />
        <div className="__header_theme_divider"></div>
        <ThemeSwitch />
        <ThemeLogo
          src={"/images/icon-moon.svg"}
          alt={"Moon logo"}
          width={20}
          height={20}
          dark={false}
        />
      </div>
    </div>
  );
};
