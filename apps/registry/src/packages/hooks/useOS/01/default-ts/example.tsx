"use client";

import React from "react";
import { useOS } from "@registry/packages/hooks/useOS/01/default-ts/useOS";

export default function UseOSExample() {
  const os = useOS();

  return (
    <div className="w-full h-60 flex flex-col justify-center items-center text-foreground">
      <p>Your operating system is: {os}</p>
    </div>
  );
}
