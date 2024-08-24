"use client";

import { type DragEvent, useEffect, useRef, useState } from "react";

export interface DropboxProps extends React.HTMLAttributes<HTMLDivElement> {
  getFiles?: (files: File[]) => void;
  getError?: (err: string) => void;
  limitSize?: number;
  limitNumberOfFiles?: number;
  allowedFileTypes?: string[];
}

export function Dropbox({
  className,
  children,
  limitSize,
  limitNumberOfFiles,
  allowedFileTypes,
  getFiles,
  getError,
  ...props
}: DropboxProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const dropboxRef = useRef<HTMLDivElement>(null);

  function handleValidation(file: File): boolean {
    // Size validation
    if (limitSize && file.size > limitSize * 1024 * 1024) {
      setError(`${error}File named ${file.name} is too large. Max size is ${limitSize}MB.`);
      return false;
    }

    // Number of files validation
    if (limitNumberOfFiles && files.length >= limitNumberOfFiles) {
      setError(`${error}You can only upload ${limitNumberOfFiles} files at a time.`);
      return false;
    }

    // File type validation
    if (allowedFileTypes) {
      let retType = false;
      for (const type of allowedFileTypes) {
        let isValid = false;

        // For all types like image/*
        const allType = type.includes("/*");
        const typeExt = type.split(".")[1];

        if (allType) {
          const preVal = type.split("/")[0];
          if (file.type.includes(preVal)) {
            isValid = true;
          }
        }

        // For specific types like image/png
        else if (file.type.includes(type)) {
          isValid = true;
        }

        // For extension types like .png
        else if (file.type.includes(typeExt) || file.name.endsWith(typeExt)) {
          isValid = true;
        }

        if (isValid === true) {
          retType = true;
          break;
        }
      }

      if (retType === false) {
        setError(
          `${error}File named ${file.name} is not allowed. Allowed types are ${allowedFileTypes.join(", ")} and the file you tried to upload is ${file.type}.`,
        );
        return false;
      }
    }
    return true;
  }
  function handleDrop(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    handleDragEnter("leave");
    setError("");
    const droppedFiles = e.dataTransfer.files;

    // Validation

    const validFilesArray = Array.from(droppedFiles).filter((file) => handleValidation(file));
    setFiles((prevFiles) => [...prevFiles, ...validFilesArray]);
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (operation: "enter" | "leave") => {
    if (operation === "enter" && dropboxRef.current) {
      dropboxRef.current.setAttribute("data-drag-hover", "true");
    } else if (operation === "leave" && dropboxRef.current) {
      dropboxRef.current.removeAttribute("data-drag-hover");
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Necessary for the component to work
  useEffect(() => {
    if (getFiles) {
      getFiles(files);
    }
    if (getError) {
      getError(error);
    }
  }, [files, error]);
  return (
    <div
      ref={dropboxRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragEnter={() => handleDragEnter("enter")}
      onDragLeaveCapture={() => handleDragEnter("leave")}
      className={className}
      {...props}
    >
      {children}
      {error && <p className="text-black">{error}</p>}
    </div>
  );
}
