export type ColorPaletteSettings = "custom" | "tailwind";

// Just a few test cases to make sure the regex works as expected
const TEST_CASES = [
	"bg-primary",
	"bg-secondary",
	"text-outline",
	"focus:ring-accent",
	"hover:bg-accent-secondary",
	"group-focus:ring-accent",
	"group-hover:bg-accent-foreground",
	"group-data-[selected=true]:bg-error-secondary",
	"group-focus:ring-error",
];

export default function StringCleaner(
	str: string,
	colorPalette: ColorPaletteSettings,
): string {
	if (!str) return "";
	let output = convertContainerQueries(str);

	if (colorPalette === "tailwind") {
		output = replaceColorVariables(output);
	}
	return output;
}

function convertContainerQueries(input: string): string {
	const containerQueries = [
		"sm",
		"md",
		"lg",
		"xl",
		"2xl",
		"3xl",
		"4xl",
		"5xl",
		"6xl",
		"7xl",
	];
	let output: string = input;

	for (const query of containerQueries) {
		const regex = new RegExp(`@${query}:`, "g");
		if (!output) return "";
		if (!regex.test(output)) return output;
		output = output.replace(regex, `${query}:`);
	}

	return output;
}

interface ColorPalette {
	background: string;
	foreground: string;
	primary: string;
	"primary-foreground": string;
	secondary: string;
	"secondary-foreground": string;
	accent: string;
	"accent-foreground": string;
	"accent-secondary": string;
	"accent-secondary-foreground": string;
	outline: string;
	"outline-secondary": string;
	"outline-foreground": string;
	success: string;
	"success-secondary": string;
	"success-foreground": string;
	alert: string;
	"alert-secondary": string;
	"alert-foreground": string;
	error: string;
	"error-secondary": string;
	"error-foreground": string;
	muted: string;
	"muted-secondary": string;
	"muted-foreground": string;
	blur: string;
	"blur-secondary": string;
	"blur-foreground": string;
}

const lightComponent: ColorPalette = {
	background: "white",
	foreground: "black",
	primary: "neutral-100",
	"primary-foreground": "neutral-800",
	secondary: "neutral-200",
	"secondary-foreground": "neutral-700",
	accent: "blue-600",
	"accent-foreground": "white",
	"accent-secondary": "blue-500",
	"accent-secondary-foreground": "white",
	outline: "neutral-500",
	"outline-secondary": "neutral-300",
	"outline-foreground": "neutral-500",
	success: "green-500",
	"success-secondary": "green-400",
	"success-foreground": "white",
	alert: "yellow-500",
	"alert-secondary": "yellow-400",
	"alert-foreground": "yellow-900",
	error: "red-600",
	"error-secondary": "red-500",
	"error-foreground": "white",
	muted: "neutral-600",
	"muted-secondary": "neutral-200",
	"muted-foreground": "neutral-200",
	blur: "white/30",
	"blur-secondary": "neutral-200/30",
	"blur-foreground": "neutral-800",
};

const darkComponent: ColorPalette = {
	background: "black",
	foreground: "white",
	primary: "neutral-900",
	"primary-foreground": "neutral-100",
	secondary: "neutral-800",
	"secondary-foreground": "neutral-400",
	accent: "blue-600",
	"accent-foreground": "white",
	"accent-secondary": "blue-500",
	"accent-secondary-foreground": "white",
	outline: "neutral-700",
	"outline-secondary": "neutral-800",
	"outline-foreground": "neutral-600",
	success: "green-800",
	"success-secondary": "green-600",
	"success-foreground": "white",
	alert: "yellow-600",
	"alert-secondary": "yellow-400",
	"alert-foreground": "yellow-900",
	error: "red-600",
	"error-secondary": "red-500",
	"error-foreground": "white",
	muted: "neutral-300",
	"muted-secondary": "neutral-800",
	"muted-foreground": "neutral-700",
	blur: "black/30",
	"blur-secondary": "neutral-800/30",
	"blur-foreground": "neutral-200",
};

const COLOR_TAGS = [
	"to",
	"from",
	"via",
	"bg",
	"text",
	"border",
	"ring",
	"placeholder",
	"fill",
	"caret",
	"divide",
	"stroke",
	"accent",
	"shadow",
	"outline",
	"decoration",
	"placeholder",
	"ring-offset",
	"border-x",
	"border-y",
	"border-t",
	"border-r",
	"border-b",
	"border-l",
	"border-s",
	"border-e",
];

function replaceColorVariables(input: string): string {
	const colorVariables = Object.keys(lightComponent);
	let output = input;
	if (typeof input !== "string" || !output) return "";

	//   increase the spacing between the ""
	output = output.replaceAll('"', ' " ');

	for (const tag of COLOR_TAGS) {
		for (const color of colorVariables) {
			// Regex for normal cases (no prefix)
			const normalRegex = new RegExp(
				`(?<![:\\w-])${tag}-${color}(?![\\w-])`,
				"g",
			);

			// Regex for prefixed cases, including complex prefixes like attribute selectors
			const prefixedRegex = new RegExp(
				`(^|\\s)([^\\s]+:)(\\S*${tag}-${color})(?=\\s|$)`,
				"g",
			);

			const normalPass = normalRegex.test(output);
			const prefixedPass = prefixedRegex.test(output);

			if (normalPass) {
				// Handle normal cases
				output = output.replace(normalRegex, (match) => {
					const lightColor = (lightComponent as any)[color];
					const darkColor = (darkComponent as any)[color];

					return `${tag}-${lightColor} dark:${tag}-${darkColor}`;
				});
			}
			if (prefixedPass) {
				// Handle prefixed cases
				output = output.replace(
					prefixedRegex,
					(match, space, prefix, className) => {
						const lightColor = (lightComponent as any)[color];
						const darkColor = (darkComponent as any)[color];

						// Ensure the prefix is correctly applied to both light and dark colors
						return `${space}${prefix}${tag}-${lightColor} ${space}dark:${prefix}${tag}-${darkColor}`;
					},
				);
			}
		}
	}

	//   Change the spacing between the "" to a single space
	output = output.replaceAll(' " ', '"');
	return output;
}
