import { DataDescription, ImplementationNode } from "@/utils/constants";
import Helper from "./Helper";

const CodeTsx: string = `import { useEffect, useState } from "react";

export default function useClipboard() {
  const copy = async (text: string, callback?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      if (callback) callback();
    } catch (err) {
      console.error("Failed to write to clipboard", err);
    }
  };

  const read = async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (err) {
      console.error("Failed to read clipboard contents", err);
    }
  };

  return {
    copy,
    read,
  };
}`;

const CodeJsx: string = `import { useEffect, useState } from "react";

export default function useClipboard() {
  const copy = async (text, callback) => {
    try {
      await navigator.clipboard.writeText(text);
      if (callback) callback();
    } catch (err) {
      console.error("Failed to write to clipboard", err);
    }
  };

  const read = async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (err) {
      console.error("Failed to read clipboard contents", err);
    }
  };

  return {
    copy,
    read,
  };
}`;

const String = `import { useState } from "react";

export default function Helper() {
  const { copy, read } = useClipboard();

  const [value, setValue] = useState("Hello, World!");

  const handleCopy = () => {
    copy("Hello, World!");
  };

  const handleRead = async () => {
    const text = await read();
    if (text) setValue(text);
  };

  return (
    <div className="dark:text-white flex flex-col justify-center items-center gap-8 px-8">
      <div className="flex gap-4">
        <Button onClick={handleCopy}>Copy</Button>
        <Button onClick={handleRead}>Read</Button>
      </div>

      <h1 className="text-2xl underline">Coppied Value</h1>
      <p>{value}</p>
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useClipboard",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: String },
          { language: "jsx", code: String },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "useClipboard",
  description:
    "The useClipboard hook makes it easy to use clipboard with its two functions: copy and read.",
  implementation: Implementation,
  component: <Helper />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
