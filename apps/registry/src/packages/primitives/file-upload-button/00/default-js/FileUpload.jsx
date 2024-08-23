"use client";

import { useRef } from "react";

export function FileUploadButton({
	children,
	getFiles,
	allowsMultiple,
	acceptedFileTypes,
	className,
	...props
}) {
	function handleFileUpload(e) {
		e.preventDefault();
		const target = e.target;

		let Files = [];

		if (allowsMultiple) {
			Files = Array.from(target.files ? target.files : []);
		} else {
			const file = target.files?.[0];
			Files = file ? [file] : [];
		}
		getFiles?.(Files);
	}

	const inputRef = useRef(null);

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
