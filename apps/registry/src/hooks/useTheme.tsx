"use client";

import { DEFAULT_THEME } from "@/utils/controllers";
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
	const [theme, setTheme] = useState<boolean>(DEFAULT_THEME);

	const toggleTheme = () => {
		setTheme(!theme);
	};

	useEffect(() => {
		if (theme) {
			document.getElementById("theme-toggle")?.classList.add("dark");
		} else {
			document.getElementById("theme-toggle")?.classList.remove("dark");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
