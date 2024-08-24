"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";

const CodeBlock = dynamic(() => import("@/components/mdx/Code").then((mod) => mod.CodeBlock), {
  loading: () => <Skeleton className="min-h-60 min-w-full rounded-lg" />,
  ssr: false,
});

import ResizableDisplay from "@/components/mdx/ResizableDisplay";

export { CodeBlock, ResizableDisplay };
