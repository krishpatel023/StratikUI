"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

type DecryptAnimationProps = {
  text: string;
  play: boolean;
  iteration?: number;
  animateStyle?: "progress" | "linear";
  className?: string;
  interval?: number;
};

type WordProps = {
  text: string;
  interval?: number;
  reanimate?: boolean;
  className?: string;
  limit?: number;
  index?: number;
  animateStyle?: "progress" | "linear";
};

export default function DecryptAnimation({
  text,
  play = false,
  iteration = 15,
  animateStyle = "progress",
  className,
  interval = 50,
}: DecryptAnimationProps) {
  const [reanimate, setReanimate] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setReanimate(true);
    setTimeout(() => {
      setReanimate(false);
    }, 100);
  }, [play, animateStyle]);
  return (
    <div className={twMerge("flex flex-wrap text-2xl font-mono text-foreground", className)}>
      {(() => {
        let globalIndex = 0; // Global index tracker for all characters

        return text.split(" ").map((word, i) => (
          <div key={i} className="flex">
            {word.split("").map((char, j) => {
              const charIndex = globalIndex;
              globalIndex += 1;

              return (
                <Word
                  key={charIndex}
                  text={char}
                  animateStyle={animateStyle}
                  limit={iteration}
                  index={charIndex}
                  reanimate={reanimate}
                  interval={interval}
                />
              );
            })}

            {i < text.split(" ").length - 1 &&
              (() => {
                const spaceIndex = globalIndex;
                globalIndex += 1;

                return (
                  <Word
                    key={spaceIndex}
                    text={" "}
                    animateStyle={animateStyle}
                    limit={iteration}
                    index={spaceIndex}
                    reanimate={reanimate}
                    interval={interval}
                  />
                );
              })()}
          </div>
        ));
      })()}
    </div>
  );
}

function Word({
  text,
  interval = 50,
  reanimate = false,
  className,
  animateStyle = "progress",
  limit = 1,
  index = 0,
}: WordProps) {
  const [displayText, setDisplayText] = useState(text);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  function progress() {
    const multiplier = 5;
    if (!text) return;

    let iteration_flag = 0;
    const phase = setInterval(() => {
      setDisplayText(() => {
        if (iteration_flag >= limit + index * 5) {
          return text;
        }
        return characters[Math.floor(Math.random() * characters.length)];
      });

      if (iteration_flag >= limit + index * 5) {
        clearInterval(phase);
      }

      iteration_flag++;
    }, interval);
    return () => clearInterval(phase);
  }

  function linear() {
    if (!text) return;

    let iteration_flag = 0;
    const phase = setInterval(() => {
      setDisplayText(() => {
        if (iteration_flag >= limit) {
          return text;
        }
        return characters[Math.floor(Math.random() * characters.length)];
      });

      if (iteration_flag >= limit) {
        clearInterval(phase);
      }

      iteration_flag++;
    }, interval);

    return () => clearInterval(phase);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: progress will rerender on every change thus not needing to be used
  useEffect(() => {
    if (animateStyle === "progress") progress();
    else if (animateStyle === "linear") linear();
  }, [text, characters, interval, reanimate, animateStyle]);

  return <span className={className}>{displayText === " " ? "\u00A0" : displayText}</span>;
}
