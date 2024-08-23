"use client";

import {
	Dialog,
	DialogTrigger,
	Popover as ReactAriaPopover,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function PopoverTrigger({ children, ...props }) {
	return <DialogTrigger {...props}>{children}</DialogTrigger>;
}

export function Popover({ children, className, ...props }) {
	return (
		<ReactAriaPopover {...props}>
			<Dialog
				className={twMerge(
					"bg-primary p-4 rounded border border-outline-secondary text-primary-foreground outline-none",
					className,
				)}
			>
				{children}
			</Dialog>
		</ReactAriaPopover>
	);
}
