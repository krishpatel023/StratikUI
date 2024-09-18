"use client";

import useMousePosition from "@registry/packages/hooks/useMousePosition/01/default-js/useMousePosition";
import { useEffect, useRef, useState } from "react";

export default function EvervaultCard() {
  const ref = useRef(null);
  const { x, y } = useMousePosition(ref);
  return (
    <div ref={ref} className="group w-max px-6 py-6 rounded-lg border border-outline-secondary">
      <div className="size-[20rem] overflow-hidden rounded-lg relative">
        <Word x={x > 0 && y > 0 ? x : 0} y={x > 0 && y > 0 ? y : 0} length={1000} />
        <div
          style={{ "--mouseX": `${x}px`, "--mouseY": `${y}px` }}
          className="size-full absolute left-0 top-0 inset-0 group-hover:bg-[radial-gradient(250px_circle_at_var(--mouseX)__var(--mouseY),transparent,black)] z-40 duration-500"
        />
        <div className="size-full absolute top-0 left-0 bg-gradient-to-r from-green-700/70 to-blue-600/70 opacity-0 group-hover:opacity-100" />
        {/* Not part of the animation - can be changed */}
        <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 z-50">
          <div className="absolute size-36 rounded-full flex justify-center items-center bg-background blur-sm" />
          <h1 className="text-3xl font-bold text-foreground z-10">Hover</h1>
        </div>
      </div>
      <div className="w-80 mt-4">
        <h1 className="text-xl font-bold text-foreground">Evervault Card</h1>
        <p className="text-secondary-foreground">
          This card is inspired from the Aceternity UI. It is re-developed using only Tailwind and React.
        </p>
      </div>
    </div>
  );
}

function Word({ x, y, length }) {
  const [displayText, setDisplayText] = useState("");
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
