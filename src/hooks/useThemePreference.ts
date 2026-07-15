// Responsible for persisting the theme preference and applying its resolved color scheme.
import { useEffect, useState } from "react";

export type ThemePreference = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "theme";
const DARK_MODE_QUERY = "(prefers-color-scheme: dark)";

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

function readThemePreference(): ThemePreference {
  const storedPreference = localStorage.getItem(THEME_STORAGE_KEY);
  return isThemePreference(storedPreference) ? storedPreference : "system";
}

function applyTheme(preference: ThemePreference, isSystemDark: boolean) {
  const resolvedTheme =
    preference === "system" ? (isSystemDark ? "dark" : "light") : preference;
  document.documentElement.dataset.theme = resolvedTheme;
}

export function useThemePreference() {
  const [themePreference, setThemePreference] =
    useState<ThemePreference>(readThemePreference);

  useEffect(() => {
    const systemTheme = window.matchMedia(DARK_MODE_QUERY);
    const applySelectedTheme = () =>
      applyTheme(themePreference, systemTheme.matches);

    localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    applySelectedTheme();
    systemTheme.addEventListener("change", applySelectedTheme);
    return () => systemTheme.removeEventListener("change", applySelectedTheme);
  }, [themePreference]);

  return { themePreference, setThemePreference };
}
