// mdx.d.ts
declare module "*.mdx" {
  import { ComponentType } from "react";

  export const data: {
    title: string;
    tags: string[];
    description: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
