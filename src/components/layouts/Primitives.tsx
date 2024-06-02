"use client";
import { useTheme } from "@/hooks/Theme";
import { versionCheck } from "@/scripts/VersionCheck";
import { DataDescription } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { convertToDashed } from "@/utils/utils";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import dynamic from "next/dynamic";

const Implementation = dynamic(() => import("../Implementation"));

export default function PrimitivesLayout({ data }: { data: DataDescription }) {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState<boolean>(false);

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
              className="text-xl font-medium text-black dark:text-gray-200 group/hashtag flex gap-2 relative transition-all duration-300 ease-linear"
              aria-label="Get component specific link"
            >
              {data.name}
              <span
                className={twMerge(
                  "text-black dark:text-gray-200 hidden absolute top-[0.125rem] -left-8",
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
          <ComponentHeaderPrimitive
            theme={theme}
            setTheme={setTheme}
            active={active}
            setActive={setActive}
          />
          {active ? (
            <Implementation
              implementation={data.implementation}
              active={active}
            />
          ) : (
            <div className="w-full border-[1px] border-neutral-300 dark:border-neutral-800  mt-6 rounded-xl mx-auto relative overflow-hidden">
              {/* EDITOR */}
              <div className="w-full overflow-x-auto py-10 flex justify-center @container">
                {data.component}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

const ComponentHeaderPrimitive = ({
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
    <div className="w-full h-12 flex justify-between items-center">
      <div className="py-1 px-1 flex gap-1 bg-secondary rounded text-textPrimary">
        <button
          className={
            active === false ? "bg-background px-2 py-1 rounded" : "px-2 py-1"
          }
          onClick={() => setActive(false)}
          aria-label="Preview Component"
        >
          Preview
        </button>
        <button
          className={
            active === true ? "bg-background px-2 py-1 rounded" : "px-2 py-1"
          }
          onClick={() => setActive(true)}
          aria-label="Preview Code"
        >
          Code
        </button>
      </div>
      <button
        onClick={() => setTheme(!theme)}
        className="h-10 w-10 bg-secondary p-1 rounded-md flex justify-center items-center gap-4 text-center text-textPrimary"
        aria-label="Toggle Theme"
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
