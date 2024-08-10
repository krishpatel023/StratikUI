"use client";

import useArtificialLoader from "@registry/hooks/useArtificialLoader/01/default-js/useArtificialLoader";
import { Button } from "@registry/primitives/buttons/02/default-js/Button";
import { FileUploadButton } from "@registry/primitives/file-upload-button/00/default-js/FileUpload";
import { Dropbox } from "@registry/primitives/file-upload-dropbox/01/default-js/Dropbox";
import { ProgressBar } from "@registry/primitives/progress-bar/01/react_aria-js/ProgressBar";
import { useEffect, useState } from "react";

export function FileUpload() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
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

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="w-[20rem] @md:w-[25rem] rounded-lg flex flex-col gap-6 px-4 py-4 bg-primary">
      <Dropbox
        className="flex justify-center items-center text-center gap-2 h-40 border border-dashed border-outline rounded-lg text-foreground"
        getFiles={(files) => setFiles(files)}
        getError={(error) => setError(error)}
        limitSize={fileSizeLimit}
      >
        <p>Drop files here or</p>
        <FileUploadButton
          className="text-accent-secondary underline"
          getFiles={(files) => setFiles(files)}
        >
          Browse
        </FileUploadButton>
      </Dropbox>
      <div className="flex justify-end -mt-4">
        {fileSizeLimit && (
          <p className="text-secondary-foreground text-center text-sm">
            File size limit: {fileSizeLimit / 1024 / 1024} MB
          </p>
        )}
      </div>
      {error && (
        <p className="text-error text-center flex justify-center items-center gap-2">
          <ErrorIcon className="w-4 h-4" />
          {error}
        </p>
      )}
      <div className="w-full text-foreground flex flex-col gap-4">
        <p className="text-secondary-foreground font-medium ">
          {files.length === 0 ? "No files selected" : "Selected Files"}
        </p>
        {files.map((file, index) => (
          <div
            className="w-full flex items-center gap-4 px-4 py-3 bg-secondary min-h-20 rounded-lg"
            key={index}
          >
            <DocumentIcon className="w-10 h-10" />
            <div className="w-full">
              <div
                key={file.name + index}
                className="flex justify-between items-center gap-4 w-full mb-4"
              >
                <p className="overflow-hidden text-sm">{file.name}</p>
                <button onClick={() => handleRemoveFile(index)}>
                  <Cross className="w-4 h-4" />
                </button>
              </div>
              <FileLoader />
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="accent"
        onClick={UploadItems}
        disabled={files.length === 0}
      >
        {isProcessing ? (
          <Loader className="w-6 h-6 animate-spin mx-auto" />
        ) : (
          "Upload"
        )}
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <ProgressBar
      variant="accent"
      aria-label="progress-bar"
      value={progress}
      className="h-2"
    />
  );
};

export const ErrorIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
    <path
      fill="currentColor"
      d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19L12 5.137L19.344 19H4.661z"
    ></path>
  </svg>
);

const Loader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeDasharray="15"
      strokeDashoffset="15"
      strokeLinecap="round"
      strokeWidth="2"
      d="M12 3C16.9706 3 21 7.02944 21 12"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.3s"
        values="15;0"
      ></animate>
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      ></animateTransform>
    </path>
  </svg>
);

const DocumentIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
      <path d="M5 20V4a1 1 0 0 1 1-1h6.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 19 9.828V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"></path>
      <path d="M12 3v6a1 1 0 0 0 1 1h6"></path>
    </g>
  </svg>
);

const Cross = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
    ></path>
  </svg>
);
