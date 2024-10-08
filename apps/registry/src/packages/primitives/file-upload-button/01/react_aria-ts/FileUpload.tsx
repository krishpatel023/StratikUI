"use client";

import { Button, type ButtonProps } from "@registry/packages/primitives/buttons/01/react_aria-ts/Button";
import { FileTrigger, type FileTriggerProps } from "react-aria-components";

interface FileUploadButtonProps extends FileTriggerProps {
  className?: string;
  getFiles?: (files: File[]) => void;
  variant?: ButtonProps["variant"];
}

export function FileUploadButton({
  className,
  children,
  getFiles,
  variant = "primary",
  ...props
}: FileUploadButtonProps) {
  function handleFileUpload(e: FileList | null) {
    const files = Array.from(e as FileList);
    getFiles?.(files);
  }

  return (
    <FileTrigger onSelect={(e) => handleFileUpload(e)} {...props}>
      <Button className={className} variant={variant}>
        {children}
      </Button>
    </FileTrigger>
  );
}
