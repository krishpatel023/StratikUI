import { DataDescription, ImplementationNode } from "@/utils/constants";
import { Demo, DemoStringJsx, DemoStringTsx } from "./Helper";

const CodeTsx: string = `import { useCallback, useState } from "react";

interface UseProcessReturn {
  isProcessing: boolean;
  executeProcess: (callback: () => Promise<void>) => Promise<void>;
}

const useProcess = (): UseProcessReturn => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const executeProcess = useCallback(
    async (callback: () => Promise<void>): Promise<void> => {
      try {
        setIsProcessing(true);
        await callback();
      } catch (error) {
        console.error("Error executing process:", error);
      } finally {
        setIsProcessing(false);
      }
    },
    []
  );

  return { isProcessing, executeProcess };
};

export default useProcess;`;

const CodeJsx: string = `import { useCallback, useState } from "react";

const useProcess = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const executeProcess = useCallback(
    async (callback) => {
      try {
        setIsProcessing(true);
        await callback();
      } catch (error) {
        console.error("Error executing process:", error);
      } finally {
        setIsProcessing(false);
      }
    },
    []
  );

  return { isProcessing, executeProcess };
};

export default useProcess;`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useProcess",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Example",
        content: [
          { language: "tsx", code: DemoStringTsx },
          { language: "jsx", code: DemoStringJsx },
        ],
      },
    ],
  },
  {
    type: "properties",
    content: {
      name: "Properties",
      dimensions: [1, 1, 2],
      data: [
        ["Property", "Type", "Description"],
        [
          "isProcessing",
          "boolean",
          "A state variable indicating whether a process is currently executing or not.",
        ],
        [
          "executeProcess",
          "(callback: () => Promise<void>) => Promise<void>",
          "A function that takes in a callback function as an argument and executes the process asynchronously. It returns a Promise that resolves when the process is completed.",
        ],
      ],
    },
  },
];

const Data: DataDescription = {
  name: "useProcess",
  description:
    "The useProcess hook is a custom React hook that provides a way to manage asynchronous processes in a React component. It returns an object with two properties: isProcessing and executeProcess. This hook is designed to help track the state of an asynchronous process and make subtle UI actions accordingly. By knowing whether a certain process is being executed or not, you can update the UI to provide a better user experience, such as displaying loading indicators, disabling buttons, etc.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
