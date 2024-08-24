"use client";

import useDelay from "@registry/packages/hooks/useDelay/01/default-ts/useDelay";
import useProcess from "@registry/packages/hooks/useProcess/01/default-ts/useProcess";
import Button from "@registry/ui/Button";

export default function UseProcessExample() {
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
      <Button onPress={handleAction} className="w-40 flex justify-center items-center" isProcessing={isProcessing}>
        Click me
      </Button>
    </div>
  );
}
