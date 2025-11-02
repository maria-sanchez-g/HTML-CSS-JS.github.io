"use client";
import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    mode: "light",
    background: "#ffffff",
    foreground: "#000000",
  });

  function toggleTheme() {
    setTheme(prevTheme =>
      prevTheme.mode === "light"
        ? { mode: "dark", background: "#1a1a1a", foreground: "#ffffff" }
        : { mode: "light", background: "#ffffff", foreground: "#000000" }
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
