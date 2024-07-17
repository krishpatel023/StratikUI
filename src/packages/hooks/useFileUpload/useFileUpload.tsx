"use client";

import { useEffect, useState, useRef } from "react";

interface DragDropReturn {
  files: File[];
  error: string | null;
  isDragOver: boolean;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileUpload: () => void;
  handleRemoveFile: (index: number) => void;
  handleRemoveAllFiles: () => void;
  openFileInput: () => void;
}

interface DragDropProps {
  allowedFileTypes: string[];
  inputRef: React.RefObject<HTMLInputElement>;
  fileSizeLimit?: number;
}

const useFileUpload = ({
  allowedFileTypes,
  inputRef,
  fileSizeLimit,
}: DragDropProps): DragDropReturn => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    removeErrors();

    e.preventDefault();
    setIsDragOver(false);

    var errors: string | null = null;
    const droppedFileList = e.dataTransfer.files;
    const droppedFiles = Array.from(droppedFileList);
    const validFiles = droppedFiles.filter((file) => {
      if (!allowedFileTypes.includes(file.type)) {
        errors = `File type ${file.type.split("/")[1]} is not allowed`;
      }
      if (fileSizeLimit && file.size > fileSizeLimit) {
        if (errors === null)
          errors = `File size exceeds the limit of ${fileSizeLimit / 1024 / 1024} MB`;
        else
          errors = `${errors} and file size exceeds the limit of ${fileSizeLimit / 1024 / 1024} MB.`;
      }
      if (fileSizeLimit) {
        return (
          allowedFileTypes.includes(file.type) && file.size <= fileSizeLimit
        );
      } else {
        return allowedFileTypes.includes(file.type);
      }
    });

    setFiles((prevFiles) => [...prevFiles, ...validFiles]);

    if (errors) setError(errors);
  };

  const handleFileUpload = () => {
    removeErrors();

    var errors: string | null = null;
    const inputElement = inputRef.current;
    if (inputElement && inputElement.files) {
      const uploadedFiles = Array.from(inputElement.files);

      const validFiles = uploadedFiles.filter((file) => {
        if (!allowedFileTypes.includes(file.type)) {
          errors = `File type ${file.type.split("/")[1]} is not allowed`;
        }
        if (fileSizeLimit && file.size > fileSizeLimit) {
          if (errors === null)
            errors = `File size exceeds the limit of ${fileSizeLimit / 1024 / 1024} MB`;
          else
            errors = `${errors} and file size exceeds the limit of ${fileSizeLimit / 1024 / 1024} MB.`;
        }
        if (fileSizeLimit) {
          return (
            allowedFileTypes.includes(file.type) && file.size <= fileSizeLimit
          );
        } else {
          return allowedFileTypes.includes(file.type);
        }
      });

      setFiles((prevFiles) => [...prevFiles, ...validFiles]);

      if (errors) setError(errors);
    }
  };

  const handleRemoveAllFiles = (): void => {
    removeErrors();
    setFiles([]);
  };

  const handleRemoveFile = (index: number) => {
    removeErrors();
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const removeErrors = () => {
    setError(null);
  };

  const openFileInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return {
    files,
    error,
    isDragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileUpload,
    handleRemoveFile,
    handleRemoveAllFiles,
    openFileInput,
  };
};

export default useFileUpload;
