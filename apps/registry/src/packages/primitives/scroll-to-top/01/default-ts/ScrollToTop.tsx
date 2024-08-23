"use client";

import useScrollTo from "@registry/packages/hooks/useScrollTo/01/default-ts/useScrollTo";
import type { IconProps } from "@registry/utils/types";
import { Button } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export const ScrollToTop = ({ className }: { className?: string }) => {
	const { isVisible, scroll } = useScrollTo({ threshold: 150 });

	const handleScrollToTop = () => {
		scroll(null);
	};

	return (
		<Button
			onPress={handleScrollToTop}
			className={twMerge(
				"p-2 absolute right-4 bottom-4 text-primary-foreground bg-primary hover:bg-secondary rounded-lg border border-outline-secondary",
				isVisible ? "" : "hidden",
				className,
			)}
		>
			<UpIcon className="w-6 h-6" />
		</Button>
	);
};

export const UpIcon = (props: IconProps) => (
	<svg
		height="200"
		width="200"
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<title>Scroll to top icon</title>
		<path
			d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06L5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);
