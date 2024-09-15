"use client";

import { useState } from "react";
import DecryptAnimation from "./DecryptAnimation";
import Button from "@registry/ui/Button";

export default function Example() {
  const [play, setPlay] = useState(false);
  const [style, setStyle] = useState("linear");

  function handlePlay() {
    setPlay(!play);
  }
  return (
    <div className="min-h-80 flex flex-col items-center justify-center gap-10">
      <DecryptAnimation
        text={
          "This is an example to demonstrate that this version can handle large sentences effectively. It won't break when you add larger sentences."
        }
        play={play}
        animateStyle={style}
        className="justify-center"
        iteration={style === "linear" ? 15 : 5}
      />
      <Button onPress={handlePlay}>Play</Button>
      <Button
        onPress={() => {
          setStyle(style === "linear" ? "progress" : "linear");
        }}
      >
        Toggle Animation : {style}
      </Button>
    </div>
  );
}
