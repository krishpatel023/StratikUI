import { twMerge } from "tailwind-merge";

export interface ContainerGlassEffectProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

export const ContainerGlassEffect = ({
	children,
	className,
	...props
}: ContainerGlassEffectProps) => {
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
