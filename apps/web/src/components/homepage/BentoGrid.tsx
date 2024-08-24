"use client";
import { Links } from "@/utils/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { HighlightGroup, HighlighterItem } from "../ui/Gradient";
import { GradientText } from "../ui/GradientText";
import ShineLink from "../ui/Link-Shine";
import CopyPaste from "./animations/copy-paste";
import Imports from "./animations/imports";
import JSX_TSX from "./animations/jsx-tsx";
import ModeToggle from "./animations/mode-toggle";
import OpenSource from "./animations/open-source";
import WAI_ARIA from "./animations/wai-aria";

export function BentoGrid() {
  return (
    <>
      <GradientText className="w-full text-center text-4xl sm:text-5xl font-bold mx-auto mt-40 mb-28 ">
        What we offer
      </GradientText>
      <HighlightGroup className="grid grid-cols-3 gap-4 w-[90%] md:w-[80%] mx-auto">
        <BentoCard span={3} className="relative h-[35rem] md:h-auto">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-3xl font-medium">Open Source</h1>
            <p>
              We are open source and always looking for contributors. You can contribute to our codebase and help us
              make this library even better. Please leave a star on our Github repository if you like our work.
            </p>
            <ShineLink className="w-max" href={Links.stratikui.github} target="_blank" rel="noreferrer noopener">
              View on Github
            </ShineLink>
          </div>
          <OpenSource className="translate-y-1/4 left-0 md:left-auto md:translate-y-0 md:top-2 md:translate-x-1/4" />
        </BentoCard>
        <BentoCard span={1}>
          <CopyPaste />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">Own your components</h1>
            <p>
              You can{" "}
              <span className="group-data-[visible=true]/bento-card:text-green-500 group-data-[visible=true]/bento-card:underline  group-hover/bento-card:text-green-500 group-hover/bento-card:underline underline-offset-2 transition-all duration-200 delay-300 ">
                copy and paste
              </span>{" "}
              {"any component you like, and then customize it customize it as you wish. It's as easy as that!"}
            </p>
          </div>
        </BentoCard>
        <BentoCard span={2}>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">No External Libraries</h1>
            <p>
              Every primitive, component and hook is built from scratch, thus eliminating the need for external
              libraries. There will be few integrations with external libraries, but the will be under the integrations
              section.
            </p>
          </div>
          <Imports />
        </BentoCard>
        <BentoCard span={1}>
          <WAI_ARIA />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">Accessibility</h1>
            <p>
              There are variants of every primitive which are made using React Aria and thus are accessible by default.
            </p>
          </div>
        </BentoCard>
        <BentoCard span={1}>
          <JSX_TSX />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">JSX and TSX Support</h1>
            <p>We provide code for both JSX and TSX. Whatever you use, we support it.</p>
          </div>
        </BentoCard>
        <BentoCard span={1}>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">Effortless Mode Switching</h1>
            <p>Switch between modes and everything will be automatically adjusted.</p>
          </div>
          <ModeToggle />
        </BentoCard>
      </HighlightGroup>
    </>
  );
}

function BentoCard({
  children,
  span = 1,
  className,
}: {
  children: React.ReactNode;
  span?: number;
  className?: string;
}) {
  const style = {
    "--span-col": `span ${span} / span ${span}`,
  } as React.CSSProperties;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-300px" });

  return (
    <HighlighterItem
      className={twMerge(
        "min-h-80 border dark:border-neutral-800",
        span > 1 ? "col-span-3 md:[grid-column:var(--span-col)]" : "col-span-3 md:col-span-1",
        className,
      )}
      style={style}
    >
      <div
        data-visible={inView && document.body.clientWidth < 750}
        className="group/bento-card w-full h-full p-8 text-neutral-800 dark:text-neutral-400 flex flex-col gap-10 border dark:border-neutral-800 rounded-[inherit] "
        ref={ref}
      >
        {children}
      </div>
    </HighlighterItem>
  );
}
