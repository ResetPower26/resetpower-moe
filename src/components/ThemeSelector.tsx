// Responsible for rendering the website theme preference dropdown.
import type { ThemePreference } from "../hooks/useThemePreference";
import { DropdownSelect, type SelectOption } from "./DropdownSelect";

const THEME_OPTIONS: SelectOption<ThemePreference>[] = [
  { value: "light", label: "浅色模式" },
  { value: "dark", label: "深色模式" },
  { value: "system", label: "跟随系统" },
];

export function ThemeSelector({
  value,
  onChange,
}: {
  value: ThemePreference;
  onChange: (preference: ThemePreference) => void;
}) {
  return (
    <DropdownSelect
      value={value}
      onChange={onChange}
      options={THEME_OPTIONS}
      label="选择颜色模式"
    />
  );
}
