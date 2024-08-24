"use client";

import { FileTrigger, type FileTriggerProps, Button } from "react-aria-components";

interface FileUploadButtonProps extends FileTriggerProps {
  className?: string;
  getFiles?: (files: File[]) => void;
}

export function FileUploadButton({ className, children, getFiles, ...props }: FileUploadButtonProps) {
  function handleFileUpload(e: FileList | null) {
    const files = Array.from(e as FileList);
    getFiles?.(files);
  }

  return (
    <FileTrigger onSelect={(e) => handleFileUpload(e)} {...props}>
      <Button className={className}>{children}</Button>
    </FileTrigger>
  );
}
