import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import {
  ThemeContext,
  type ResolvedTheme,
  type Theme,
} from "../../hooks/useTheme";

const STORAGE_KEY = "theme";

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

/** The inline script in index.html has already resolved and painted the theme. */
const readInitialTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
  return "system";
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark"
  );

  useEffect(() => {
    const applied = theme === "system" ? getSystemTheme() : theme;
    document.documentElement.setAttribute("data-theme", applied);
    setResolvedTheme(applied);

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore — the theme still applies for this session.
    }

    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const next = getSystemTheme();
      document.documentElement.setAttribute("data-theme", next);
      setResolvedTheme(next);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
