import * as GENERATED_SIDEBAR from "./generated/generated-sidebar";

export interface Sidebar_TitleProps {
  type: "title";
  name: string;
  flag: "hidden" | "default";
  children: Sidebar_HeadingProps[];
}

export interface Sidebar_HeadingProps {
  type: "heading";
  name: string;
  link: string;
  version_included: string;
  flag: "hidden" | "experimental" | "deprecated" | "beta" | "default";
  children: Sidebar_SubHeadingProps[];
}

export interface Sidebar_SubHeadingProps {
  type: "sub-heading";
  name: string;
  description: string;
  tags: string[];
  link: string;
  version_included: string;
  flag: "hidden" | "experimental" | "deprecated" | "beta" | "default";
}

export interface Sidebar_DefaultProps {
  type: "default";
  name: string;
  link: string;
}

export type SidebarProps = (Sidebar_TitleProps | Sidebar_DefaultProps)[];

const defaultSidebar: SidebarProps = [
  {
    type: "title",
    name: "Get Started",
    flag: "default",
    children: [
      {
        type: "heading",
        name: "Installation",
        link: "/installation",
        version_included: "1.0.0",
        flag: "default",
        children: [],
      },
      {
        type: "heading",
        name: "Utilities",
        link: "/get-started/utilities",
        version_included: "1.0.0",
        flag: "default",
        children: [],
      },
    ],
  },
];

const SidebarData: SidebarProps = [
  ...defaultSidebar,
  ...GENERATED_SIDEBAR.default,
];

export default SidebarData;
