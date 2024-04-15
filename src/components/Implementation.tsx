"use client";

import {
  Code,
  ImplementationNode,
  InspirationObject,
  TechnologiesUsed,
} from "@/utils/constants";
import { Icons } from "@/utils/icons";
import { Fragment, useEffect, useState } from "react";

// -----------------
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import StringCleaner from "@/scripts/StringCleaner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
//------------------
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
          <div key={i} className="flex gap-4 w-[90%] mx-auto mt-6">
            <div className="w-6">
              <p className="text-accent h-6 w-6 mt-1 text-center bg-accentLight rounded-full border-[1px] border-accent">
                {i + 1}
              </p>
              {implementation.length - 1 > i && (
                <div className="w-[1px] h-[calc(100%)] bg-accent mx-auto opacity-60"></div>
              )}
            </div>
            <div className="w-[calc(100%-2.5rem)]">
              {item.type === "technology_used" && (
                <Technology_Used techUsed={item.content} />
              )}
              {item.type === "code" && <CodeDisplay codeArray={item.content} />}
              {/* {item.type === "bash" &&
                typeof item.content === "string" &&
                !Array.isArray(item.content) && (
                  <Bash codestring={item.content} />
                )} */}
              {item.type === "inspiration" && (
                <Inspiration data={item.content as InspirationObject} />
              )}
            </div>
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

function CodeBlock({ codestring }: { codestring: string }) {
  SyntaxHighlighter.registerLanguage("jsx", jsx);

  return (
    <div className="w-full">
      <SyntaxHighlighter
        language="jsx"
        style={atomDark}
        customStyle={{
          width: "100",
          backgroundColor: "transparent",
          borderRadius: "0px",
        }}
        showLineNumbers
        className={`scrollbar-horizontal scrollbar-vertical w-full h-full`}
      >
        {StringCleaner(codestring)}
      </SyntaxHighlighter>
    </div>
  );
}

const CodeDisplay = ({ codeArray }: { codeArray: Code[] }) => {
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
  //   const index = getPreferenced("tsx");
  //   console.log("index", index);

  //   setActiveLanguage(index);
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
        <div className="w-full border-[1px] border-border rounded text-textPrimary p-0">
          {/* TASKBAR */}
          <div className="w-full h-6 flex justify-between items-center mt-2">
            {/* BUTTONS */}

            <div className="h-full flex gap-4 px-4">
              {codeArray?.map((item, i) => (
                <div className="" key={i}>
                  <button className="text-sm" onClick={() => setActiveCode(i)}>
                    {item.name}
                  </button>
                  <div
                    className={`min-w-full min-h-[0.125rem] rounded-t-md ${activeCode === i ? "bg-accent" : ""}`}
                  ></div>
                </div>
              ))}
            </div>
            {/* <div>

          </div> */}
            {/* OPERATOR */}
            <div className="px-4 flex gap-4">
              <Select>
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
                      <SelectItem
                        key={i}
                        value={item.language}
                        onClick={() => setActiveLanguage(i)}
                      >
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
            <CodeBlock
              codestring={codeArray[activeCode].content[activeLanguage].code}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

function Bash({ codestring }: { codestring: string }) {
  SyntaxHighlighter.registerLanguage("bash", bash);

  const [btnClick, setBtnClick] = useState(false);
  const handleCopy = () => {
    if (!codestring) return;
    navigator.clipboard.writeText(codestring);
    setBtnClick(true);
    const time = setTimeout(handleCopyBtn, 1000);
  };

  function handleCopyBtn() {
    setBtnClick(false);
  }

  return (
    <div className="w-full">
      <h1 className="text-lg font-medium text-textPrimary">Install</h1>
      <div className="relative w-full">
        <SyntaxHighlighter
          language="bash"
          style={atomDark}
          customStyle={{ width: "100", height: "100" }}
          wrapLongLines
          className={"scrollbar-horizontal scrollbar-vertical"}
        >
          {codestring}
        </SyntaxHighlighter>
        {btnClick ? (
          <button className="absolute right-4 top-4 rounded border-[1px] border-green-400  p-2 text-green-400">
            <Icons.tick />
          </button>
        ) : (
          <button
            className="absolute right-4 top-3 rounded border-[1px] border-white  p-2 text-white"
            onClick={handleCopy}
          >
            <Icons.copy />
          </button>
        )}
      </div>
    </div>
  );
}

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
