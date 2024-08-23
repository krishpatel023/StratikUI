"use client";
import { motion } from "framer-motion";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Button } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Header({ className, children, ...props }) {
	return (
		<header className={twMerge("h-full", className)} {...props}>
			{children}
		</header>
	);
}

function useExtractHeaderDropdowns(children) {
	const dropdowns = [];
	const dropdownRefs = useRef(
		Array.isArray(children)
			? new Array(children.length).fill({ current: null })
			: [],
	);

	const newChildren = React.Children.map(children, (child, index) => {
		if (React.isValidElement(child) && child.type === HeaderItem) {
			let dropdownFound = false;
			let extractedDropdown = null;

			const newHeaderItem = React.cloneElement(
				child,
				{},
				React.Children.map(child.props.children, (subChild) => {
					if (
						React.isValidElement(subChild) &&
						subChild.type === HeaderDropdown
					) {
						extractedDropdown = subChild;
						dropdownFound = true;
						return null;
					}
					return subChild;
				}),
			);

			dropdowns.push(extractedDropdown); // This will be null if no dropdown was found

			return React.cloneElement(newHeaderItem, {
				key: index,
				ref: (el) => {
					if (dropdownRefs.current) {
						dropdownRefs.current[index] = el;
					}
				},
			});
		}
		return child;
	});

	return [newChildren, dropdowns, dropdownRefs];
}

export function HeaderAnimationWrapper({
	className,
	children,
	activeIndex,
	prevActiveIndex,
	open,
	...props
}) {
	const [newChildren, dropdown, dropdownRefs] =
		useExtractHeaderDropdowns(children);

	const containerRef = useRef(null);

	const [shiftX, setShiftX] = useState(0);
	const [prevShiftX, setPrevShiftX] = useState(0);

	const changePosition = () => {
		if (
			open &&
			activeIndex &&
			containerRef &&
			containerRef.current &&
			dropdownRefs?.current[activeIndex]
		) {
			const outerBoxLength = containerRef.current.getBoundingClientRect();
			const innerBoxLength =
				dropdownRefs.current[activeIndex]?.getBoundingClientRect();
			if (!innerBoxLength) return;

			const val =
				innerBoxLength.left + innerBoxLength.width / 2 - outerBoxLength.left;

			setShiftX(val);
			if (!prevShiftX) setPrevShiftX(val);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: addition of changePosition() will cause the component to re-render many times
	useEffect(() => {
		setPrevShiftX(shiftX);
		changePosition();
		if (!activeIndex) setPrevShiftX(0);
	}, [activeIndex]);

	return (
		<div
			ref={containerRef}
			className={twMerge(
				"h-full w-max flex justify-center items-center gap-2 relative",
				className,
			)}
			{...props}
		>
			{newChildren}
			<>
				{open &&
				activeIndex &&
				dropdown &&
				dropdown[activeIndex] &&
				shiftX !== 0 &&
				prevShiftX !== 0 ? (
					<motion.div
						className="absolute top-full flex left-0 justify-center group/headerItem"
						initial={{ x: prevShiftX }}
						animate={{
							x: shiftX,
							transition: prevActiveIndex
								? { type: "spring", stiffness: 300, damping: 30 }
								: { duration: 0.5, ease: "easeInOut" },
						}}
					>
						{dropdown[activeIndex]}
					</motion.div>
				) : null}
			</>
		</div>
	);
}

export const HeaderItem = forwardRef(
	(
		{
			open = false,
			onChange,
			className,
			children,
			onPress,
			onHoverStart,
			onHoverEnd,
			onFocus,
			onBlur,
			...props
		},
		ref,
	) => {
		const [internalOpen, setInternalOpen] = useState(open);

		// biome-ignore lint/correctness/useExhaustiveDependencies: addition of onChange() will cause the component to re-render many times
		useEffect(() => {
			onChange?.(internalOpen);
		}, [internalOpen]);

		return (
			<Button
				ref={ref}
				className={twMerge(
					"relative flex flex-col justify-center text-center items-center gap-4 group/headerItem h-full text-foreground",
					className,
				)}
				{...props}
				data-open={internalOpen}
				onPress={(e) => {
					onPress?.(e);
					setInternalOpen(!open);
				}}
				onHoverStart={(e) => {
					onHoverStart?.(e);
					setInternalOpen(true);
				}}
				onHoverEnd={(e) => {
					onHoverEnd?.(e);
					setInternalOpen(false);
				}}
				onFocus={(e) => {
					onFocus?.(e);
					setInternalOpen(true);
				}}
				onBlur={(e) => {
					onBlur?.(e);
					setInternalOpen(false);
				}}
			>
				{children}
			</Button>
		);
	},
);

HeaderItem.displayName = "HeaderItem";

export function HeaderDropdown({ className, children, ...props }) {
	return (
		<div className="w-max transition-all duration-300 ease-linear group-data-[open=false]/headerItem:hidden absolute top-full">
			<div
				className={twMerge(
					"bg-primary text-primary-foreground p-4 rounded border border-outline-secondary",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>
	);
}
