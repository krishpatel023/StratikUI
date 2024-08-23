"use client";

import {
	type Key,
	KeyListener,
	KeyListenerDisplay,
} from "@/components/ui/KeyListener";
import { Modal, ModalTrigger } from "@/components/ui/Modal";
import type { IconProps } from "@/utils/constants";
import { useEffect, useRef, useState } from "react";
import {
	Button,
	type ButtonProps,
	Group,
	type GroupProps,
	Input,
	type InputProps,
	type PressEvent,
	SearchField,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export interface CommandPaletteItemProps extends ButtonProps {
	link?: string;
	newTab?: boolean;
}

export function CommandPaletteItem({
	children,
	className,
	link,
	newTab,
	onPress,
	...props
}: CommandPaletteItemProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	function handleClick(e: PressEvent) {
		if (ref.current) ref.current.click();
		if (onPress) onPress(e);
	}

	return (
		<Button
			className={twMerge(
				"w-full h-12 px-2 md:px-4 rounded-md flex justify-between items-center text-base focus:outline-none focus:bg-secondary hover:bg-secondary dark:hover:bg-neutral-900 dark:focus:bg-neutral-900",
				className as string,
			)}
			onPress={handleClick}
			data-cmd-items
			{...props}
		>
			{children as React.ReactNode}
			{link && (
				<Link
					className="hidden"
					href={link}
					ref={ref}
					{...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
				/>
			)}
		</Button>
	);
}

export interface CommandPaletteProps {
	isOpen: boolean;
	onOpenChange?: (val: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

export function CommandPalette({
	isOpen,
	onOpenChange,
	children,
	className,
}: CommandPaletteProps) {
	return (
		<ModalTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
			<Modal
				className={twMerge(
					"max-h-[25rem] w-80 md:w-[30rem] p-0 bg-white dark:bg-neutral-950",
					className as string,
				)}
				isDismissable
			>
				{children}
			</Modal>
		</ModalTrigger>
	);
}

export interface CommandPaletteMenuProps extends GroupProps {
	children: React.ReactNode;
	isLoading?: boolean;
	isEmpty?: boolean;
}

export function CommandPaletteMenu({
	children,
	isLoading,
	isEmpty,
	className,
	...props
}: CommandPaletteMenuProps) {
	const menuRef = useRef<HTMLDivElement>(null);
	const [menuItems, setMenuItems] = useState<HTMLElement[]>([]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: both are needed
	useEffect(() => {
		if (menuRef.current) {
			const menuItemsFound = menuRef.current.querySelectorAll(
				"[data-cmd-items]",
			) as NodeListOf<HTMLElement>;
			const arr = Array.from(menuItemsFound);

			setMenuItems(arr);
		}
	}, [children, menuRef.current]);

	function moveFocusToNextElement() {
		const currentIndex = menuItems.indexOf(
			document.activeElement as HTMLElement,
		);

		if (currentIndex >= 0 && currentIndex < menuItems.length - 1) {
			menuItems[currentIndex + 1].focus();
		}

		if (currentIndex === -1) menuItems[0].focus();
	}

	function moveFocusToPreviousElement() {
		const currentIndex = menuItems.indexOf(
			document.activeElement as HTMLElement,
		);

		if (currentIndex > 0 && currentIndex <= menuItems.length - 1) {
			menuItems[currentIndex - 1].focus();
		}
	}

	return (
		<Group
			className={twMerge(
				"w-full max-h-80 z-10 py-2 px-2 overflow-y-auto scrollbar-x scrollbar-y",
				className as string,
			)}
			ref={menuRef}
			{...props}
		>
			<KeyListener onKeyDown={moveFocusToNextElement} keys={["Down"]} />
			<KeyListener onKeyDown={moveFocusToPreviousElement} keys={["Up"]} />

			{isLoading && <CommandPaletteLoading />}
			{isEmpty && <CommandPaletteEmpty />}
			{!isLoading && !isEmpty && children}
		</Group>
	);
}

export interface CommandPaletteSearchBarProps extends InputProps {}

export function CommandPaletteSearchBar({
	className,
	...props
}: CommandPaletteSearchBarProps) {
	function handleKeyDown(event: any) {
		if (event.key === "ArrowDown") {
			const menuItemsFound = document.querySelectorAll(
				"[data-cmd-items]",
			) as NodeListOf<HTMLElement>;
			const arr = Array.from(menuItemsFound);

			arr[0].focus();
			event.preventDefault();
			arr[0].scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "nearest",
			});
		}
	}

	return (
		<SearchField aria-label="Search">
			<Input
				type="text"
				className={twMerge(
					"my-1 w-full bg-transparent text-foreground py-2 px-4 rounded-md border-none focus:outline-none",
					className as string,
				)}
				aria-label="Search box"
				onKeyDown={handleKeyDown}
				autoFocus
				{...props}
			/>
		</SearchField>
	);
}

export interface CommandPaletteGroupProps {
	children: React.ReactNode;
	heading?: string;
	className?: string;
}
export function CommandPaletteGroup({
	heading,
	children,
	className,
}: CommandPaletteGroupProps) {
	return (
		<div className={twMerge("w-full flex flex-col", className)}>
			{heading && (
				<div>
					<h1 className="ml-2 mt-4 mb-3 text-sm font-medium underline underline-offset-1">
						{heading}
					</h1>
				</div>
			)}
			{children}
		</div>
	);
}

export function CommandPaletteLoading() {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<div className="text-center text-sm font-medium text-foreground">
				<Icons.loading className="animate-spin w-8 h-8 mx-auto" />
			</div>
		</div>
	);
}

export function CommandPaletteEmpty() {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<div className="text-center text-sm font-medium text-foreground">
				No results found
			</div>
		</div>
	);
}

export function CommandPaletteDivider({ className }: { className?: string }) {
	return (
		<div
			className={twMerge(
				"min-w-full border-[0.5px] border-outline-secondary",
				className,
			)}
		/>
	);
}

export type CommandPaletteFooterProps = {
	name: string;
	key: Key[];
}[];

export function CommandPaletteFooter({
	listeners,
}: {
	listeners: CommandPaletteFooterProps;
}) {
	return (
		<div className="w-full h-full flex items-center justify-end px-4 pb-2 gap-2">
			{listeners.map((item, index) => (
				<div
					key={index}
					className="flex gap-2 items-center text-neutral-700 dark:text-neutral-200 text-sm"
				>
					<KeyListenerDisplay
						keys={item.key}
						key={index}
						className="text-xs py-0.5"
					/>
					<span>{item.name}</span>
				</div>
			))}
		</div>
	);
}

const Icons = {
	loading: (props: IconProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<title>Loader Icon</title>
			<path fill="currentColor" d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3Z" />
		</svg>
	),
};
