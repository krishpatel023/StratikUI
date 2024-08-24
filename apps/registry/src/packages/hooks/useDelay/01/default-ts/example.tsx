// !code-highlight: [10]
"use client";

import Button from "@registry/ui/Button";
import { useState } from "react";
import useDelay from "@registry/packages/hooks/useDelay/01/default-ts/useDelay";
import { Modal } from "@registry/packages/primitives/modals/01/default-ts/Modal";

export default function UseDelayExample() {
  const { isDelaying, delay, clearDelay } = useDelay();

  const [active, setActive] = useState<boolean>(false);

  // This way you can use it with async-await or .then
  const handleDelay = async () => {
    await delay(2000);
    setActive(true);
  };

  // This way you can use it without async-await or .then
  const handleDelayWithAction = () => {
    delay(2000, () => {
      setActive(true);
    });
  };

  const handleClearDelay = () => {
    clearDelay();
  };

  return (
    <div className="min-h-[35rem] flex flex-col justify-center items-center gap-6 text-center">
      <Modal isOpen={active} setOpen={setActive} className="max-w-[30rem]">
        <h1>This is the delayed action of your click.</h1>
        <span className="mt-4">
          <Button onPress={() => setActive(false)}>Close</Button>
        </span>
      </Modal>
      <h1 className="text-2xl text-foreground">{isDelaying ? "Delaying" : "Click to see the delayed action"}</h1>
      <div className="flex gap-4 flex-col @md:flex-row">
        <Button onPress={handleDelay}>Delay with Async</Button>
        <Button onPress={handleDelayWithAction}>Delay without Async</Button>
        <Button onPress={handleClearDelay}>Clear Delay</Button>
      </div>
    </div>
  );
}
