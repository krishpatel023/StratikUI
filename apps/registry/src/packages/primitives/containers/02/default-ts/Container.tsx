import { twMerge } from "tailwind-merge";

export function GradientBackground({
	children,
	className,
	borderSize = 0.25,
}: {
	children: React.ReactNode;
	className?: string;
	borderSize?: number;
}) {
	return (
		<div className="relative group/gradient_bg">
			<div className="relative z-10 ">{children}</div>
			<div
				className={twMerge(
					"absolute bg-gradient-to-r  from-blue-500 to-red-500 -z-[5] rounded-xl",
					className,
				)}
				style={{
					top: `-${borderSize}rem`,
					left: `-${borderSize}rem`,
					minHeight: `calc(100% + ${2 * borderSize}rem)`,
					minWidth: `calc(100% + ${2 * borderSize}rem)`,
				}}
			/>
		</div>
	);
}
