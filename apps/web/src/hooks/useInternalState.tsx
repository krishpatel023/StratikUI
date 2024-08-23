"use client";

import { createContext, useContext, useState } from "react";

const InternalStateContext = createContext<{
	sidebar: boolean;
	setSidebar: (open: boolean) => void;
	searchbar: boolean;
	setSearchbar: (open: boolean) => void;
	provider: "default" | "react_aria";
	setProvider: (provider: "default" | "react_aria") => void;
	language: "js" | "ts";
	setLanguage: (language: "js" | "ts") => void;
	themingOption: "tailwind" | "custom";
	setThemingOption: (themingOption: "tailwind" | "custom") => void;
}>({
	sidebar: false,
	setSidebar: () => {},
	searchbar: false,
	setSearchbar: () => {},
	provider: "react_aria",
	setProvider: () => {},
	language: "ts",
	setLanguage: () => {},
	themingOption: "tailwind",
	setThemingOption: () => {},
});

export const useInternalState = () => useContext(InternalStateContext);

export const InternalStateProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [sidebar, setSidebar] = useState<boolean>(false);
	const [searchbar, setSearchbar] = useState<boolean>(false);

	const [provider, setProvider] = useState<"default" | "react_aria">(
		"react_aria",
	);
	const [language, setLanguage] = useState<"js" | "ts">("ts");

	const [themingOption, setThemingOption] = useState<"tailwind" | "custom">(
		"tailwind",
	);

	return (
		<InternalStateContext.Provider
			value={{
				sidebar,
				setSidebar,
				searchbar,
				setSearchbar,
				provider,
				setProvider,
				language,
				setLanguage,
				themingOption,
				setThemingOption,
			}}
		>
			{children}
		</InternalStateContext.Provider>
	);
};
