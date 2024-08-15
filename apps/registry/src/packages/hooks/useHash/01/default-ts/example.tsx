"use client";

import Button from "@registry/ui/Button";
import useHash from "@registry/packages/hooks/useHash/01/default-ts/useHash";

export default function UseHashExample() {
  const { hash, addHash } = useHash();

  const handleAddition = () => {
    addHash("demoHashValue");
  };
  return (
    <div className="text-center">
      <h1 className="text-foreground mb-4">
        Hash Value : {hash ? hash : "null"}
      </h1>
      <Button onPress={handleAddition}> Add Hash </Button>
    </div>
  );
}
