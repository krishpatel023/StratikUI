import { twMerge } from "tailwind-merge";

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={twMerge(
				"animate-pulse rounded-[inherit] bg-secondary min-w-full min-h-full",
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
