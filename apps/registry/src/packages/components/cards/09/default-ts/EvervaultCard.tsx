"use client";

import useMousePosition from "@/packages/hooks/useMousePosition/01/default-ts/useMousePosition";
import { useEffect, useRef, useState } from "react";

type WordProps = {
  x: number;
  y: number;
  length: number;
};

export default function EvervaultCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(ref);

  console.log(x, y);

  return (
    <div ref={ref} className="group w-max px-6 py-4 rounded-lg border border-outline-secondary">
      <div className="size-[20rem] overflow-hidden rounded-lg relative">
        <Word x={x > 0 && y > 0 ? x : 0} y={x > 0 && y > 0 ? y : 0} length={1000} />
        <div
          className="min-w-[25rem] min-h-[25rem] absolute top-0 left-0 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 rounded-full bg-gradient-to-r from-green-700/70 to-blue-600/70 blur-2xl opacity-0 group-hover:opacity-100"
          style={{ translate: `${x}px ${y}px` }}
        />
        <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
          <h1 className="text-3xl font-bold text-foreground">Hover</h1>
        </div>
      </div>
      <div className="w-80 mt-4">
        <h1 className="text-xl font-bold text-foreground">Evervault Card</h1>
        <p className="text-secondary-foreground">
          This card is inspired from the Aceternity UI. It is re-developed using only Tailwind and React.{" "}
        </p>
      </div>
    </div>
  );
}

function Word({ x, y, length }: WordProps) {
  const [displayText, setDisplayText] = useState<string>("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  function randomize() {
    let str = "";
    for (let i = 0; i < length; i++) {
      str = str + characters[Math.floor(Math.random() * characters.length)];
    }
    setDisplayText(str);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    randomize();
  }, [x, y]);

  return (
    <span className="break-words whitespace-pre-wrap text-sm font-semibold dark:text-white mix-blend-overlay opacity-0 group-hover:opacity-100">
      {displayText}
    </span>
  );
}
