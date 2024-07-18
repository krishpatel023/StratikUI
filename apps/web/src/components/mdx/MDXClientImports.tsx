"use client";
import dynamic from "next/dynamic";

const CodeBlock = dynamic(
  () => import("@/components/mdx/Code").then((mod) => mod.CodeBlock),
  { ssr: false }
);

import { ResizableDisplay } from "@/components/mdx/ResizableDisplay";

export { CodeBlock, ResizableDisplay };
