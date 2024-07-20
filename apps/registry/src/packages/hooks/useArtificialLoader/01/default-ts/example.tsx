"use client";

import Button from "@/ui/Button";
import useArtificialLoader from "./useArtificialLoader";

const Loader = () => {
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
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="w-80 flex justify-between items-center">
        <div className="w-[80%] h-2 rounded-full bg-primary">
          <div
            style={{ width: `${progress}%` }}
            className="min-h-full bg-accent rounded-full transition-all duration-300"
          ></div>
        </div>
        <span className="text-sm flex text-primary-foreground">
          {progress} %
        </span>
      </div>
      <div className="flex gap-4">
        <Button
          onPress={() => handleStart()}
          isDisabled={isLoading || progress > 0}
        >
          Start
        </Button>
        <Button
          onPress={handleStop}
          isDisabled={!isLoading && progress === 0}
          variant="outline"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Loader;
