"use client";
import { DataDescription } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { DEFAULT_MODE } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Implementation from "./Implementation";
import ResizableContainer from "./Resizable";
import { useTheme } from "@/hooks/Theme";
import { versionCheck } from "@/scripts/VersionCheck";
import { Skeleton } from "./ui/Skeleton";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function Component({ data }: { data: DataDescription }) {
  const { theme, setTheme } = useTheme();
  // const [mode, setMode] = useState<boolean>(DEFAULT_MODE);
  const [active, setActive] = useState<boolean>(false);
  const [screen, setScreen] = useState<"sm" | "md" | "lg">("sm");

  const router = useRouter();
  const param = usePathname();
  const tempSplit = param?.split("/");
  const pageType = tempSplit[2].split("#")[0];
  const pageName = tempSplit[2].split("#")[1];

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

  const convertToDashed = (str: string) => {
    const convertToArray = str.toLowerCase().split(" ");
    return convertToArray.join("-");
  };

  return (
    <>
      {data ? (
        <div
          className={`w-full mb-16 container-theme-handler mt-10 ${theme ? "darkComponent" : ""}`}
          id={convertToDashed(data.name)}
        >
          {pageType === "primitives" && (
            <>
              <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto mt-10">
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
              <div className="w-[90%] mx-auto">
                <ComponentHeaderPrimitive
                  theme={theme}
                  setTheme={setTheme}
                  active={active}
                  setActive={setActive}
                />
              </div>
              {active ? (
                <div className="w-[90%] mx-auto">
                  <Implementation
                    implementation={data.implementation}
                    active={active}
                  />
                </div>
              ) : (
                <div className="w-[90%] border-[1px] border-neutral-300 dark:border-neutral-800  mt-6 rounded-xl mx-auto relative overflow-hidden">
                  {/* EDITOR */}
                  <div className="w-full overflow-x-auto py-10 flex justify-center @container">
                    {data.component}
                  </div>
                  {/* BACKGROUND */}
                  {theme ? (
                    <>
                      {/* // <div className="bg-slate-950 -z-10 absolute bottom-0 left-0 right-0 top-0 rounded-b-xl bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    <div className="rounded-xl w-full h-full overflow-hidden absolute inset-0 -z-10 size-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                      <div className="absolute my-auto -left-[98%] -z-10 size-full rounded-full bg-blue-300 opacity-20 blur-[100px]" />
                      <div className="absolute my-auto -right-[98%] -z-10 size-full rounded-full bg-blue-300 opacity-20 blur-[100px]" />
                    </div> */}
                    </>
                  ) : (
                    // <div className="bg-blue-100/40 -z-10 absolute bottom-0 left-0 right-0 top-0 rounded-b-xl "></div>
                    <div className="rounded-xl w-full h-full overflow-hidden absolute inset-0 -z-10 size-full bg-white ">
                      {/* <div className="absolute my-auto -left-[90%] -z-10 size-full rounded-full bg-sky-300 opacity-20 blur-[100px]" />
                      <div className="absolute my-auto -right-[90%] -z-10 size-full rounded-full bg-sky-300 opacity-20 blur-[100px]" /> */}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {pageType === "components" && (
            <>
              <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto mt-10">
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
                className={`w-[90%] flex flex-col items-center justify-center pt-4 gap-4 rounded-xl mx-auto`}
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
            </>
          )}
          {pageType === "hooks" && (
            <>
              <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto mt-10">
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
                className={`w-[90%] flex flex-col items-center justify-center pt-4 gap-4 rounded-xl mx-auto`}
                ref={sizeRef}
              >
                <Implementation
                  implementation={data.implementation}
                  active={true}
                />
                <>
                  {data.component ? (
                    <>
                      <h1 className="text-xl font-medium text-textPrimary w-full mt-10">
                        Example
                      </h1>
                      <div className="w-full border-[1px] border-slate-200 dark:border-neutral-900  mt-6 rounded-xl mx-auto relative overflow-hidden">
                        {/* EDITOR */}
                        <div className="w-full overflow-x-auto py-10 flex justify-center @container">
                          {data.component}
                        </div>
                        {/* BACKGROUND */}
                        {theme ? (
                          <></>
                        ) : (
                          <div className="rounded-xl w-full h-full overflow-hidden absolute inset-0 -z-10 size-full bg-white "></div>
                        )}
                      </div>
                    </>
                  ) : null}
                </>
              </div>
            </>
          )}
        </div>
      ) : (
        router.push("/")
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
