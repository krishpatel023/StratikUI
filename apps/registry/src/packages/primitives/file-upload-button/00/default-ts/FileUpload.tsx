"use client";

import {
	type ChangeEvent,
	type DetailedHTMLProps,
	type InputHTMLAttributes,
	useRef,
} from "react";

export interface FileUploadButtonProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	getFiles?: (files: File[]) => void;
	allowsMultiple?: boolean;
	acceptedFileTypes?: InputHTMLAttributes<HTMLInputElement>["accept"][];
}

export function FileUploadButton({
	children,
	getFiles,
	allowsMultiple,
	acceptedFileTypes,
	className,
	...props
}: FileUploadButtonProps) {
	function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		const target = e.target as HTMLInputElement;

		let Files: File[] = [];

		if (allowsMultiple) {
			Files = Array.from(target.files ? target.files : []);
		} else {
			const file = target.files?.[0];
			Files = file ? [file] : [];
		}
		getFiles?.(Files);
	}

	const inputRef = useRef<HTMLInputElement>(null);

	function handleClick() {
		inputRef.current?.click();
	}

	return (
		<>
			<input
				type="file"
				ref={inputRef}
				className="hidden"
				onChange={(e) => handleFileUpload(e)}
				multiple={allowsMultiple}
				accept={acceptedFileTypes?.join(",")}
				{...props}
			/>
			<button type="button" className={className} onClick={handleClick}>
				{children}
			</button>
		</>
	);
}
