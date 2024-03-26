import { URL } from "url";

export interface DataDescription {
  name: string;
  description: string;
  implementation: ImplementationNode[];
  component: React.JSX.Element;
  version_included: string;
  display: boolean;
}
export type TechnologiesUsed = "tailwind-css" | "framer-motion";
export type InspirationObject = {
  name: string;
  link: string;
  message: string;
};
export interface ImplementationNode {
  type: "bash" | "code" | "technology_used" | "inspiration";
  title: string;
  content: string | TechnologiesUsed[] | URL | InspirationObject;
}

export interface FileData {
  name: string;
  content: FileData[] | DataDescription;
  type: "category" | "class" | "basic";
  version?: string;
  display: boolean;
}

export type IconProps = React.HTMLAttributes<SVGElement>;
