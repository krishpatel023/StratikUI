import { twMerge } from "tailwind-merge";

export function GradientBackground({ children, className }) {
	return (
		<div className="relative group/gradient_bg w-max">
			<div className="relative z-10">{children}</div>
			<div
				className={twMerge(
					"absolute z-0 -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg blur opacity-75 group-hover/gradient_bg:opacity-100 duration-200 transition-all",
					className,
				)}
			/>
		</div>
	);
}
