"use client";

import { ReactNode, useEffect, useState } from "react";

import {
  Section,
  Select,
  SelectHeader,
  SelectItem,
} from "@/components/ui/Select";
import { Icons } from "@/utils/icons";
import StringCleaner, { ColorPaletteSettings } from "@/utils/StringCleaner";
import { Button, Key } from "react-aria-components";
import { BundledLanguage } from "shiki/bundle/web";
import { twMerge } from "tailwind-merge";
import CodeHighlight from "../ui/CodeHighlight";
import { Tooltip, TooltipTrigger } from "../ui/Tooltip";

export interface CodeIndividual {
  provider: "default" | "react_aria";
  type: "js" | "ts";
  name: string;
  language: BundledLanguage;
  content: string;
}

const ALLOWED_NOMENCLATURE = {
  provider: ["default", "react_aria"],
  type: ["js", "ts"],
};

export function CodeBlock({ children }: { children: ReactNode }) {
  function checkNomenclature(provider: string, type: string): boolean {
    if (ALLOWED_NOMENCLATURE.provider.includes(provider)) {
      if (ALLOWED_NOMENCLATURE.type.includes(type)) {
        return true;
      }
    }
    return false;
  }

  function processCodeBlock(blocks: ReactNode[]): CodeIndividual[] {
    console.log("blocks", blocks);
    let result: CodeIndividual[] = [];
    blocks.forEach((block) => {
      const { props } = block as {
        props: { language: string; children: ReactNode };
      };
      const { language, children } = props;

      const languageArray = language.split("|");
      const provider = languageArray[0];
      const type = languageArray[1];
      const fullName = languageArray[2];

      const name = fullName.split(".")[0];
      const extension = fullName.split(".")[1];

      const content = children as { props: { children: string } };
      const code = content.props.children?.replace(/\\n$/, "");

      if (!checkNomenclature(provider, type)) return;

      result.push({
        provider: provider as CodeIndividual["provider"],
        type: type as CodeIndividual["type"],
        name: name,
        language: extension as BundledLanguage,
        content: code,
      });
    });
    return result;
  }

  const result = processCodeBlock(
    Array.isArray(children) ? children : ([children] as ReactNode[])
  );

  console.log("result", result);

  return <>{result && <CodeDisplay codeArray={result} />}</>;
}

interface AvailableDataProps {
  providers: CodeIndividual["provider"][];
  types: CodeIndividual["type"][];
}

