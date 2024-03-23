"use client";
import { DataDescription } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { DEFAULT_MODE } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Implementation from "./Implementation";
import ResizableContainer from "./Resizable";
import { useTheme } from "@/hooks/Theme";
import { v4 } from "uuid";
export default function Component({ data }: { data: DataDescription }) {
  const { theme } = useTheme();
  const [componentUUID, setComponentUUID] = useState<string>();
  const [mode, setMode] = useState<boolean>(DEFAULT_MODE);
  const [active, setActive] = useState<boolean>(false);
  const [screen, setScreen] = useState<"sm" | "md" | "lg">("sm");

  const router = useRouter();
  const param = usePathname();
  var splitParams = param?.split("/");

  const sizeRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>();
  const [divWidth, setDivWidth] = useState<number>(0);

  useEffect(() => {
    setComponentUUID(v4());
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

  useEffect(() => {
    if (!mode) {
      document.getElementById("container")?.classList.remove("darkComponent");
      document
        .getElementById(`primitiveContainer${componentUUID}`)
        ?.classList.remove("darkComponent");
    } else {
      document.getElementById("container")?.classList.add("darkComponent");
      document
        .getElementById(`primitiveContainer${componentUUID}`)
        ?.classList.add("darkComponent");
    }
  }, [mode]);

  return (
    <>
      {data ? (
        <>
          <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto mt-10">
            <h1 className="text-xl font-medium text-textPrimary">
              {data.name}
            </h1>
            <p className="text-textSecondary font-normal text-base">
              {data.description}
            </p>
          </div>
          {splitParams[2] === "primitives" && (
            <>
              <div className="w-[90%] flex flex-col items-center border-[1px] border-border pt-4 gap-4 rounded-xl mx-auto">
                <div className="w-[95%] h-12 flex justify-between items-center ">
                  <div>
                    <button
                      onClick={() => setMode(!mode)}
                      className="h-12 w-10 rounded border-[1px] border-border flex justify-center items-center text-textPrimary"
                    >
                      {mode ? (
                        <Icons.moon className="w-6 h-6" />
                      ) : (
                        <Icons.sun className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  {/* <div className="flex justify-center gap-4 items-center">
                    <button
                      className={`h-12 w-10 rounded border-[1px] ${screen === "sm" ? "border-primary" : "border-border"} flex justify-center items-center text-textPrimary`}
                      onClick={() => setScreen("sm")}
                    >
                      <Icons.mobile className="w-6 h-6" />
                    </button>
                    <button
                      className={`h-12 w-10 rounded border-[1px] ${screen === "md" ? "border-primary" : "border-border"} flex justify-center items-center text-textPrimary  `}
                      onClick={() => setScreen("md")}
                    >
                      <Icons.tablet className="w-[1.25rem] h-6" />
                    </button>
                    <button
                      className={`h-12 w-10 rounded border-[1px] ${screen === "lg" ? "border-primary" : "border-border"} flex justify-center items-center text-textPrimary`}
                      onClick={() => setScreen("lg")}
                    >
                      <Icons.desktop className="w-6 h-6" />
                    </button>
                  </div> */}
                </div>
                <div
                  className="w-full py-10 border-t-[1px] border-border relative flex justify-center items-center"
                  // ref={sizeRef}
                >
                  {/* EDITOR */}
                  <div
                    className={`mx-auto ${DEFAULT_MODE ? "darkComponent" : ""}`}
                    id={`primitiveContainer${componentUUID}`}
                  >
                    {data.component}
                  </div>
                  {/* BACKGROUND */}
                  {theme ? (
                    <div className="bg-slate-950 -z-10 absolute bottom-0 left-0 right-0 top-0 rounded-b-xl bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  ) : (
                    <div className="bg-blue-100/60 -z-10 absolute bottom-0 left-0 right-0 top-0 rounded-b-xl bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  )}
                </div>
              </div>
            </>
          )}
          {splitParams[2] === "components" && (
            <div
              className="w-[90%] flex flex-col items-center pt-4 gap-4 rounded-xl mx-auto"
              ref={sizeRef}
            >
              <div className="w-full h-12 flex justify-between items-center ">
                <div>
                  <button
                    onClick={() => setMode(!mode)}
                    className="h-10 px-4 rounded border-[1px] border-border flex justify-center items-center gap-4 text-center text-textPrimary"
                  >
                    {mode ? (
                      <>
                        <Icons.moon className="w-6 h-6" /> Dark
                      </>
                    ) : (
                      <>
                        <Icons.sun className="w-6 h-6" /> Light
                      </>
                    )}
                  </button>
                </div>
              </div>
              {divWidth && divWidth !== 0 ? (
                <ResizableContainer
                  maxWidth={divWidth - 15}
                  minWidth={400}
                  initialWidth={0}
                >
                  {data.component}
                </ResizableContainer>
              ) : null}
            </div>
          )}
          <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto items-start mb-4">
            <button
              className="text-accent flex justify-center items-center gap-2 text-center"
              onClick={() => setActive(!active)}
            >
              {active ? (
                <>
                  <Icons.arrow className="-rotate-90" /> Hide Implementation
                </>
              ) : (
                <>
                  See Implementation <Icons.arrow className="rotate-90" />
                </>
              )}
            </button>
          </div>
          <Implementation
            implementation={data.implementation}
            active={active}
          />
        </>
      ) : (
        router.push("/")
      )}
    </>
  );
}
