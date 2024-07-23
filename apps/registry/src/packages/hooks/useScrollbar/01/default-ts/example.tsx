"use client";

import useScrollbar from "@/packages/hooks/useScrollbar/01/default-ts/useScrollbar";

export default function UseScrollbarExample() {
  // Will provide the information of main direction and scroll position
  const { directionX, directionY, scrollPosition } = useScrollbar();

  // Can be used like this also
  // With Id
  // const { directionY, scrollPosition } = useScrollbar("targetElem");
  // With ref
  // const { directionY, scrollPosition } = useScrollbar(ref);

  return (
    <div className="py-10 flex justify-center items-center">
      <div className="w-80 flex flex-col py-4 px-4 gap-4 rounded-lg bg-primary border-outline-secondary text-foreground">
        <h1>Scrolling Down: {directionY ? "True" : "False"}</h1>
        <h1>Scrolling Right: {directionX ? "True" : "False"}</h1>
        <h1>Scroll Position X: {scrollPosition.x}</h1>
        <h1>Scroll Position Y: {scrollPosition.y}</h1>
      </div>
    </div>
  );
}
