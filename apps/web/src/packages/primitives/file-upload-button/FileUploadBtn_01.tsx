"use client";

import { useState } from "react";
import { FileTrigger, FileTriggerProps } from "react-aria-components";
import { Button } from "../buttons/Button_1";

interface FileUploadButtonProps extends FileTriggerProps {
  className?: string;
  getFiles?: (files: File[]) => void;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "destructive"
    | "outline"
    | "ghost";
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

export function FileUploadButtonImplementation() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="w-full flex justify-center items-center text-foreground flex-col gap-4">
      <FileUploadButton getFiles={(files) => setFiles(files)} allowsMultiple>
        Upload File
      </FileUploadButton>
      <div className="text-center flex flex-col ">
        <h1 className="text-primary-foreground font-semibold underline underline-offset-1 mb-4">
          Selected Files
        </h1>
        {files.map((file, index) => (
          <span key={file.name + index}>{file.name}</span>
        ))}
      </div>
    </div>
  );
}
