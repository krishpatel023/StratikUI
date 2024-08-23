"use client";

import {
	Button,
	FieldError,
	Header,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	Select as ReactAriaSelect,
	SelectValue,
	Separator,
	Text,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Select({ children, className, ...props }) {
	return (
		<ReactAriaSelect
			className={twMerge("flex flex-col", className)}
			aria-label={props.label || "Select"}
			{...props}
		>
			<>
				{props.label && (
					<Label className="text-primary-foreground text-sm">
						{props.label}
					</Label>
				)}
				<SelectWrapper>{children}</SelectWrapper>
				{props.description && (
					<Text slot="description" className="text-primary-foreground text-sm">
						{props.description}
					</Text>
				)}
				<FieldError className="text-sm text-error">
					{props.errorMessage}
				</FieldError>
			</>
		</ReactAriaSelect>
	);
}

export function SelectWrapper({ items, children, className, ...props }) {
	return (
		<>
			<Button className="w-full text-start px-2 py-1 rounded border border-outline-secondary bg-primary open:bg-secondary text-primary-foreground my-1 max-w-80">
				<SelectValue />
			</Button>
			<Popover>
				<ListBox
					items={items}
					className={twMerge(
						"w-full bg-primary border border-outline-secondary py-1 rounded focus:outline-none",
						className,
					)}
					{...props}
				>
					{children}
				</ListBox>
			</Popover>
		</>
	);
}

export function SelectItem({ className, ...props }) {
	return (
		<ListBoxItem
			className={twMerge(
				"p-1 mx-1 rounded hover:bg-secondary hover:outline-none focus:bg-secondary focus:outline-none text-primary-foreground disabled:opacity-50 hover:cursor-pointer",
				className,
			)}
			{...props}
		>
			{props.children}
		</ListBoxItem>
	);
}

export function SelectHeader({ children, className }) {
	return (
		<Header
			className={twMerge("text-primary-foreground p-1 mx-1 mb-2", className)}
		>
			{children}
		</Header>
	);
}

export function SelectDivider({ className }) {
	return (
		<Separator
			className={twMerge(
				"min-w-full  border-b-[1px] border-outline my-2",
				className,
			)}
		/>
	);
}
