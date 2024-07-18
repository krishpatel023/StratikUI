"use client";

import { Button } from "@/packages/ui/Button";
import useHash from "./useHash";

export const Demo = () => {
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
