import { twMerge } from "tailwind-merge";

export const ContainerGlassEffect = ({ children, className, ...props }) => {
	return (
		<div
			className={twMerge(
				"bg-neutral-100/30 dark:bg-neutral-900/40 backdrop-blur supports-[backdrop-filter]:bg-neutral-100/40 dark:supports-[backdrop-filter]:bg-neutral-900/40 z-50",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};
