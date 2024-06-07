"use client";

import { Button } from "@/packages/ui/Button";
import useHash from "../../code/useHash";

export const Helper = () => {
  const { hash, addHash } = useHash();

  const handleAddition = () => {
    addHash("demoHashValue");
  };
  return (
    <div className="text-center">
      <h1 className="text-black dark:text-white mb-4">
        Hash Value : {hash ? hash : "null"}
      </h1>
      <Button onClick={handleAddition}> Add Hash </Button>
    </div>
  );
};

export const HelperString = `export const Helper = () => {
  const { hash, addHash } = useHash(); // [!code highlight]

  const handleAddition = () => {
    addHash("demoHashValue"); // [!code highlight]
  };
  return (
    <div className="text-center">
      <h1 className="text-black dark:text-white mb-4">
        Hash Value : {hash ? hash : "null"} // [!code highlight]
      </h1>
      <Button onClick={handleAddition}> Add Hash </Button>
    </div>
  );
};`;
