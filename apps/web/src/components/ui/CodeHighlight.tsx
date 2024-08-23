"use client";

import "@/assets/Styles/shiki.css";
import { codeToHtml } from "shiki/bundle/web";
import {
	transformerNotationHighlight,
	transformerNotationDiff,
} from "@shikijs/transformers";
import type { BundledLanguage } from "shiki";
import { useEffect, useState } from "react";
import { Skeleton } from "./Skeleton";
import { twMerge } from "tailwind-merge";

type Props = {
	code: string;
	lang?: BundledLanguage;
	withCounter?: boolean;
	skeletonClassName?: string;
};
export default function CodeHighlight({
	code,
	lang = "javascript",
	withCounter = true,
	skeletonClassName = "",
}: Props) {
	const [html, setHtml] = useState("");

	// biome-ignore lint/correctness/useExhaustiveDependencies: will cause re-renders
	useEffect(() => {
		const callFunc = async () => {
			const val = await getHtml();
			setHtml(val);
		};

		callFunc();
	}, [code]);

	async function getHtml() {
		return await codeToHtml(code, {
			lang,
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
			transformers: [transformerNotationHighlight(), transformerNotationDiff()],
		});
	}

	return (
		<>
			{html ? (
				<div className="w-full mx-auto overflow-hidden">
					<div
						className={`${withCounter ? "with-counter" : ""} text-sm [&>pre]:overflow-x-auto  dark:[&>pre]:!bg-neutral-900/70 [&>pre]:!bg-gray-50  [&>pre]:py-4 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full`}
						// biome-ignore lint/security/noDangerouslySetInnerHtml: needed for code highlighting
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			) : (
				<Skeleton
					className={twMerge(
						"w-full bg-slate-50 dark:bg-neutral-950",
						withCounter ? "min-h-60" : "min-h-10",
						skeletonClassName,
					)}
				/>
			)}
		</>
	);
}
