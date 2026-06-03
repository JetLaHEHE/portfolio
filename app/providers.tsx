"use client";

import { useTheme } from "@/lib/useTheme";
import { createContext, useContext } from "react";

const ThemeContext = createContext<ReturnType<typeof useTheme> | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within Providers");
  return ctx;
}
