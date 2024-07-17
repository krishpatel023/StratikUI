"use client";

import { Button } from "@/packages/ui/Button";
import { IconProps } from "@/utils/constants";
import useDelay from "../useDelay/useDelay";
import useProcess from "./useProcess";

export function Demo() {
  const { delay } = useDelay();
  const { isProcessing, executeProcess } = useProcess();

  const handleAction = () => {
    executeProcess(async () => {
      // Do something
      // Delayed here just to show the loading state
      await delay(2000);
    });
  };

  return (
    <div className="flex justify-center items-center gap-6 text-center py-10">
      <Button
        onClick={handleAction}
        className="w-40 flex justify-center items-center"
      >
        {isProcessing ? (
          <LoaderIcon className="w-6 h-6 animate-spin" />
        ) : (
          "Click me"
        )}
      </Button>
    </div>
  );
}

const LoaderIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3Z"
      ></path>
    </svg>
  );
};
