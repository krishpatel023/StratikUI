const CodeBlock = dynamic(
  () => import("@/components/mdx/Code").then((mod) => mod.CodeBlock),
  { ssr: false }
);
import { ResizableDisplay } from "@/components/mdx/ResizableDisplay";
import { Implementation } from "@/components/mdx/Implementation";
import { convertToDashed } from "@/utils/utils";
import { DefaultDisplay as Display } from "./DefaultDisplay";
import { HeaderDefault } from "./HeaderToggle";
import dynamic from "next/dynamic";

export {
  CodeBlock,
  ResizableDisplay,
  Implementation,
  convertToDashed,
  HeaderDefault,
  Display,
};
