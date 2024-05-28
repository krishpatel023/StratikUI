import { DataDescription, ImplementationNode } from "@/utils/constants";
import { DemoStrJsx, DemoStrTsx, Loader } from "./Demo_Helper";

const CodeTsx: string = `import { useEffect, useState } from "react";

interface UseArtificialLoaderOptions {
  duration?: number;
  initialDelay?: number;
  updateCount?: number;
}

interface UseArtificialLoaderReturn {
  isLoading: boolean;
  progress: number;
  startLoader: (options?: UseArtificialLoaderOptions) => void;
  stopLoader: () => void;
}

const useArtificialLoader = (): UseArtificialLoaderReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [loaderTimeout, setLoaderTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    return () => {
      if (loaderTimeout) {
        clearTimeout(loaderTimeout);
      }
    };
  }, [loaderTimeout]);

  const startLoader = (options: UseArtificialLoaderOptions = {}) => {
    const { duration = 5000, initialDelay = 0, updateCount = 10 } = options;

    setIsLoading(true);
    setProgress(0);

    const startTime = Date.now();
    const endTime = startTime + duration;
    const updateStep = 100 / updateCount;

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const newProgress = Math.min((elapsedTime * 100) / duration, 100);

      const randomJump = Math.floor(Math.random() * updateStep);
      const randomizedProgress = Math.min(newProgress + randomJump, 100);
      const intRandomizedProgress = Math.floor(randomizedProgress);
      setProgress(intRandomizedProgress);

      if (currentTime < endTime) {
        const timeout = setTimeout(updateProgress, Math.random() * 200);
        setLoaderTimeout(timeout);
      } else {
        setIsLoading(false);
        setProgress(100);
      }
    };

    const timeout = setTimeout(updateProgress, initialDelay);
    setLoaderTimeout(timeout);
  };

  const stopLoader = () => {
    if (loaderTimeout) {
      clearTimeout(loaderTimeout);
      setLoaderTimeout(null);
      setIsLoading(false);
      setProgress(0);
    }
  };

  return { isLoading, progress, startLoader, stopLoader };
};

export default useArtificialLoader;
`;

const CodeJsx: string = `import { useEffect, useState } from "react";

const useArtificialLoader = () => {
  const [isLoading, setIsLoading] = useStatefalse);
  const [progress, setProgress] = useState(0);
  const [loaderTimeout, setLoaderTimeout] = useState(null);

  useEffect(() => {
    return () => {
      if (loaderTimeout) {
        clearTimeout(loaderTimeout);
      }
    };
  }, [loaderTimeout]);

  const startLoader = (options) => {
    const { duration = 5000, initialDelay = 0, updateCount = 10 } = options;

    setIsLoading(true);
    setProgress(0);

    const startTime = Date.now();
    const endTime = startTime + duration;
    const updateStep = 100 / updateCount;

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const newProgress = Math.min((elapsedTime * 100) / duration, 100);

      const randomJump = Math.floor(Math.random() * updateStep);
      const randomizedProgress = Math.min(newProgress + randomJump, 100);
      const intRandomizedProgress = Math.floor(randomizedProgress);
      setProgress(intRandomizedProgress);

      if (currentTime < endTime) {
        const timeout = setTimeout(updateProgress, Math.random() * 200);
        setLoaderTimeout(timeout);
      } else {
        setIsLoading(false);
        setProgress(100);
      }
    };

    const timeout = setTimeout(updateProgress, initialDelay);
    setLoaderTimeout(timeout);
  };

  const stopLoader = () => {
    if (loaderTimeout) {
      clearTimeout(loaderTimeout);
      setLoaderTimeout(null);
      setIsLoading(false);
      setProgress(0);
    }
  };

  return { isLoading, progress, startLoader, stopLoader };
};

export default useArtificialLoader;
`;

const DemoString: string = `
// Add your demo code snippet here
`;

function Demo() {
  return (
    <div className="w-full py-20 flex flex-col gap-4 justify-center items-center">
      <Loader />
    </div>
  );
}

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useArtificialLoader",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Example",
        content: [
          { language: "tsx", code: DemoStrTsx },
          { language: "jsx", code: DemoStrJsx },
        ],
      },
    ],
  },
  {
    type: "properties",
    content: {
      name: "Properties",
      description: "Nome",
      dimensions: [25, 25, 50],
      data: [
        ["Property Name", "Type", "Description"],
        [
          "isLoading",
          "boolean",
          "It shows if the loader is loading or not. Internally it uses the useState hook to manage the state. When the startLoader function is called, it sets the isLoading state to true. When the stopLoader function is called, it sets the isLoading state to false.",
        ],
        ["progress", "number", "It gives the progress of the loader."],
        [
          `startLoader(
            duration?: number,
            initialDelay?: number,
            updateCount?: number
          )`,
          "function",
          `The startLoader function initializes a loading process with three optional parameters to customize its behavior. \n
          The duration specifies the total time in milliseconds for which the loader will run, the initialDelay parameter defines the delay in milliseconds before the loader begins and the updateCount parameter indicates how many times the loader should update its state or progress during its operation, enabling control over the frequency of updates.`,
        ],
        [
          "stopLoader()",
          "function",
          "It is a function that stops the loader whenever it is called.",
        ],
        [],
      ],
    },
  },
];

const Data: DataDescription = {
  name: "useArtificialLoader",
  description:
    "This hooks increases the value from 0 to 100 randomly in a given time. This helps us to give the loading effcts and the increase is random thus making it more realistic. You can use it in various website loaders as well as loading page elements like top loading bars.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
