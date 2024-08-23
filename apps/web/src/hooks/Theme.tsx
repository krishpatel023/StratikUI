"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_MODE } from "@/utils/utils";

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
	const [theme, setTheme] = useState<boolean>(() => {
		if (typeof window !== "undefined") {
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		// Return a default theme for SSR
		return DEFAULT_MODE;
	});

	const toggleTheme = () => {
		setTheme(!theme);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const checkSystemTheme = () =>
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light";

			const systemTheme = checkSystemTheme();
			setTheme(systemTheme === "dark");

			// Listener for theme changes
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const handleChange = () => setTheme(mediaQuery.matches);

			mediaQuery.addEventListener("change", handleChange);

			return () => {
				mediaQuery.removeEventListener("change", handleChange);
			};
		}
	}, []);

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
