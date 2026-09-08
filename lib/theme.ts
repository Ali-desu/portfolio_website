export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint, inlined in <head>. Reads the saved choice, falls
 * back to the OS setting, and stamps data-theme on <html> so the correct
 * palette is already in place when the page renders. Without this the page
 * would flash light before a client effect could switch it.
 */
export const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem("${THEME_STORAGE_KEY}");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = saved === "light" || saved === "dark" ? saved : (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;
