"use client";

import { useState } from "react";
import { FileUploadButton } from "@registry/packages/primitives/file-upload-button/00/react_aria-js/FileUpload";

export default function FileUploadButtonImplementation() {
  const [files, setFiles] = useState([]);

  return (
    <div className="w-full flex justify-center items-center text-foreground flex-col gap-4">
      <FileUploadButton getFiles={(files) => setFiles(files)} allowsMultiple>
        Choose a file
      </FileUploadButton>
      <div className="text-center flex flex-col ">
        <h1 className="text-primary-foreground font-semibold underline underline-offset-1 mb-4">Selected Files</h1>
        {files.map((file, index) => (
          <span key={file.name + index}>{file.name}</span>
        ))}
      </div>
    </div>
  );
}
