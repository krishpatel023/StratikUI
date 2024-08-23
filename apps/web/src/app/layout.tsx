import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./provider";
import { DEFAULT_MODE } from "@/utils/utils";
import { twMerge } from "tailwind-merge";
import Sidebar from "@/components/Sidebar";
import { Links } from "@/utils/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Stratik UI",
	description:
		"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Developer Friendly.",
	icons: {
		icon: "/icon.svg",
	},
	keywords: [
		"Next.js",
		"React",
		"Tailwind CSS",
		"Server Components",
		"React Aria Components",
		"Components",
		"Hooks",
		"Primitives",
	],
	authors: [
		{
			name: "Krish Patel",
			url: Links.personal.twitter,
		},
	],
	creator: "Krish Patel",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: Links.stratikui.url,
		title: "Stratik UI",
		description:
			"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Developer Friendly.",
		siteName: "Stratik UI",
		images: [
			{
				url: `${Links.stratikui.url}og.png`,
				width: 1200,
				height: 630,
				alt: "Stratik UI Banner",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Stratik UI",
		description:
			"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Developer Friendly.",
		images: [`${Links.stratikui.url}og.png`],
		creator: "@krish__23",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={twMerge(
					"scrollbar-y scrollbar-x bg-background",
					DEFAULT_MODE && "dark",
					inter.className,
				)}
				id="theme-toggle"
			>
				<Providers>
					<Sidebar />
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
