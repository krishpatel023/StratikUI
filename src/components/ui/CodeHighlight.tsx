"use client";

import { codeToHtml } from "shiki/bundle/web";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import type { BundledLanguage, BundledTheme } from "shiki";
import { useEffect, useState } from "react";

type Props = {
  code: string;
  lang?: BundledLanguage;
  withCounter?: boolean;
  //   theme?: BundledTheme;
  //   filename?: string;
};
export default function CodeHighlight({
  code,
  lang = "javascript",
  withCounter = true,
}: Props) {
  const [html, setHtml] = useState("");
  useEffect(() => {
    const callFunc = async () => {
      const val = await getHtml();
      setHtml(val);
    };

    callFunc();
  }, [code]);

  async function getHtml() {
    return await codeToHtml(code, {
      lang,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [transformerNotationHighlight(), transformerNotationDiff()],
    });
  }
  return (
    <div className="w-full mx-auto overflow-hidden">
      <div
        className={`${withCounter ? "with-counter" : ""} text-sm [&>pre]:overflow-x-auto  dark:[&>pre]:!bg-neutral-900 [&>pre]:!bg-slate-100  [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full`}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
