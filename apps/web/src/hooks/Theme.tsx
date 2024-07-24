"use client";

import { DEFAULT_MODE } from "@/utils/utils";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<{
  theme: boolean;
  setTheme: (theme: boolean) => void;
  toggleTheme: () => void;
}>({
  theme: false,
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(DEFAULT_MODE);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme) {
      document.getElementById("theme-toggle")?.classList.add("dark");
      const containers = document.getElementsByClassName(
        `container-theme-handler`
      );
      for (let i = 0; i < containers.length; i++) {
        containers[i].classList.add("darkComponent");
      }
    } else {
      document.getElementById("theme-toggle")?.classList.remove("dark");
      const containers = document.getElementsByClassName(
        `container-theme-handler`
      );
      for (let i = 0; i < containers.length; i++) {
        containers[i].classList.remove("darkComponent");
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};