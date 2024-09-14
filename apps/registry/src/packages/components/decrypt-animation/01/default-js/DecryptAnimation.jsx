"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function DecryptAnimation({
  text = "Default Text",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",
  interval = 50,
  reanimate = false,
  setReanimate,
  className,
  animateStyle = "progress",
  iteration = 1,
}) {
  const [displayText, setDisplayText] = useState(text);

  function progress() {
    if (!text) return;

    let iteration_flag = 0;
    const phase = setInterval(() => {
      setDisplayText((prevText) => {
        const newText = text
          .split("")
          .map((char, index) => {
            if (index < iteration_flag) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");
        return newText;
      });

      if (iteration_flag >= text.length) {
        clearInterval(phase);
      }

      iteration_flag += iteration;
    }, interval);

    if (reanimate && setReanimate) {
      setReanimate(false);
    }
    return () => clearInterval(phase);
  }

  function linear() {
    const limit = 15;
    if (!text) return;

    let iteration_flag = 0;
    const phase = setInterval(() => {
      setDisplayText((prevText) => {
        const newText = text
          .split("")
          .map((char, index) => {
            if (iteration_flag >= limit) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");
        return newText;
      });

      if (iteration_flag >= limit) {
        clearInterval(phase);
      }

      iteration_flag += iteration;
    }, interval);

    if (reanimate && setReanimate) {
      setReanimate(false);
    }
    return () => clearInterval(phase);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: progress will rerender on every change thus not needing to be used
  useEffect(() => {
    if (animateStyle === "progress") progress();
    else if (animateStyle === "linear") linear();
  }, [text, characters, interval, reanimate, setReanimate, animateStyle]);

  return (
    <div className={twMerge("text-wrap font-mono text-2xl text-foreground", className)}>
      {displayText || "No text provided"}
    </div>
  );
}
