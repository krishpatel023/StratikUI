import { twMerge } from "tailwind-merge";

export function ConicGradientContainer({ children, className }) {
	return (
		<div
			className={twMerge(
				"relative flex rounded-md border border-outline-secondary bg-background text-foreground overflow-hidden",
				className,
			)}
		>
			<div
				aria-hidden="true"
				className="left-1/2 right-1 top-0 w-[300px] sm:left-auto user-select-none center pointer-events-none absolute h-px max-w-full  -translate-y-1/2 bg-gradient-to-r from-transparent via-neutral-900 dark:via-neutral-400 to-transparent"
			/>
			<div
				aria-hidden="true"
				className="hidden dark:block -top-1 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto user-select-none center pointer-events-none absolute max-w-full -translate-y-1/2"
				style={{
					background:
						"conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
				}}
			/>
			<div
				aria-hidden="true"
				className="dark:hidden -top-4 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto user-select-none center pointer-events-none absolute max-w-full -translate-y-1/2"
				style={{
					background:
						"conic-gradient(from 90deg at 50% 50%, #ffffff00 50%, #fff 50%),radial-gradient(#D6E1FF90 0%, transparent 80%)",
				}}
			/>
			{children}
		</div>
	);
}
