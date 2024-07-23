import { SidebarProps } from "../Sidebar";

const sidebar: SidebarProps = [
  {
    type: "title",
    name: "hooks",
    flag: "default",
    children: [
      {
        type: "heading",
        name: "useArtificialLoader",
        link: "docs/hooks/useArtificialLoader",
        version_included: "0.3.0",
        flag: "default",
        children: [
          {
            type: "sub-heading",
            name: "useArtificialLoader",
            description:
              "A hook that simulates a loading state for a component.",
            tags: ["hooks", " artificial", " loader"],
            link: "docs/hooks/useArtificialLoader#useartificialloader",
            version_included: "0.3.0",
            flag: "default",
          },
        ],
      },
    ],
  },
];
export default sidebar;
