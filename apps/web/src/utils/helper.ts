import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createId } from "@paralleldrive/cuid2";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function genId(prefix: string) {
	const cuid = createId();
	return `${prefix}-${cuid}`;
}

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
