"use client";

import { useEffect, useState, useRef } from "react";

interface DragDropProps {
  allowedFileTypes: string[];
}

interface DragDropReturn {
  files: File[];
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
}

const useFileUpload = ({
  allowedFileTypes,
  inputRef,
}: DragDropProps): DragDropReturn => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFileList = e.dataTransfer.files;
    const droppedFiles = Array.from(droppedFileList);
    const validFiles = droppedFiles.filter((file) => {
      return allowedFileTypes.includes(file.type);
    });

    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleFileUpload = () => {
    const inputElement = inputRef.current;
    if (inputElement && inputElement.files) {
      const uploadedFiles = Array.from(inputElement.files);
      const validFiles = uploadedFiles.filter((file) => {
        return allowedFileTypes.includes(file.type);
      });
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    }
    // }===
  };

  const handleRemoveAllFiles = (): void => {
    setFiles([]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const openFileInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return {
    files,
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
