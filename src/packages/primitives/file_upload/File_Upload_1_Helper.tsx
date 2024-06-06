"use client";

import useDelay from "@/packages/hooks/code/useDelay";
import useProcess from "@/packages/hooks/code/useProcess";
import { IconProps } from "@/utils/constants";
import { useRef } from "react";
import useFileUpload from "../../hooks/code/useFileUpload";
import { Button } from "../buttons/Button_6_Helper";

export const FileUpload_1 = () => {
  const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
  const inputRef = useRef<HTMLInputElement>(null);
  const fileSizeLimit = 5 * 1024 * 1024;

  const {
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileUpload,
    files,
    error,
    openFileInput,
    handleRemoveFile,
    handleRemoveAllFiles,
  } = useFileUpload({ allowedFileTypes, inputRef, fileSizeLimit });

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        ref={inputRef}
        onChange={handleFileUpload}
        className="hidden"
      />
      <FileUploadUI
        openFileInput={openFileInput}
        files={files}
        handleRemoveFile={handleRemoveFile}
        handleRemoveAllFiles={handleRemoveAllFiles}
        error={error}
        fileSizeLimit={fileSizeLimit}
      />
    </div>
  );
};

const FileUploadUI = ({
  openFileInput,
  files,
  handleRemoveFile,
  handleRemoveAllFiles,
  error,
  fileSizeLimit,
}: {
  openFileInput: () => void;
  files: File[];
  handleRemoveFile: (index: number) => void;
  handleRemoveAllFiles: () => void;
  error: string | null;
  fileSizeLimit: number;
}) => {
  const { delay } = useDelay();
  const { isProcessing, executeProcess } = useProcess();
  const UploadItems = async () => {
    executeProcess(async () => {
      await delay(1500);
      if (files.length > 0) {
        handleRemoveAllFiles();
      }
    });
  };
  return (
    <div className="w-[20rem] @md:w-[25rem] rounded-lg flex flex-col gap-6 px-4 py-4 bg-neutral-100 dark:bg-neutral-900">
      <div className="flex justify-center items-center text-center gap-2 h-40 border border-dashed border-neutral-600 dark:border-neutral-600 rounded-lg text-black dark:text-neutral-100 ">
        <p>Drag and Drop or</p>
        <button onClick={openFileInput} className="text-blue-500 underline">
          Browse
        </button>
      </div>
      <div className="flex justify-end -mt-4">
        {fileSizeLimit && (
          <p className="text-neutral-500 text-center text-sm">
            File size limit: {fileSizeLimit / 1024 / 1024} MB
          </p>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-center flex justify-center items-center gap-2">
          <ErrorIcon className="w-4 h-4" />
          {error}
        </p>
      )}
      <div className="w-full text-white flex flex-col gap-4">
        {files.length === 0 ? (
          <p className="text-neutral-700 dark:text-neutral-400 font-medium ">
            No files selected
          </p>
        ) : (
          <p className="text-neutral-700 dark:text-neutral-400 font-medium">
            Selected Files
          </p>
        )}
        {files.map((file, index) => (
          <div
            key={file.name + index}
            className="flex justify-between items-center gap-4 px-4 w-full bg-neutral-500 dark:bg-neutral-800 h-16 rounded-lg"
          >
            <DocumentIcon className="w-6 h-6" />
            <p className="overflow-hidden">{file.name}</p>
            <button onClick={() => handleRemoveFile(index)}>
              <Cross className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <Button
        className="w-full mt-auto px-4 py-2 border rounded-lg relative z-[100] bg-blue-600 border-blue-700 text-white dark:bg-blue-800 dark:border-blue-950 flex justify-center items-center"
        clickedClassName="bg-blue-300 dark:bg-blue-400"
        onClick={UploadItems}
        disabled={files.length === 0}
      >
        {isProcessing ? <Loader className="w-6 h-6 animate-spin" /> : "Upload"}
      </Button>
    </div>
  );
};

export const ErrorIcon = (props: IconProps) => (
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

const Loader = (props: IconProps) => (
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
const DocumentIcon = (props: IconProps) => (
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

const Cross = (props: IconProps) => (
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

export const CodeStringTsx = `import { useRef } from "react";
import useFileUpload from "../../hooks/code/useFileUpload";
import Image from "next/image";
import { IconProps } from "@/utils/constants";
import { Button } from "../buttons/Button_6_Helper";
import useDelay from "@/packages/hooks/code/useDelay";
import useProcess from "@/packages/hooks/code/useProcess";

export const FileUpload_1 = () => {

  const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"]; // [!code highlight]
  const inputRef = useRef<HTMLInputElement>(null); // [!code highlight]
  const fileSizeLimit = 5 * 1024 * 1024; // [!code highlight]
  const { // [!code highlight]
    handleDragOver, // [!code highlight]
    handleDragLeave, // [!code highlight]
    handleDrop, // [!code highlight]
    handleFileUpload, // [!code highlight]
    files, // [!code highlight]
    error, // [!code highlight]
    openFileInput, // [!code highlight]
    handleRemoveFile, // [!code highlight]
    handleRemoveAllFiles, // [!code highlight]
  } = useFileUpload({ allowedFileTypes, inputRef, fileSizeLimit }); // [!code highlight]

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        ref={inputRef}
        onChange={handleFileUpload}
        className="hidden"
      />
      <FileUploadUI
        openFileInput={openFileInput}
        files={files}
        handleRemoveFile={handleRemoveFile}
        handleRemoveAllFiles={handleRemoveAllFiles}
        error={error}
        fileSizeLimit={fileSizeLimit}
      />
    </div>
  );
};

const FileUploadUI = ({
  openFileInput,
  files,
  handleRemoveFile,
  handleRemoveAllFiles,
  error,
  fileSizeLimit,
}: {
  openFileInput: () => void;
  files: File[];
  handleRemoveFile: (index: number) => void;
  handleRemoveAllFiles: () => void;
  error: string | null;
  fileSizeLimit: number;
}) => {
  const { delay } = useDelay();
  const { isProcessing, executeProcess } = useProcess();
  const UploadItems = async () => {
    executeProcess(async () => {
      await delay(1500);
      if (files.length > 0) {
        handleRemoveAllFiles();
      }
    });
  };
  return (
    <div className="w-[20rem] @md:w-[25rem] rounded-lg flex flex-col gap-6 px-4 py-4 bg-neutral-100 dark:bg-neutral-900">
      <div className="flex justify-center items-center text-center gap-2 h-40 border border-dashed border-neutral-600 dark:border-neutral-600 rounded-lg text-black dark:text-neutral-100 ">
        <p>Drag and Drop or</p>
        <button onClick={openFileInput} className="text-blue-500 underline">
          Browse
        </button>
      </div>
      <div className="flex justify-end -mt-4">
        {fileSizeLimit && (
          <p className="text-neutral-500 text-center text-sm">
            File size limit: {fileSizeLimit / 1024 / 1024} MB
          </p>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-center flex justify-center items-center gap-2">
          <ErrorIcon className="w-4 h-4" />
          {error}
        </p>
      )}
      <div className="w-full text-white flex flex-col gap-4">
        {files.length === 0 ? (
          <p className="text-neutral-700 dark:text-neutral-400 font-medium ">
            No files selected
          </p>
        ) : (
          <p className="text-neutral-700 dark:text-neutral-400 font-medium">
            Selected Files
          </p>
        )}
        {files.map((file, index) => (
          <div
            key={file.name + index}
            className="flex justify-between items-center gap-4 px-4 w-full bg-neutral-500 dark:bg-neutral-800 h-16 rounded-lg"
          >
            <DocumentIcon className="w-6 h-6" />
            <p className="overflow-hidden">{file.name}</p>
            <button onClick={() => handleRemoveFile(index)}>
              <Cross className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <Button
        className="w-full mt-auto px-4 py-2 border rounded-lg relative z-[100] bg-blue-600 border-blue-700 text-white dark:bg-blue-800 dark:border-blue-950 flex justify-center items-center"
        clickedClassName="bg-blue-300 dark:bg-blue-400"
        onClick={UploadItems}
        disabled={files.length === 0}
      >
        {isProcessing ? <Loader className="w-6 h-6 animate-spin" /> : "Upload"}
      </Button>
    </div>
  );
};

export const ErrorIcon = (props: IconProps) => (
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

const Loader = (props: IconProps) => (
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
const DocumentIcon = (props: IconProps) => (
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

const Cross = (props: IconProps) => (
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
);`;

export const CodeStringJsx = `import { useRef } from "react";
import useFileUpload from "../../hooks/code/useFileUpload";
import Image from "next/image";
import { IconProps } from "@/utils/constants";
import { Button } from "../buttons/Button_6_Helper";
import useDelay from "@/packages/hooks/code/useDelay";
import useProcess from "@/packages/hooks/code/useProcess";

export const FileUpload_1 = () => {
  
  const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"]; // [!code highlight]
  const inputRef = useRef(null); // [!code highlight]
  const fileSizeLimit = 5 * 1024 * 1024; // [!code highlight]
  const { // [!code highlight]
    handleDragOver, // [!code highlight]
    handleDragLeave, // [!code highlight]
    handleDrop, // [!code highlight]
    handleFileUpload, // [!code highlight]
    files, // [!code highlight]
    error, // [!code highlight]
    openFileInput, // [!code highlight]
    handleRemoveFile, // [!code highlight]
    handleRemoveAllFiles, // [!code highlight]
  } = useFileUpload({ allowedFileTypes, inputRef, fileSizeLimit }); // [!code highlight]

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        ref={inputRef}
        onChange={handleFileUpload}
        className="hidden"
      />
      <FileUploadUI
        openFileInput={openFileInput}
        files={files}
        handleRemoveFile={handleRemoveFile}
        handleRemoveAllFiles={handleRemoveAllFiles}
        error={error}
        fileSizeLimit={fileSizeLimit}
      />
    </div>
  );
};

const FileUploadUI = ({
  openFileInput,
  files,
  handleRemoveFile,
  handleRemoveAllFiles,
  error,
  fileSizeLimit,
}) => {
  const { delay } = useDelay();
  const { isProcessing, executeProcess } = useProcess();
  const UploadItems = async () => {
    executeProcess(async () => {
      await delay(1500);
      if (files.length > 0) {
        handleRemoveAllFiles();
      }
    });
  };
  return (
    <div className="w-[20rem] @md:w-[25rem] rounded-lg flex flex-col gap-6 px-4 py-4 bg-neutral-100 dark:bg-neutral-900">
      <div className="flex justify-center items-center text-center gap-2 h-40 border border-dashed border-neutral-600 dark:border-neutral-600 rounded-lg text-black dark:text-neutral-100 ">
        <p>Drag and Drop or</p>
        <button onClick={openFileInput} className="text-blue-500 underline">
          Browse
        </button>
      </div>
      <div className="flex justify-end -mt-4">
        {fileSizeLimit && (
          <p className="text-neutral-500 text-center text-sm">
            File size limit: {fileSizeLimit / 1024 / 1024} MB
          </p>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-center flex justify-center items-center gap-2">
          <ErrorIcon className="w-4 h-4" />
          {error}
        </p>
      )}
      <div className="w-full text-white flex flex-col gap-4">
        {files.length === 0 ? (
          <p className="text-neutral-700 dark:text-neutral-400 font-medium ">
            No files selected
          </p>
        ) : (
          <p className="text-neutral-700 dark:text-neutral-400 font-medium">
            Selected Files
          </p>
        )}
        {files.map((file, index) => (
          <div
            key={file.name + index}
            className="flex justify-between items-center gap-4 px-4 w-full bg-neutral-500 dark:bg-neutral-800 h-16 rounded-lg"
          >
            <DocumentIcon className="w-6 h-6" />
            <p className="overflow-hidden">{file.name}</p>
            <button onClick={() => handleRemoveFile(index)}>
              <Cross className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <Button
        className="w-full mt-auto px-4 py-2 border rounded-lg relative z-[100] bg-blue-600 border-blue-700 text-white dark:bg-blue-800 dark:border-blue-950 flex justify-center items-center"
        clickedClassName="bg-blue-300 dark:bg-blue-400"
        onClick={UploadItems}
        disabled={files.length === 0}
      >
        {isProcessing ? <Loader className="w-6 h-6 animate-spin" /> : "Upload"}
      </Button>
    </div>
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
);`;
