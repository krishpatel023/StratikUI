"use client";
import { useTheme } from "@/hooks/Theme";
import { versionCheck } from "@/scripts/VersionCheck";
import { DataDescription } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { convertToDashed } from "@/utils/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Skeleton } from "../ui/Skeleton";

import dynamic from "next/dynamic";

const Implementation = dynamic(() => import("../Implementation"));
const ResizableContainer = dynamic(() => import("../Resizable"));

export default function ComponentsLayout({ data }: { data: DataDescription }) {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState<boolean>(false);

  const router = useRouter();

  const sizeRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>();
  const [divWidth, setDivWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (sizeRef.current) {
        setDivWidth(sizeRef.current.offsetWidth);
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (sizeRef.current) {
      setDivWidth(sizeRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      {data && (
        <div
          className={`w-full mb-16 container-theme-handler mt-10 ${theme ? "darkComponent" : ""}`}
          id={convertToDashed(data.name)}
        >
          <div className="w-full flex flex-col py-4 gap-4 rounded-xl mx-auto mt-10">
            {versionCheck(data.version_included) ? (
              <div className="max-w-12 text-center text-xs font-light text-success bg-success/30 rounded-full border-2 border-success">
                New
              </div>
            ) : null}
            <Link
              href={`#${convertToDashed(data.name)}`}
              className="text-xl font-medium text-textPrimary group/hashtag flex gap-2 relative transition-all duration-300 ease-linear"
            >
              {data.name}
              <span
                className={twMerge(
                  "text-gray-800 dark:text-gray-200 hidden absolute top-[0.125rem] -left-8",
                  "group-hover/hashtag:inline-block"
                )}
              >
                <Icons.link className="w-6 h-6" />
              </span>
            </Link>
            <p className="text-textSecondary font-normal text-base">
              {data.description}
            </p>
          </div>
          <div
            className={`w-full flex flex-col items-center justify-center pt-4 gap-4 rounded-xl mx-auto`}
            ref={sizeRef}
          >
            <ComponentHeader
              theme={theme}
              setTheme={setTheme}
              active={active}
              setActive={setActive}
            />
            {divWidth && divWidth !== 0 ? (
              <>
                {active ? null : (
                  <ResizableContainer
                    maxWidth={divWidth - 15}
                    minWidth={400}
                    initialWidth={0}
                  >
                    {data.component}
                  </ResizableContainer>
                )}
              </>
            ) : (
              <div className="flex w-full min-h-[800px]">
                <Skeleton className="min-h-full min-w-[calc(100%-1rem)] rounded-lg" />
                <div className="w-4 flex justify-center items-center cursor-col-resize z-10">
                  <div className="min-h-8 bg-primary rounded-full min-w-[0.25rem]"></div>
                </div>
              </div>
            )}
            <Implementation
              implementation={data.implementation}
              active={active}
            />
          </div>
        </div>
      )}
    </>
  );
}

const ComponentHeader = ({
  theme,
  setTheme,
  active,
  setActive,
}: {
  theme: boolean;
  setTheme: (theme: boolean) => void;
  active: boolean;
  setActive: (active: boolean) => void;
}) => {
  return (
    <div
      className={` ${active ? "w-full" : "w-[calc(100%-1rem)] mr-4"} h-12 flex justify-between items-center `}
    >
      <div className="py-1 px-1 flex gap-1 bg-secondary rounded text-textPrimary">
        <button
          className={
            active === false ? "bg-background px-2 py-1 rounded" : "px-2 py-1"
          }
          onClick={() => setActive(false)}
        >
          Preview
        </button>
        <button
          className={
            active === true ? "bg-background px-2 py-1 rounded" : "px-2 py-1"
          }
          onClick={() => setActive(true)}
        >
          Code
        </button>{" "}
      </div>
      <button
        onClick={() => setTheme(!theme)}
        className="h-10 w-10 bg-secondary p-1 rounded-md flex justify-center items-center gap-4 text-center text-textPrimary"
      >
        <div className="bg-background hover:bg-secondary w-full h-full flex justify-center items-center rounded-md">
          {theme ? (
            <Icons.moon className="w-6 h-6" />
          ) : (
            <>
              <Icons.sun className="w-6 h-6" />
            </>
          )}
        </div>
      </button>
    </div>
  );
};
