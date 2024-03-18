export interface DataDescription {
  name: string;
  description: string;
  implementation: ImplementationNode[];
  component: React.JSX.Element;
  version_included: string;
}

export interface ImplementationNode {
  type: "bash" | "code" | "technology_used";
  title: string;
  content: any;
}

export interface FileData {
  name: string;
  content: FileData[] | DataDescription;
  type: "category" | "class" | "basic";
  version?: string;
}
