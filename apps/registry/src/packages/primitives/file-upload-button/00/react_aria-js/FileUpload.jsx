"use client";

import { Button, FileTrigger } from "react-aria-components";

export function FileUploadButton({ className, children, getFiles, ...props }) {
  function handleFileUpload(e) {
    let files = Array.from(e);
    getFiles && getFiles(files);
  }

  return (
    <FileTrigger onSelect={(e) => handleFileUpload(e)} {...props}>
      <Button className={className}>{children}</Button>
    </FileTrigger>
  );
}
