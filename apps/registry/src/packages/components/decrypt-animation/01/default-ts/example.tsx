"use client";

import { useState } from "react";
import DecryptAnimation from "./DecryptAnimation";
import Button from "@registry/ui/Button";
import Message from "@registry/ui/Message";

export default function Example() {
  const [reanimate, setReanimate] = useState<boolean>(false);
  const [animationStyle, setAnimationStyle] = useState<"progress" | "linear">("progress");

  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-80 py-10">
      <Message> Use this animation with text whose length is less. Avoid using this with long text. </Message>
      <DecryptAnimation
        text="Hello World"
        reanimate={reanimate}
        setReanimate={setReanimate}
        className="text-5xl"
        animateStyle={animationStyle}
      />
      <Button type="button" onPress={() => setReanimate(true)}>
        Reanimate
      </Button>
      <Button type="button" onPress={() => setAnimationStyle((prev) => (prev === "progress" ? "linear" : "progress"))}>
        Animation Style: {animationStyle}
      </Button>
    </div>
  );
}
