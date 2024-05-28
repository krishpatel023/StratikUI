import { BundledLanguage } from "shiki/bundle/web";
import { URL } from "url";

export interface DataDescription {
  name: string;
  description: string;
  implementation: ImplementationNode[];
  component: React.JSX.Element | null;
  version_included: string;
  display: boolean;
}
export type TechnologiesUsed =
  | "tailwind-css"
  | "framer-motion"
  | "twMerge"
  | "uuid";

export type CodeBlock = {
  code: string;
  language: BundledLanguage;
};

export type Code = {
  name: string;
  content: CodeBlock[];
};

export type InspirationObject = {
  name: string;
  link: string;
  message: string;
};

export type PropertiesObject = {
  name: string;
  description?: string;
  dimensions: number[];
  data: string[][];
};

export type ImplementationNode =
  | {
      type: "code";
      content: Code[];
    }
  | {
      type: "inspiration";
      content: InspirationObject;
    }
  | {
      type: "technology_used";
      content: TechnologiesUsed[];
    }
  | {
      type: "bash";
      content: Code[];
    }
  | {
      type: "properties";
      content: PropertiesObject;
    };

export interface FileData {
  name: string;
  content: FileData[] | DataDescription;
  type: "category" | "class" | "basic";
  version?: string;
  display: boolean;
}

export type IconProps = React.HTMLAttributes<SVGElement>;
