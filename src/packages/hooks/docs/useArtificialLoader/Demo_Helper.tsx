"use client";

import { Button } from "@/packages/ui/Button";
import useArtificialLoader from "../../code/useArtificialLoader";

export const Loader = () => {
  const { isLoading, progress, startLoader, stopLoader } =
    useArtificialLoader();

  const handleStart = () => {
    startLoader({
      duration: 2000,
      updateCount: 100,
    });
  };

  const handleStop = () => {
    stopLoader();
  };
  return (
    <>
      <div className="w-80 flex justify-between items-center">
        <div className="w-[80%] h-2 rounded-full bg-neutral-700/10 dark:bg-neutral-800/80">
          <div
            style={{ width: `${progress}%` }}
            className="min-h-full bg-blue-600 dark:bg-blue-700 rounded-full transition-all duration-300"
          ></div>
        </div>
        <span className="text-xs flex dark:text-neutral-400">{progress} %</span>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={() => handleStart()}
          disabled={isLoading || progress > 0}
        >
          Start
        </Button>
        <Button onClick={handleStop} disabled={!isLoading && progress === 0}>
          Reset
        </Button>
      </div>
    </>
  );
};

export const DemoStrTsx = `export const Loader = () => {
  const { isLoading, progress, startLoader, stopLoader } = useArtificialLoader(); // [!code highlight]

  const handleStart = () => {
    startLoader({// [!code highlight]
      duration: 2000,// [!code highlight]
      updateCount: 100,// [!code highlight]
    });// [!code highlight]
  };

  const handleStop = () => {
    stopLoader(); // [!code highlight]
  };
  return (
    <>
      <div className="w-80 flex justify-between items-center">
        <div className="w-[80%] h-2 rounded-full bg-neutral-700/10 dark:bg-neutral-800/80">
          <div
            style={{ width: \`\${progress}%\` }} // [!code highlight]
            className="min-h-full bg-blue-600 dark:bg-blue-700 rounded-full transition-all duration-300"
          ></div>
        </div>
        <span className="text-xs flex dark:text-neutral-400">{progress} %</span>
      </div>
      <div>
        <button
          onClick={() => handleStart()}
          disabled={isLoading || progress > 0}
        >
          Start
        </button>
        <button onClick={handleStop} disabled={!isLoading && progress === 0}>
          Reset
        </button>
      </div>
    </>
  );
};
`;

export const DemoStrJsx = `export const Loader = () => {
  const { isLoading, progress, startLoader, stopLoader } = useArtificialLoader(); // [!code highlight]

  const handleStart = () => {
    startLoader({ // [!code highlight]
      duration: 2000, // [!code highlight]
      updateCount: 100, // [!code highlight]
    }); // [!code highlight]
  };

  const handleStop = () => {
    stopLoader(); // [!code highlight]
  };
  return (
    <>
      <div className="w-80 flex justify-between items-center">
        <div className="w-[80%] h-2 rounded-full bg-neutral-700/10 dark:bg-neutral-800/80">
          <div
            style={{ width: \`\${progress}%\` }} // [!code highlight]
            className="min-h-full bg-blue-600 dark:bg-blue-700 rounded-full transition-all duration-300"
          ></div>
        </div>
        <span className="text-xs flex dark:text-neutral-400">{progress} %</span>
      </div>
      <div>
        <button
          onClick={() => handleStart()}
          disabled={isLoading || progress > 0}
        >
          Start
        </button>
        <button onClick={handleStop} disabled={!isLoading && progress === 0}>
          Reset
        </button>
      </div>
    </>
  );
};
`;
