"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Switch = ({
	variant = "primary",
	className,
	isSelected = false,
	isDisabled = false,
	onChange,
	children,
	...props
}) => {
	const [selected, setSelected] = useState(isSelected);

	const handleChange = () => {
		if (isDisabled) {
			return;
		}
		setSelected(!selected);
		if (onChange) {
			onChange(!selected);
		}
	};

	useEffect(() => {
		setSelected(isSelected);
	}, [isSelected]);

	return (
		<button
			className={twMerge(
				"group flex gap-4 justify-center items-center hover:cursor-pointer disabled:cursor-not-allowed text-foreground disabled:text-muted-foreground",
				className,
			)}
			data-selected={selected}
			onClick={handleChange}
			disabled={isDisabled}
			aria-checked={selected}
			aria-disabled={isDisabled}
			{...props}
		>
			<>
				<div
					className={twMerge(
						" rounded-full min-w-14 max-w-14 flex justify-start items-center group-data-[selected=true]:justify-end group-focus:ring-2  group-disabled:opacity-50 transition-all duration-200 ease-linear",
						variant === "primary" &&
							"bg-primary border border-outline-secondary group-data-[selected=true]:bg-secondary group-focus:ring-primary",
						variant === "accent" &&
							"bg-secondary border border-outline  group-data-[selected=true]:bg-accent group-focus:ring-accent",
						variant === "destructive" &&
							"bg-secondary border border-outline-secondary group-data-[selected=true]:bg-error-secondary group-focus:ring-error",
						variant === "outline" &&
							" border border-outline group-focus:ring-outline-secondary",
					)}
				>
					<span
						className={twMerge(
							"min-w-5 max-w-5 min-h-5 max-h-5 m-1 rounded-full  transition-all duration-200 ease-linear",
							variant === "primary" &&
								"bg-secondary-foreground group-data-[selected=true]:bg-primary-foreground",
							variant === "accent" &&
								"bg-accent group-data-[selected=true]:bg-accent-foreground",
							variant === "destructive" &&
								"bg-error-foreground group-data-[selected=true]:bg-error-foreground",
							variant === "outline" &&
								"bg-outline-foreground group-data-[selected=true]:bg-foreground",
						)}
					/>
				</div>
				{children}
			</>
		</button>
	);
};
