// mdx.d.ts
declare module "*.mdx" {
  import { ComponentType } from "react";

  export const Data: {
    name: string;
    tags: string[];
    description: string;
    version_included: string;
    id: string;
    display: boolean;
  };
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
