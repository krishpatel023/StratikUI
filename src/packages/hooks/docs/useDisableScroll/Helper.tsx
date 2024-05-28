"use client";

import { Button } from "@/packages/ui/Button";
import { useRef, useState } from "react";
import useDisableScroll from "../../code/useDisableScroll";

export function Demo() {
  const [IdPaused, setIdPaused] = useState<boolean>(false);
  const [RefPaused, setRefPaused] = useState<boolean>(false);
  const [BodyPaused, setBodyPaused] = useState<boolean>(false);

  const containerRef = useRef(null);

  useDisableScroll(IdPaused, "uniqueIdThatIsNotSoUnique");
  useDisableScroll(RefPaused, containerRef);
  useDisableScroll(BodyPaused);

  const handleBodyPaused = () => {
    unPauseOthers();
    if (!BodyPaused) setBodyPaused(true);
  };
  const handleIdPaused = () => {
    unPauseOthers();
    if (!IdPaused) setIdPaused(true);
  };
  const handleRefPaused = () => {
    unPauseOthers();
    if (!RefPaused) setRefPaused(true);
  };

  const unPauseOthers = () => {
    setBodyPaused(false);
    setIdPaused(false);
    setRefPaused(false);
  };

  return (
    <div className="min-h-[35rem] flex flex-col justify-center items-center gap-6 text-center">
      <h1 className="text-black dark:text-white">This is a scrollable div</h1>
      <div
        className="w-80 h-80 overflow-auto"
        id="uniqueIdThatIsNotSoUnique"
        ref={containerRef}
      >
        <div className="w-full min-h-[40rem] bg-neutral-100 dark:bg-neutral-800">
          {Array.from({ length: 100 }).map((_, i) => (
            <h1 key={i} className="text-2xl text-black dark:text-white">
              {i + 1}
            </h1>
          ))}
        </div>
      </div>
      <h1 className="text-2xl text-black dark:text-white">
        {IdPaused ? "Paused Container Scroll By Id" : null}
        {RefPaused ? "Paused Container Scroll By Ref" : null}
        {BodyPaused ? "Paused Body Scroll" : null}
      </h1>
      <div className="flex gap-4 flex-col @md:flex-row">
        <Button onClick={handleIdPaused}>
          {IdPaused ? "Resume" : "Pause"} container By Id
        </Button>
        <Button onClick={handleRefPaused}>
          {RefPaused ? "Resume" : "Pause"} container By Ref
        </Button>
        <Button onClick={handleBodyPaused}>
          {BodyPaused ? "Resume" : "Pause"} Body
        </Button>
      </div>
    </div>
  );
}

export const DemoStrTsx = `export function Demo() {
  const [IdPaused, setIdPaused] = useState<boolean>(false);
  const [RefPaused, setRefPaused] = useState<boolean>(false);
  const [BodyPaused, setBodyPaused] = useState<boolean>(false);

  const containerRef = useRef(null); // [!code highlight]

  useDisableScroll(IdPaused, "uniqueIdThatIsNotSoUnique"); // [!code highlight]
  useDisableScroll(RefPaused, containerRef); // [!code highlight]
  useDisableScroll(BodyPaused); // [!code highlight]

  const handleBodyPaused = () => {
    unPauseOthers();
    if (!BodyPaused) setBodyPaused(true);
  };
  const handleIdPaused = () => {
    unPauseOthers();
    if (!IdPaused) setIdPaused(true);
  };
  const handleRefPaused = () => {
    unPauseOthers();
    if (!RefPaused) setRefPaused(true);
  };

  // Just for the proper functioning of the example. Not needed otherwise. Kindly Ignore :)
  const unPauseOthers = () => {
    setBodyPaused(false);
    setIdPaused(false);
    setRefPaused(false);
  };

  return (
    <div className="min-h-[35rem] flex flex-col justify-center items-center gap-6 text-center">
      <h1 className="text-black dark:text-white">This is a scrollable div</h1>
      <div
        className="w-80 h-80 overflow-auto"
        id="uniqueIdThatIsNotSoUnique" // [!code highlight]
        ref={containerRef} // [!code highlight]
      >
        <div className="w-full min-h-[40rem] bg-neutral-100 dark:bg-neutral-800">
          {Array.from({ length: 100 }).map((_, i) => (
            <h1 key={i} className="text-2xl text-black dark:text-white">
              {i + 1}
            </h1>
          ))}
        </div>
      </div>
      <h1 className="text-2xl text-black dark:text-white">
        {IdPaused ? "Paused Container Scroll By Id" : null}
        {RefPaused ? "Paused Container Scroll By Ref" : null}
        {BodyPaused ? "Paused Body Scroll" : null}
      </h1>
      <div className="flex gap-4 flex-col @md:flex-row">
        <Button onClick={handleIdPaused}>
          {IdPaused ? "Resume" : "Pause"} container By Id
        </Button>
        <Button onClick={handleRefPaused}>
          {RefPaused ? "Resume" : "Pause"} container By Ref
        </Button>
        <Button onClick={handleBodyPaused}>
          {BodyPaused ? "Resume" : "Pause"} Body
        </Button>
      </div>
    </div>
  );
}`;

export const DemoStrJsx = `export function Demo() {
  const [IdPaused, setIdPaused] = useState(false);
  const [RefPaused, setRefPaused] = useState(false);
  const [BodyPaused, setBodyPaused] = useState(false);

  const containerRef = useRef(null); // [!code highlight]

  useDisableScroll(IdPaused, "uniqueIdThatIsNotSoUnique"); // [!code highlight]
  useDisableScroll(RefPaused, containerRef); // [!code highlight]
  useDisableScroll(BodyPaused); // [!code highlight]

  const handleBodyPaused = () => {
    unPauseOthers();
    if (!BodyPaused) setBodyPaused(true);
  };
  const handleIdPaused = () => {
    unPauseOthers();
    if (!IdPaused) setIdPaused(true);
  };
  const handleRefPaused = () => {
    unPauseOthers();
    if (!RefPaused) setRefPaused(true);
  };

  // Just for the proper functioning of the example. Not needed otherwise. Kindly Ignore :)
  const unPauseOthers = () => {
    setBodyPaused(false);
    setIdPaused(false);
    setRefPaused(false);
  };

  return (
    <div className="min-h-[35rem] flex flex-col justify-center items-center gap-6 text-center">
      <h1 className="text-black dark:text-white">This is a scrollable div</h1>
      <div
        className="w-80 h-80 overflow-auto"
        id="uniqueIdThatIsNotSoUnique" // [!code highlight]
        ref={containerRef} // [!code highlight]
      >
        <div className="w-full min-h-[40rem] bg-neutral-100 dark:bg-neutral-800">
          {Array.from({ length: 100 }).map((_, i) => (
            <h1 key={i} className="text-2xl text-black dark:text-white">
              {i + 1}
            </h1>
          ))}
        </div>
      </div>
      <h1 className="text-2xl text-black dark:text-white">
        {IdPaused ? "Paused Container Scroll By Id" : null}
        {RefPaused ? "Paused Container Scroll By Ref" : null}
        {BodyPaused ? "Paused Body Scroll" : null}
      </h1>
      <div className="flex gap-4 flex-col @md:flex-row">
        <Button onClick={handleIdPaused}>
          {IdPaused ? "Resume" : "Pause"} container By Id
        </Button>
        <Button onClick={handleRefPaused}>
          {RefPaused ? "Resume" : "Pause"} container By Ref
        </Button>
        <Button onClick={handleBodyPaused}>
          {BodyPaused ? "Resume" : "Pause"} Body
        </Button>
      </div>
    </div>
  );
}`;
