// Responsible for applying the saved theme before the application renders.
(() => {
  const storedPreference = localStorage.getItem("theme");
  const followsSystem =
    storedPreference !== "light" && storedPreference !== "dark";
  const isSystemDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme = followsSystem
    ? isSystemDark
      ? "dark"
      : "light"
    : storedPreference;

  document.documentElement.dataset.theme = resolvedTheme;
})();
