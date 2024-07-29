"use client";

import { Button } from "@/packages/primitives/buttons/01/react_aria-js/Button";
import { FileTrigger } from "react-aria-components";

export function FileUploadButton({
  className,
  children,
  getFiles,
  variant = "primary",
  ...props
}) {
  function handleFileUpload(e) {
    let files = Array.from(e);
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
