import { twMerge } from "tailwind-merge";

export function GradientText({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<h1
			className={twMerge(
				"bg-gradient-to-b inline-block text-transparent bg-clip-text from-neutral-800 to-neutral-600 dark:from-neutral-500 dark:to-neutral-300",
				className,
			)}
		>
			{children}
		</h1>
	);
}
