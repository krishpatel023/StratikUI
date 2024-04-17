"use client";

import {
  Code,
  ImplementationNode,
  InspirationObject,
  TechnologiesUsed,
} from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { Fragment, useState } from "react";

import StringCleaner from "@/scripts/StringCleaner";
import CodeHighlight from "./ui/CodeHighlight";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

export default function Implementation({
  implementation,
  active,
}: {
  implementation: ImplementationNode[];
  active: boolean;
}) {
  return (
    <>
      {implementation &&
        active &&
        implementation.map((item, i) => (
          <div key={i} className="flex gap-4 w-full mx-auto mt-6">
            {item.type === "technology_used" && (
              <Technology_Used techUsed={item.content} />
            )}
            {item.type === "code" && <CodeDisplay codeArray={item.content} />}
            {item.type === "bash" && (
              <CodeDisplay codeArray={item.content} withCounter={false} />
            )}
            {item.type === "inspiration" && (
              <Inspiration data={item.content as InspirationObject} />
            )}
          </div>
        ))}
    </>
  );
}

const Technology_Used = ({ techUsed }: { techUsed: TechnologiesUsed[] }) => {
  const TechData = {
    "tailwind-css": {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      logo: <Icons.tailwindcss className="w-6 h-6" />,
    },
    "framer-motion": {
      name: "Framer Motion",
      link: "https://www.framer.com/motion/",
      logo: <Icons.framerMotion className="w-4 h-4" />,
    },
    twMerge: {
      name: "Tailwind Merge",
      link: "https://github.com/dcastil/tailwind-merge",
      logo: <Icons.twMerge className="w-8 h-8" />,
    },
  };
  return (
    <div>
      <h1 className="text-lg font-medium text-textPrimary">Technology Used</h1>
      <div className="flex justify-start gap-8 mt-2 flex-wrap">
        {techUsed &&
          techUsed.map((item, i) => (
            <Fragment key={i}>
              <a
                href={TechData[item].link}
                target="_blank"
                className="flex justify-start items-center gap-2 text-sm text-textPrimary"
                rel="nofollow"
              >
                {TechData[item].logo}
                {TechData[item].name}
              </a>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

const CodeDisplay = ({
  codeArray,
  withCounter = true,
}: {
  codeArray: Code[];
  withCounter?: boolean;
}) => {
  const [activeCode, setActiveCode] = useState<number>(0);
  const [activeLanguage, setActiveLanguage] = useState<number>(0);

  const [btnClick, setBtnClick] = useState(false);
  const handleCopy = () => {
    if (!codeArray[activeCode].content[activeLanguage].code) return;
    navigator.clipboard.writeText(
      codeArray[activeCode].content[activeLanguage].code
    );
    setBtnClick(true);
    const time = setTimeout(handleCopyBtn, 1000);
  };

  function handleCopyBtn() {
    setBtnClick(false);
  }
  // useEffect(() => {
  //   // const index = getPreferenced("tsx");
  //   // console.log("index", index);

  //   setActiveLanguage(0);
  // }, [activeCode]);

  // const getPreferenced = (pref: string) => {
  //   const index = activeCode ? activeCode : 0;
  //   // if (index === 0) return null;
  //   for (let i = 0; i < codeArray[index].content.length; i++) {
  //     if (pref === codeArray[index].content[i].language) {
  //       return i;
  //     }
  //   }
  //   return 0;
  // };

  return (
    <>
      {activeCode >= 0 && activeLanguage >= 0 ? (
        <div className="w-full border-[2px] border-slate-100 dark:border-neutral-900 rounded text-textPrimary p-0">
          {/* TASKBAR */}
          <div className="w-full h-8 flex justify-between items-center mt-2">
            {/* BUTTONS */}

            <div className="hidden md:flex gap-2 px-4 h-full">
              {codeArray?.map((item, i) => (
                <button
                  key={i}
                  className={
                    activeCode === i
                      ? "text-sm h-full px-4 py-1 rounded-t-md dark:bg-neutral-900 bg-slate-100 border-t-2 border-x-2 dark:border-neutral-800 border-slate-200"
                      : "text-sm h-full px-4 py-1"
                  }
                  onClick={() => setActiveCode(i)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="block md:hidden h-full">
              <Select
                onValueChange={(e) => {
                  setActiveCode(parseInt(e));
                }}
              >
                <SelectTrigger className="h-6 gap-2 border-none">
                  <SelectValue placeholder={codeArray[activeCode].name} />
                </SelectTrigger>
                <SelectContent className="bg-background text-textPrimary">
                  <SelectGroup>
                    <SelectLabel>File</SelectLabel>
                    {codeArray?.map((item, i) => (
                      <SelectItem key={i} value={`${i}`}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* OPERATOR */}
            <div className="px-2 sm:px-4 flex pb-2 gap-1">
              <Select
                onValueChange={(e) => {
                  setActiveLanguage(parseInt(e));
                }}
              >
                <SelectTrigger className="h-6 gap-2 border-none">
                  <SelectValue
                    placeholder={
                      codeArray[activeCode].content[activeLanguage].language
                    }
                  />
                </SelectTrigger>
                <SelectContent className="bg-background text-textPrimary">
                  <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    {codeArray[activeCode].content.map((item, i) => (
                      <SelectItem key={i} value={`${i}`}>
                        {item.language}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {btnClick ? (
                <button className="rounded text-green-400 px-2">
                  <Icons.tick className="w-4 h-4" />
                </button>
              ) : (
                <button
                  className="rounded  text-textPrimary text-sm px-2"
                  onClick={handleCopy}
                >
                  <Icons.copy className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          {/* CONTENT */}
          <div className="w-full">
            <CodeHighlight
              code={StringCleaner(
                codeArray[activeCode].content[activeLanguage].code
              )}
              lang={codeArray[activeCode].content[activeLanguage].language}
              withCounter={withCounter}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

function Inspiration({ data }: { data: InspirationObject }) {
  return (
    <div className="w-full flex justify-start items-center gap-2">
      <h1 className="text-lg font-medium text-textPrimary">{data.message}</h1>
      <a
        href={data.link}
        target="_blank"
        rel="nofollow"
        className="text-accent flex gap-2 items-center justify-center font-semibold text-lg"
      >
        {data.name}
        <Icons.arrow className="rotate-45" />
      </a>
    </div>
  );
}
