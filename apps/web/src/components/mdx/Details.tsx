"use client";

import { useInternalState } from "@/hooks/useInternalState";
import { twMerge } from "tailwind-merge";

export const Details = ({ children }: { children: React.ReactNode }) => {
	const { provider } = useInternalState();
	return (
		<div
			className="group/details w-full flex flex-col gap-6"
			data-provider={
				provider.includes("_") ? provider.replace("_", "") : provider
			}
		>
			{children}
		</div>
	);
};

export const Provider = ({
	tag,
	children,
}: {
	tag: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={twMerge(
				"flex-col gap-6 hidden",
				tag === "default" && "group-data-[provider=default]/details:flex",
				tag === "react_aria" &&
					"group-data-[provider='reactaria']/details:flex",
			)}
		>
			{children}
		</div>
	);
};
