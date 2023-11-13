import "@/app/_styles/components/atoms/_theme-switch.scss";

export const ThemeSwitch = () => {
  return (
    <div className="__theme_switch">
      <div className="__theme_switch_toggle">
        <input
          type="checkbox"
          className="__theme_switch_toggle_checkbox"
          id="checkbox-theme"
        />
        <label
          className="__theme_switch_toggle_label"
          htmlFor={"checkbox-theme"}
        >
          <span className="__theme_switch_toggle_label_inner" />
          <span className="__theme_switch_toggle_label_switch" />
        </label>
      </div>
    </div>
  );
};
