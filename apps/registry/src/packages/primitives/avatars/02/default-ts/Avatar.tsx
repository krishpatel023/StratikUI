"use client";

import Image, { type StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface AvatarProps {
	src?: string | StaticImageData;
	alt?: string;
	className?: string;
	name: string;
	isDisabled?: boolean;
}

export function Avatar({ src, alt, name, className, isDisabled }: AvatarProps) {
	const initials = name
		.split(" ")
		.map((word) => word.charAt(0))
		.join("")
		.substring(0, 2);

	return (
		<div
			className={twMerge(
				"size-12 rounded-full flex justify-center items-center group aria-disabled: bg-gradient-to-r from-blue-500 to-purple-500",
				className,
			)}
			aria-disabled={isDisabled}
			aria-label="avatar"
		>
			{src ? (
				<Image
					src={src}
					alt={alt || "avatar"}
					className="rounded-[inherit] size-full"
				/>
			) : (
				<h1 aria-label="initials" className="text-2xl text-primary-foreground">
					{initials}
				</h1>
			)}
		</div>
	);
}

export interface AvatarWithIconProps extends AvatarProps {
	icon?: JSX.Element;
}

export function AvatarWithIcon({ icon, ...props }: AvatarWithIconProps) {
	return (
		<div className="relative w-max">
			<Avatar {...props} />
			{icon && (
				<div
					className={twMerge(
						"absolute -right-1 bottom-0 w-6 h-6 rounded-full flex justify-center items-center bg-primary-foreground",
					)}
				>
					{icon}
				</div>
			)}
		</div>
	);
}
