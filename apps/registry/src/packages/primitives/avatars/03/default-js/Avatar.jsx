"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function Avatar({ src, alt, name, className, isDisabled }) {
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

export function AvatarStack({ avatars, limit = 5, withExtension }) {
	const displayedAvatars = avatars.slice(0, limit);
	const remainingCount = avatars.length - limit;

	return (
		<div className="flex flex-row-reverse">
			{withExtension && remainingCount > 0 && (
				<div className="z-10 -ml-4 last:ml-0">
					<Avatar name={`+ ${remainingCount}`} />
				</div>
			)}
			{displayedAvatars.map((avatar, index) => (
				<div
					key={index}
					className="-ml-4 last:ml-0"
					style={{ zIndex: displayedAvatars.length - index }}
				>
					<Avatar {...avatar} />
				</div>
			))}
		</div>
	);
}
