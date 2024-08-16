"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";

import {
  Section,
  Select,
  SelectHeader,
  SelectItem,
} from "@/components/ui/Select";
import { useInternalState } from "@/hooks/useInternalState";
import { Icons } from "@/utils/icons";
import StringCleaner, { ColorPaletteSettings } from "@/utils/StringCleaner";
import { Button, Key } from "react-aria-components";
import { BundledLanguage } from "shiki/bundle/web";
import { twMerge } from "tailwind-merge";
import CodeHighlight from "../ui/CodeHighlight";
import { Tooltip, TooltipTrigger } from "../ui/Tooltip";
import { Skeleton } from "@/components/ui/Skeleton";

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
  themingOption: ["tailwind", "custom"],
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

      const extension = fullName.split(".").pop() || "";
      const name = fullName.split("." + extension)[0];

      const content = children as { props: { children: string } };
      if (typeof content.props.children !== "string") return;
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
  const {
    provider,
    language,
    setProvider,
    setLanguage,
    themingOption,
    setThemingOption,
  } = useInternalState();

  const [files, setFiles] = useState<CodeIndividual[]>([]);
  const [availableData, setAvailableData] = useState<AvailableDataProps>({
    providers: [],
    types: [],
  });

  const [activeProvider, setActiveProvider] =
    useState<CodeIndividual["provider"]>(provider);
  const [activeType, setActiveType] =
    useState<CodeIndividual["type"]>(language);
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
    return { providers, types };
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

  function changeData() {
    const filteredByProvider = filterByProvider(activeProvider, codeArray);
    const filteredByType = filterByType(activeType, filteredByProvider);
    setFiles(filteredByType);
    const activeFilePrev = filteredByType.find(
      (item) => item.name === activeFile.name
    );
    if (!filteredByType || filteredByType.length === 0) return;
    setActiveFile(activeFilePrev ? activeFilePrev : filteredByType[0]);
  }

  useEffect(() => {
    const availableData = getAvailableData();
    if (!availableData.providers.includes(provider))
      setActiveProvider(availableData.providers[0]);
    else setProvider(provider);
    if (!availableData.types.includes(language))
      setActiveType(availableData.types[0]);
    else setActiveType(language);
    changeData();
  }, [codeArray, provider, language]);

  useEffect(() => {
    changeData();
  }, [activeProvider, activeType, codeArray, provider, language]);

  // Mobile version toggle
  const [more, setMore] = useState<boolean>(false);

  function handleProviderChange(val: CodeIndividual["provider"]) {
    setActiveProvider(val);
    setProvider(val);
  }

  function handleTypeChange(val: CodeIndividual["type"]) {
    setActiveType(val);
    setLanguage(val);
  }

  function handleThemeChange(val: "tailwind" | "custom") {
    setThemingOption(val);
    setActiveColorTheme(val);
  }

  const code = useMemo(
    () => StringCleaner(activeFile?.content, activeColorTheme),
    [activeFile?.content, activeColorTheme]
  );

  return (
    <div className="w-full border-[2px] border-slate-100 dark:border-neutral-900/70 rounded-lg text-foreground p-0">
      {/* TASKBAR */}
      <div className="w-full h-auto md:h-8 flex-col md:flex-row items-start flex justify-between md:items-center mt-2">
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
        {/* OPERATOR */}
        <div className="md:px-2 px-4 flex flex-col-reverse md:flex-row w-full items-start md:items-center md:w-max pb-2 gap-2">
          <div
            className={twMerge(
              "w-full md:flex gap-2 flex-row hidden",
              more && "flex flex-col md:flex-row"
            )}
          >
            <SelectComponent
              onChange={(val) => handleThemeChange(val as ColorPaletteSettings)}
              value={activeColorTheme}
              label="Color Theme"
              items={["custom", "tailwind"]}
              tooltipMessage="Select the color theme: custom means the custom colors that can be used to create your color palette, whereas tailwind means the default Tailwind colors."
              displayClassName="md:w-max"
            />
            <SelectComponent
              onChange={(val) =>
                handleProviderChange(val as CodeIndividual["provider"])
              }
              value={activeProvider}
              label="Provider"
              items={availableData.providers}
              tooltipMessage="Select the provider: default means the default JSX and TSX, whereas react_aria means the React Aria components."
              displayClassName="md:w-max"
            />
            <SelectComponent
              onChange={(val) =>
                handleTypeChange(val as CodeIndividual["type"])
              }
              value={activeType}
              label="Language"
              items={availableData.types}
              tooltipMessage="Select the language: js means JavaScript, whereas ts means TypeScript."
              displayClassName="md:w-max"
            />
          </div>
          <Button
            className="md:hidden text-sm text-start ml-1 underline outline-none pressed:scale-95 transition-all duration-300"
            onPress={() => setMore(!more)}
          >
            {more ? "Hide Options" : "Additional Options"}
          </Button>
          <div className="gap-2 flex w-full">
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
              displayClassName="md:hidden"
              className="w-40"
            />
            <CopyButton copyText={activeFile?.content} />
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="w-full">
        {code && code.length > 0 && (
          <CodeHighlight
            code={code}
            lang={activeFile?.language}
            withCounter={withCounter}
          />
        )}
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
  displayClassName,
  className,
}: {
  items: string[];
  label: string;
  header?: string;
  onChange: (value: string) => void;
  value: string;
  tooltipMessage: string;
  displayClassName?: string;
  className?: string;
}) {
  return (
    <TooltipTrigger delay={0}>
      <Select
        aria-label={label}
        selectedKey={value}
        onSelectionChange={(val: Key) => onChange(val.toString())}
        className={twMerge(
          "w-max text-sm p-0 px-0 py-0 focus-within:outline-none",
          className
        )}
        displayClassName={twMerge("", displayClassName)}
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
    <TooltipTrigger delay={300}>
      <Button
        className={twMerge(
          "rounded text-sm w-7",
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
