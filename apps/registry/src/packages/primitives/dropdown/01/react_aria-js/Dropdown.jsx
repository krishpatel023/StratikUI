"use client";

import {
	FieldError,
	Header,
	Label,
	Menu,
	MenuItem,
	MenuTrigger as MenuTriggerAria,
	Popover,
	Separator,
	SubmenuTrigger as SubmenuTriggerAria,
	Text,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function DropdownTrigger({ children, ...props }) {
	return (
		<MenuTriggerAria aria-label={props.label || "Dropdown"} {...props}>
			<div className="flex flex-col gap-1">
				{props.label && (
					<Label className="text-primary-foreground text-sm">
						{props.label}
					</Label>
				)}
				{children}
				{props.description && (
					<Text slot="description" className="text-primary-foreground text-sm">
						{props.description}
					</Text>
				)}
				<FieldError className="text-sm text-error">
					{props.errorMessage}
				</FieldError>
			</div>
		</MenuTriggerAria>
	);
}

export function Dropdown({ items, children, className, ...props }) {
	return (
		<>
			<Popover>
				<Menu
					items={items}
					className={twMerge(
						"w-full bg-primary border border-outline-secondary py-1 rounded outline-none focus-visible:outline-none",
						className,
					)}
					{...props}
				>
					{/* <Section> */}
					{children}
					{/* </Section> */}
				</Menu>
			</Popover>
		</>
	);
}

export function DropdownItem({ className, ...props }) {
	return (
		<MenuItem
			aria-label="Dropdown Item"
			className={twMerge(
				"p-1 mx-1 rounded hover:bg-secondary hover:outline-none focus:bg-secondary focus:outline-none text-primary-foreground disabled:opacity-50 transition-colors duration-100 ease-linear hover:cursor-pointer",
				className,
			)}
			{...props}
		>
			{props.children}
		</MenuItem>
	);
}

export function DropdownHeader({ children, className }) {
	return (
		<Header
			className={twMerge("text-primary-foreground p-1 mx-1 mb-2", className)}
		>
			{children}
		</Header>
	);
}

export function DropdownDivider({ className }) {
	return (
		<Separator
			className={twMerge(
				"min-w-full min-h-[2px] border-b border-outline my-2",
				className,
			)}
		/>
	);
}

export const SubmenuTrigger = (props) => {
	return (
		<SubmenuTriggerAria {...props} aria-label={"Submenu"}>
			{props.children}
		</SubmenuTriggerAria>
	);
};
