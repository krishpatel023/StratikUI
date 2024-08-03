"use client";

import { useEffect, useRef, useState } from "react";

export function Dropbox({
  className,
  children,
  limitSize,
  limitNumberOfFiles,
  allowedFileTypes,
  getFiles,
  getError,
  ...props
}) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const dropboxRef = useRef(null);

  function handleValidation(file) {
    // Size validation
    if (limitSize && file.size > limitSize * 1024 * 1024) {
      setError(
        error +
          `File named ${file.name} is too large. Max size is ${limitSize}MB.`
      );
      return false;
    }

    // Number of files validation
    if (limitNumberOfFiles && files.length >= limitNumberOfFiles) {
      setError(
        error + `You can only upload ${limitNumberOfFiles} files at a time.`
      );
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
          error +
            `File named ${file.name} is not allowed. Allowed types are ${allowedFileTypes.join(", ")} and the file you tried to upload is ${file.type}.`
        );
        return false;
      }
    }
    return true;
  }
  function handleDrop(e) {
    e.preventDefault();
    handleDragEnter("leave");
    setError("");
    const droppedFiles = e.dataTransfer.files;

    // Validation

    const validFilesArray = Array.from(droppedFiles).filter((file) =>
      handleValidation(file)
    );
    setFiles((prevFiles) => [...prevFiles, ...validFilesArray]);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (operation) => {
    if (operation === "enter" && dropboxRef.current) {
      dropboxRef.current.setAttribute("data-drag-hover", "true");
    } else if (operation === "leave" && dropboxRef.current) {
      dropboxRef.current.removeAttribute("data-drag-hover");
    }
  };

  useEffect(() => {
    if (getFiles) {
      getFiles(files);
    }
    if (getError) {
      getError(error);
    }
  }, [files]);

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
