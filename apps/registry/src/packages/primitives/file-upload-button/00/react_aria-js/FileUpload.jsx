"use client";

import { Button, FileTrigger } from "react-aria-components";

export function FileUploadButton({ className, children, getFiles, ...props }) {
	function handleFileUpload(e) {
		const files = Array.from(e);
		getFiles?.(files);
	}

	return (
		<FileTrigger onSelect={(e) => handleFileUpload(e)} {...props}>
			<Button className={className}>{children}</Button>
		</FileTrigger>
	);
}
