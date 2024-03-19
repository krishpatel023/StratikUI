"use client";

import {
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
              <p className="text-accent h-6 w-6 mt-1 text-center bg-blue-100 rounded-full border-[1px] border-accent">
                {i + 1}
              </p>
              {implementation.length - 1 > i && (
                <div className="w-[1px] h-[calc(100%)] bg-accent mx-auto opacity-60"></div>
              )}
            </div>
            <div className="w-[calc(100%-2.5rem)]">
              {item.type === "technology_used" &&
                Array.isArray(item.content) && (
                  <Technology_Used techUsed={item.content} />
                )}
              {item.type === "code" && typeof item.content === "string" && (
                <CodeBlock codestring={item.content} />
              )}
              {item.type === "bash" &&
                typeof item.content === "string" &&
                !Array.isArray(item.content) && (
                  <Bash codestring={item.content} />
                )}
              {item.type === "inspiration" &&
                typeof item.content !== "string" &&
                !Array.isArray(item.content) && (
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
                className="flex justify-start items-center gap-2 text-sm"
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

  //Expansion
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full">
      <h1 className="text-lg font-medium text-textPrimary">Code Block</h1>
      <div className="w-full relative">
        <SyntaxHighlighter
          language="jsx"
          style={atomDark}
          customStyle={{ width: "100" }}
          showLineNumbers
          className={`scrollbar-horizontal w-full ${expanded ? "h-full" : "h-80"}`}
        >
          {codestring}
        </SyntaxHighlighter>
        {btnClick ? (
          <button className="absolute right-4 top-6 rounded border-[1px] border-green-400  p-2 text-green-400">
            <Icons.tick />
          </button>
        ) : (
          <button
            className="absolute right-4 top-6 rounded border-[1px] border-textComplementary  p-2 text-textComplementary"
            onClick={handleCopy}
          >
            <Icons.copy />
          </button>
        )}
        <div
          className={`absolute w-full h-full flex justify-center pt-52 z-100 bg-gradient-to-b from-gray-900/40 to-slate-50/20 top-0 ${expanded ? "hidden" : ""}`}
        >
          <button
            onClick={handleExpand}
            className="px-4 h-10 border-2 border-accent rounded bg-accent text-textComplementary"
          >
            Expand
          </button>
        </div>
      </div>
    </div>
  );
}

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
          className={"scrollbar-horizontal"}
        >
          {codestring}
        </SyntaxHighlighter>
        {btnClick ? (
          <button className="absolute right-4 top-4 rounded border-[1px] border-green-400  p-2 text-green-400">
            <Icons.tick />
          </button>
        ) : (
          <button
            className="absolute right-4 top-3 rounded border-[1px] border-textComplementary  p-2 text-textComplementary"
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
