"use client";

import { useState } from "react";
import { CookiePrompt } from "./CookieConsent";
import { Button } from "@registry/packages/primitives/buttons/02/default-ts/Button";

export default function CookieImplementation() {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full min-h-60 flex justify-center items-center">
      <CookiePrompt active={active} setActive={setActive} />
      <Button onClick={() => setActive(true)}>Open Modal</Button>
    </div>
  );
}
