import { ThemeLogo } from "../_components/atoms/ThemeLogo";
import { ThemeSwitch } from "../_components/atoms/ThemeSwitch";

export default function Home() {
  return (
    <main>
      <div>
        <ThemeSwitch />
        <ThemeLogo
          src={"/images/icon-moon.svg"}
          alt={"Moon Logo"}
          width={20}
          height={20}
          dark={true}
        />
      </div>
    </main>
  );
}
