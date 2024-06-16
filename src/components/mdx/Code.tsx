"use client";

import { ReactNode, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Icons } from "@/utils/icons";
import StringCleaner from "@/scripts/StringCleaner";
import CodeHighlight from "../ui/CodeHighlight";
import { Code } from "@/utils/constants";
import { BundledLanguage } from "shiki/bundle/web";

export const CodeBlock = ({ children }: { children: ReactNode }) => {
  const processCodeBlocks = (codeBlocks: ReactNode[]): Code[] => {
    const result: Code[] = [];
    const codeBlocksByName: { [key: string]: Code } = {};

    codeBlocks.forEach((codeBlock) => {
      const { props } = codeBlock as {
        props: { language: string; children: ReactNode };
      };
      const { language, children } = props;
      const name = language.split("|").pop()?.replace(/"/g, "") || "";

      if (!codeBlocksByName[name]) {
        codeBlocksByName[name] = { name, content: [] };
        result.push(codeBlocksByName[name]);
      }

      const code = (
        children as { props: { children: string } }
      ).props.children.replace(/\\n$/, "");
      const lang = language.split("|")[0] as BundledLanguage;
      codeBlocksByName[name].content.push({ language: lang, code });
    });

    return result;
  };

  const result = processCodeBlocks(
    Array.isArray(children) ? children : [children]
  );

  return <>{result ? <CodeDisplay codeArray={result} /> : null}</>;
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
        <div className="w-full border-[2px] border-slate-100 dark:border-neutral-900/70 rounded-lg text-foreground p-0">
          {/* TASKBAR */}
          <div className="w-full h-8 flex justify-between items-center mt-2">
            {/* BUTTONS */}

            <div className="hidden md:flex gap-2 px-4 h-full">
              {codeArray?.map((item, i) => (
                <button
                  key={i}
                  className={
                    activeCode === i
                      ? "text-sm h-full px-4 py-1 rounded-t-md dark:bg-neutral-900/70 bg-gray-50 border-t-2 border-x-2 dark:border-neutral-900 border-slate-100"
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
                <SelectContent className="bg-background text-foreground">
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
                <button className="rounded   text-green-700 dark:text-green-400 px-2">
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
