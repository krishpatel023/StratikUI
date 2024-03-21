import { useEffect } from "react";
import { DataDescription, ImplementationNode } from "@/utils/constants";

function Hero_1() {
  return <div className="bg-blue-600 rounded text-white py-1 px-4">Click</div>;
}

const ButtonCode: string = `"use client";
import { DataDescription } from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { DEFAULT_MODE } from "@/utils/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Implementation from "./Implementation";

export default function Component({ data }: { data: DataDescription }) {
  const [mode, setMode] = useState<boolean>(DEFAULT_MODE);
  const [active, setActive] = useState<boolean>(false);
  const [screen, setScreen] = useState<"sm" | "md" | "lg">("sm");

  const router = useRouter();

  return (
    <>
      {data ? (
        <>
          <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto">
            <h1 className="text-xl font-medium text-textPrimary">
              {data.name}
            </h1>
            <p className="text-textSecondary font-normal text-base">
              {data.description}
            </p>
          </div>
          <div className="w-[90%] flex flex-col items-center border-[1px] border-border pt-4 gap-4 rounded-xl mx-auto">
            <div className="w-[95%] h-12 flex justify-between items-center ">
              <div>
                <button
                  onClick={() => setMode(!mode)}
                  className="h-12 w-10 rounded border-[1px] border-border flex justify-center items-center"
                >
                  {mode ? (
                    <Icons.moon className="w-6 h-6" />
                  ) : (
                    <Icons.sun className="w-6 h-6" />
                  )}
                </button>
              </div>
              <div className="flex justify-center gap-4 items-center">
                <button className="h-12 w-10 rounded border-[1px] border-border flex justify-center items-center">
                  <Icons.mobile className="w-6 h-6" />
                </button>
                <button className="h-12 w-10 rounded border-[1px] border-border flex justify-center items-center">
                  <Icons.tablet className="w-[1.25rem] h-6 text-black" />
                </button>
                <button className="h-12 w-10 rounded border-[1px] border-border flex justify-center items-center">
                  <Icons.desktop className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="w-full py-10 border-t-[1px] border-border relative">
              {/* EDITOR */}
              <div className="h-full flex justify-center items-center">
                {data.component}
              </div>
              {mode ? (
                <div className="bg-slate-950 -z-10 absolute bottom-0 left-0 right-0 top-0 rounded-b-xl bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              ) : (
                <div className="absolute inset-0 -z-10 rounded-b-xl h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              )}
            </div>
          </div>
          <div className="w-[90%] flex flex-col py-4 gap-4 rounded-xl mx-auto items-start">
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
          <div className="w-[90%] flex flex-col py-4 gap-4 mx-auto">
            <Implementation
              implementation={data.implementation}
              active={active}
            />
          </div>
        </>
      ) : (
        router.push("/")
      )}
    </>
  );
}
`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    title: "Code",
    content: ButtonCode,
  },
];

const HeroData_1: DataDescription = {
  name: "Default Hero Section",
  description: "This is a default hero section",
  implementation: Implementation,
  component: Hero_1(),
  version_included: "0.0.0",
};
export default HeroData_1;
