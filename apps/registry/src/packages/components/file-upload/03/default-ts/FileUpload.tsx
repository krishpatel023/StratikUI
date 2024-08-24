"use client";

import useArtificialLoader from "@registry/packages/hooks/useArtificialLoader/01/default-ts/useArtificialLoader";
import { Button } from "@registry/packages/primitives/buttons/02/default-ts/Button";
import { FileUploadButton } from "@registry/packages/primitives/file-upload-button/00/default-ts/FileUpload";
import { Dropbox } from "@registry/packages/primitives/file-upload-dropbox/01/default-ts/Dropbox";
import { ProgressBar } from "@registry/packages/primitives/progress-bar/01/react_aria-ts/ProgressBar";
import type { IconProps } from "@registry/utils/types";
import { useEffect, useState } from "react";

export function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileSizeLimit = 5 * 1024 * 1024;

  const UploadItems = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setFiles([]);
      setError("");
    }, 1500);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="w-[20rem] @md:w-[25rem] @lg:w-[45rem] rounded-lg flex flex-col gap-6 px-4 py-4 bg-primary">
      <div className="flex flex-col @lg:flex-row">
        <div className="w-full @lg:w-1/2 flex flex-col gap-6">
          <Dropbox
            className="@lg:h-[30rem] flex flex-col gap-4 justify-center items-center text-center h-40 border border-dashed border-outline rounded-lg text-foreground"
            getFiles={(files) => setFiles(files)}
            getError={(error) => setError(error)}
            limitSize={fileSizeLimit}
          >
            <InboxUpload className="w-10 h-10" />
            <p>
              Drop files here or{" "}
              <FileUploadButton className="text-accent-secondary underline" getFiles={(files) => setFiles(files)}>
                Browse
              </FileUploadButton>
            </p>
          </Dropbox>
          <div className="flex justify-end -mt-4">
            {fileSizeLimit && (
              <p className="text-secondary-foreground text-center text-sm">
                File size limit: {fileSizeLimit / 1024 / 1024} MB
              </p>
            )}
          </div>
        </div>
        <div className="w-full @lg:w-1/2 @lg:px-4 text-foreground flex flex-col gap-4 overflow-y-auto max-h-80 @lg:max-h-[30rem] scrollbar-vertical">
          {files.length === 0 ? (
            <p className="text-secondary-foreground font-medium @lg:text-center @lg:my-auto">No files selected</p>
          ) : (
            <p className="text-secondary-foreground font-medium @lg:text-center">Selected Files</p>
          )}
          {files.map((file, index) => (
            <div className="w-full flex items-center gap-4 px-4 py-3 bg-secondary min-h-20 rounded-lg" key={index}>
              <DocumentIcon className="w-10 h-10" />
              <div className="w-full">
                <div key={file.name + index} className="flex justify-between items-center gap-4 w-full mb-4">
                  <p className="overflow-hidden text-sm">{file.name}</p>
                  <button onClick={() => handleRemoveFile(index)} type="button">
                    <Cross className="w-4 h-4" />
                  </button>
                </div>
                <FileLoader />
              </div>
            </div>
          ))}
        </div>
      </div>
      {error && (
        <p className="text-error text-center flex justify-center items-center gap-2">
          <ErrorIcon className="w-4 h-4" />
          {error}
        </p>
      )}
      <Button variant="accent" onClick={UploadItems} disabled={files.length === 0}>
        {isProcessing ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Upload"}
      </Button>
    </div>
  );
}

const FileLoader = () => {
  const { progress, startLoader } = useArtificialLoader();

  useEffect(() => {
    startLoader({
      duration: 2000,
      updateCount: 100,
    });
  }, [startLoader]);
  return <ProgressBar aria-label="progress" variant="accent" value={progress} className="h-2" />;
};

export const InboxUpload = (props: IconProps) => (
  <svg height="200" width="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Inbox Upload</title>
    <path
      d="M21.97 10.393v4.87A6.745 6.745 0 0 1 15.23 22H8.74A6.751 6.751 0 0 1 2 15.264V8.777A6.745 6.745 0 0 1 8.74 2.04h4.862a.749.749 0 1 1 0 1.497H8.74a5.243 5.243 0 0 0-5.242 5.24v2.495h2.496a2.717 2.717 0 0 1 1.937.798a2.82 2.82 0 0 1 .809 1.946a1.247 1.247 0 0 0 1.248 1.248h3.994a1.22 1.22 0 0 0 .878-.37c.234-.233.367-.548.37-.878a2.722 2.722 0 0 1 2.746-2.745h2.496v-.878a.749.749 0 0 1 1.497 0"
      fill="currentColor"
    />
    <path
      d="M18.924 8.527a.749.749 0 0 1-.739-.748v-4.99a.74.74 0 0 1 .74-.749a.75.75 0 0 1 .758.749v4.99a.758.758 0 0 1-.759.748"
      fill="currentColor"
    />
    <path
      d="M21.8 4.355L19.803 2.36a1.049 1.049 0 0 0-.39-.27a1.219 1.219 0 0 0-.459-.09c-.15.002-.3.032-.44.09a1.358 1.358 0 0 0-.389.27l-1.997 1.995a.748.748 0 0 0 0 1.058a.74.74 0 0 0 1.059 0l.998-.998l.75-.748l1.757 1.756a.728.728 0 0 0 .529.22a.74.74 0 0 0 .529-.22a.748.748 0 0 0 .05-1.068"
      fill="currentColor"
    />
  </svg>
);
export const ErrorIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <title>Error Icon</title>
    <path fill="currentColor" d="M11.001 10h2v5h-2zM11 16h2v2h-2z" />
    <path
      fill="currentColor"
      d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19L12 5.137L19.344 19H4.661z"
    />
  </svg>
);

const Loader = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <title>Loader</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeDasharray="15"
      strokeDashoffset="15"
      strokeLinecap="round"
      strokeWidth="2"
      d="M12 3C16.9706 3 21 7.02944 21 12"
    >
      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </path>
  </svg>
);
const DocumentIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <title>Document Icon</title>
    <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
      <path d="M5 20V4a1 1 0 0 1 1-1h6.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 19 9.828V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M12 3v6a1 1 0 0 0 1 1h6" />
    </g>
  </svg>
);

const Cross = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props}>
    <title>Cross</title>
    <path
      fill="currentColor"
      d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
    />
  </svg>
);
