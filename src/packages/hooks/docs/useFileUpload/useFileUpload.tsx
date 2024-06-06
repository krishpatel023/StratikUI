import {
  CodeStringJsx,
  CodeStringTsx,
  FileUpload_1,
} from "@/packages/primitives/file_upload/File_Upload_1_Helper";
import { DataDescription, ImplementationNode } from "@/utils/constants";

const CodeTsx: string = `import { useEffect, useState, useRef } from "react";

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
        errors = \`\File type \${file.type.split("/")[1]} is not allowed\`;
      }
      if (fileSizeLimit && file.size > fileSizeLimit) {
        if (errors === null)
          errors = \`File size exceeds the limit of \${fileSizeLimit / 1024 / 1024} MB\`;
        else
          errors = \`\${errors} and file size exceeds the limit of \${fileSizeLimit / 1024 / 1024} MB.\`;
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
          errors = \`File type \${file.type.split("/")[1]} is not allowed\`;
        }
        if (fileSizeLimit && file.size > fileSizeLimit) {
          if (errors === null)
            errors = \`File size exceeds the limit of \${fileSizeLimit / 1024 / 1024} MB\`;
          else
            errors = \`\${errors} and file size exceeds the limit of \${fileSizeLimit / 1024 / 1024} MB.\`;
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

export default useFileUpload;`;

const CodeJsx: string = `import { useEffect, useState, useRef } from "react";

const useFileUpload = ({
  allowedFileTypes,
  inputRef,
  fileSizeLimit,
}) => {
  const [files, setFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    removeErrors();

    e.preventDefault();
    setIsDragOver(false);

    var errors: string | null = null;
    const droppedFileList = e.dataTransfer.files;
    const droppedFiles = Array.from(droppedFileList);
    const validFiles = droppedFiles.filter((file) => {
      if (!allowedFileTypes.includes(file.type)) {
        errors = \`\File type \${file.type.split("/")[1]} is not allowed\`;
      }
      if (fileSizeLimit && file.size > fileSizeLimit) {
        if (errors === null)
          errors = \`File size exceeds the limit of \${fileSizeLimit / 1024 / 1024} MB\`;
        else
          errors = \`\${errors} and file size exceeds the limit of \${fileSizeLimit / 1024 / 1024} MB.\`;
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

    var errors= null;
    const inputElement = inputRef.current;
    if (inputElement && inputElement.files) {
      const uploadedFiles = Array.from(inputElement.files);

      const validFiles = uploadedFiles.filter((file) => {
        if (!allowedFileTypes.includes(file.type)) {
          errors = \`File type \${file.type.split("/")[1]} is not allowed\`;
        }
        if (fileSizeLimit && file.size > fileSizeLimit) {
          if (errors === null)
            errors = \`File size exceeds the limit of \${fileSizeLimit / 1024 / 1024} MB\`;
          else
            errors = \`\${errors} and file size exceeds the limit of \${fileSizeLimit / 1024 / 1024} MB.\`;
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

export default useFileUpload;`;

const Example = `import React from "react";

const OSComponent = () => {
  const os = useOS();

  return (
    <div className="w-full h-80 flex flex-col justify-center items-center dark:text-white">
      <p>Your operating system is: {os}</p>
    </div>
  );
};

export default OSComponent;`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useFileUpload",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: CodeStringTsx },
          { language: "jsx", code: CodeStringJsx },
        ],
      },
    ],
  },
  {
    type: "properties",
    content: {
      name: "Props",
      dimensions: [1, 1, 2],
      data: [
        ["Property", "Type", "Description"],
        [
          "inputRef",
          "React.RefObject<HTMLInputElement>",
          "Reference to the file input element.",
        ],
        [
          "allowedFileTypes",
          "string[]",
          "Array of allowed file MIME types for validation.",
        ],
        [
          "fileSizeLimit",
          "number | undefined",
          "Optional file size limit in bytes.",
        ],
      ],
    },
  },
  {
    type: "properties",
    content: {
      name: "Functions",
      dimensions: [1, 1, 2],

      data: [
        ["Property", "Type", "Description"],
        [
          "files",
          "File[]",
          "Array of files that have been uploaded or dragged and dropped.",
        ],
        [
          "error",
          "string | null",
          "Error message string if there is an error, otherwise null.",
        ],
        [
          "isDragOver",
          "boolean",
          "Boolean flag indicating if a drag event is currently over the drop area.",
        ],
        [
          "handleDragOver",
          "(e: React.DragEvent<HTMLDivElement>) => void",
          "Function to handle the drag over event, setting isDragOver to true.",
        ],
        [
          "handleDragLeave",
          "(e: React.DragEvent<HTMLDivElement>) => void",
          "Function to handle the drag leave event, setting isDragOver to false.",
        ],
        [
          "handleDrop",
          "(e: React.DragEvent<HTMLDivElement>) => void",
          "Function to handle the drop event, validating and setting the files.",
        ],
        [
          "handleFileUpload",
          "() => void",
          "Function to handle file upload via file input, validating and setting the files.",
        ],
        [
          "handleRemoveFile",
          "(index: number) => void",
          "Function to remove a specific file from the files array by index.",
        ],
        [
          "handleRemoveAllFiles",
          "() => void",
          "Function to remove all files from the files array.",
        ],
        [
          "openFileInput",
          "() => void",
          "Function to trigger the file input click event programmatically.",
        ],
      ],
    },
  },
];

function Demo() {
  return (
    <div className="w-full flex justify-center items-center">
      <FileUpload_1 />
    </div>
  );
}

const Data: DataDescription = {
  name: "useFileUpload",
  description:
    "The useFileUpload hook is a custom React hook that facilitates drag-and-drop file uploads and file input handling. It allows users to specify allowed file types, set a file size limit, and provides various functions to manage file uploads, including drag-over, drop, file upload, and file removal events. This hook returns a set of properties and functions to efficiently handle file upload processes in a React application.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