function CodeDisplay({
  codeArray,
  withCounter = true,
}: {
  codeArray: CodeIndividual[];
  withCounter?: boolean;
}) {
  // Link this to the hook
  const DEFAULT_PROVIDER = "default";
  const DEFAULT_TYPE = "ts";

  const [files, setFiles] = useState<CodeIndividual[]>([]);
  const [availableData, setAvailableData] = useState<AvailableDataProps>({
    providers: [],
    types: [],
  });

  const [activeProvider, setActiveProvider] =
    useState<CodeIndividual["provider"]>(DEFAULT_PROVIDER);
  const [activeType, setActiveType] =
    useState<CodeIndividual["type"]>(DEFAULT_TYPE);
  const [activeFile, setActiveFile] = useState<CodeIndividual>(
    files[0] || { name: "", content: [], provider: "", type: "", language: "" }
  );
  const [activeColorTheme, setActiveColorTheme] =
    useState<ColorPaletteSettings>("tailwind");

  function getAvailableData() {
    const providers = Array.from(
      new Set(codeArray.map((item) => item.provider))
    );
    const types = Array.from(new Set(codeArray.map((item) => item.type)));
    setAvailableData({
      providers,
      types,
    });
  }

  function filterByProvider(
    provider: CodeIndividual["provider"],
    files: CodeIndividual[]
  ) {
    return files.filter((item) => item.provider === provider);
  }

  function filterByType(type: CodeIndividual["type"], files: CodeIndividual[]) {
    return files.filter((item) => item.type === type);
  }

  useEffect(() => {
    getAvailableData();
    const filteredByProvider = filterByProvider(activeProvider, codeArray);
    const filteredByType = filterByType(activeType, filteredByProvider);
    setFiles(filteredByType);
    const activeFilePrev = filteredByType.find(
      (item) => item.name === activeFile.name
    );
    setActiveFile(activeFilePrev || filteredByType[0]);
    console.log("files", filteredByType);
  }, [activeProvider, activeType]);

  return (
    <div>
      <div className="w-full border-[2px] border-slate-100 dark:border-neutral-900/70 rounded-lg text-foreground p-0">
        {/* TASKBAR */}
        <div className="w-full h-8 flex justify-between items-center mt-2">
          {/* BUTTONS */}

          <div className="hidden md:flex gap-2 px-4 h-full">
            {files?.map((file, i) => (
              <button
                key={i}
                className={
                  activeFile.name === file.name
                    ? "text-sm h-full px-4 py-1 rounded-t-md dark:bg-neutral-900/70 bg-gray-50 border-t-2 border-x-2 dark:border-neutral-900 border-slate-100"
                    : "text-sm h-full px-4 py-1"
                }
                onClick={() => setActiveFile(file)}
              >
                {file.name}
              </button>
            ))}
          </div>
          <div className="md:hidden flex pb-2 mx-2">
            <SelectComponent
              onChange={(val) =>
                setActiveFile(
                  files.find((item) => item.name === val) as CodeIndividual
                )
              }
              value={activeFile.name}
              label="File"
              items={files.map((item) => item.name)}
              tooltipMessage="Select the file"
            />
          </div>
          {/* OPERATOR */}
          <div className="px-2 sm:px-4 flex pb-2 gap-2">
            <SelectComponent
              onChange={(val) =>
                setActiveColorTheme(val as ColorPaletteSettings)
              }
              value={activeColorTheme}
              label="Color Theme"
              items={["custom", "tailwind"]}
              tooltipMessage="Select the color theme: custom means the custom colors that can be used to create your color palette, whereas tailwind means the default Tailwind colors."
            />
            <SelectComponent
              onChange={(val) =>
                setActiveProvider(val as CodeIndividual["provider"])
              }
              value={activeProvider}
              label="Provider"
              items={availableData.providers}
              tooltipMessage="Select the provider: default means the default JSX and TSX, whereas react_aria means the React Aria components."
            />
            <SelectComponent
              onChange={(val) => setActiveType(val as CodeIndividual["type"])}
              value={activeType}
              label="Language"
              items={availableData.types}
              tooltipMessage="Select the language: js means JavaScript, whereas ts means TypeScript."
            />
            <CopyButton copyText="Hello" />
          </div>
        </div>
        {/* CONTENT */}
        <div className="w-full">
          <CodeHighlight
            // code={StringCleaner(activeFile.content)}
            code={StringCleaner(activeFile.content, activeColorTheme)}
            lang={activeFile.language}
            withCounter={withCounter}
          />
        </div>
      </div>
    </div>
  );
}

function SelectComponent({
  items,
  label,
  header,
  onChange,
  value,
  tooltipMessage,
}: {
  items: string[];
  label: string;
  header?: string;
  onChange: (value: string) => void;
  value: string;
  tooltipMessage: string;
}) {
  return (
    <TooltipTrigger delay={0}>
      <Select
        aria-label={label}
        selectedKey={value}
        onSelectionChange={(val: Key) => onChange(val.toString())}
        className="w-max text-sm p-0 px-0 py-0 focus-within:outline-none green-500"
      >
        <Section>
          <SelectHeader>{label}</SelectHeader>
          {header && <SelectHeader>{header}</SelectHeader>}
          {items.map((item, i) => (
            <SelectItem id={item} key={i} textValue={item}>
              {item.replaceAll("_", " ")}
            </SelectItem>
          ))}
        </Section>
      </Select>
      {tooltipMessage && (
        <Tooltip className="max-w-60">{tooltipMessage}</Tooltip>
      )}
    </TooltipTrigger>
  );
}

function CopyButton({ copyText }: { copyText: string }) {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleCopy = () => {
    if (!copyText) return;
    navigator.clipboard.writeText(copyText);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <TooltipTrigger delay={0} isOpen={clicked ? true : undefined}>
      <Button
        className={twMerge(
          "rounded text-sm w-7 ml-3",
          clicked ? "text-green-700 dark:text-green-400" : "text-foreground"
        )}
        onPress={!clicked ? handleCopy : undefined}
      >
        {clicked ? (
          <Icons.tick className="w-4 h-4" />
        ) : (
          <Icons.copy className="w-5 h-5" />
        )}
      </Button>
      <Tooltip> {clicked ? "Copied!" : "Copy"}</Tooltip>
    </TooltipTrigger>
  );
}
