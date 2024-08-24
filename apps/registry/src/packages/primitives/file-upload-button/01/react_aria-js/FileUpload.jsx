"use client";

import { Button } from "@registry/packages/primitives/buttons/01/react_aria-js/Button";
import { FileTrigger } from "react-aria-components";

export function FileUploadButton({ className, children, getFiles, variant = "primary", ...props }) {
  function handleFileUpload(e) {
    const files = Array.from(e);
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
