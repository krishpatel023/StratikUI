"use client";

import {
  Button,
  ButtonProps,
} from "@registry/primitives/buttons/01/react_aria-ts/Button";
import { FileTrigger, FileTriggerProps } from "react-aria-components";

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
    let files = Array.from(e as FileList);
    getFiles && getFiles(files);
  }

  return (
    <FileTrigger onSelect={(e) => handleFileUpload(e)} {...props}>
      <Button className={className} variant={variant}>
        {children}
      </Button>
    </FileTrigger>
  );
}
