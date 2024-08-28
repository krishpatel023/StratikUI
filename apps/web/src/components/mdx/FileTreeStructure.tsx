"use client";

import type { IconProps } from "@/utils/constants";
import { Fragment, useState } from "react";
import { Tooltip, TooltipTrigger } from "@/components/ui/Tooltip";
import { Button } from "react-aria-components";
import { twMerge } from "tailwind-merge";

type DataProps = FileProps | FolderProps;

interface FileProps {
  type: "file";
  name: string;
  tooltip?: string;
}

interface FolderProps {
  type: "folder";
  name: string;
  tooltip?: string;
  children?: DataProps[];
  defaultOpen?: boolean;
}

const Data: DataProps[] = [
  {
    type: "folder",
    name: "apps",
    defaultOpen: true,
    children: [
      {
        type: "folder",
        name: "registry",
        tooltip: "This folder contains the source code of all the components present in the Stratik UI Library",
        children: [
          {
            type: "folder",
            name: ".stratik-ui",
            tooltip: "This folder will generate after any generate script is executed",
            children: [
              {
                type: "file",
                name: "log.txt",
                tooltip:
                  "This file contains the generation logs. If any issue is found during the generation, it will be logged here. You can use it as a reference to debug any issue. For easy debugging, delete this file and run the generate script again so that it will only contain the required logs.",
              },
            ],
          },
          {
            type: "folder",
            name: "src",
            children: [
              {
                type: "folder",
                name: "app",
                children: [
                  {
                    type: "folder",
                    name: "playground",
                    tooltip:
                      "This folder contains the playground for the components where the display elements similar to the ones in the website are present so you can import and see how the component will look like.",
                    children: [
                      {
                        type: "file",
                        name: "page.tsx",
                        tooltip:
                          "Make sure to adjust the category accordingly. You can also add and test jsx components here by just adding the .jsx extension to the file name.",
                      },
                    ],
                  },
                  {
                    type: "file",
                    name: "globals.css",
                  },
                  {
                    type: "file",
                    name: "layout.tsx",
                  },
                  {
                    type: "file",
                    name: "page.tsx",
                    tooltip: "Just a welcome page for the playground",
                  },
                  {
                    type: "file",
                    name: "providers.tsx",
                    tooltip: "Contains theme provider and may contain other providers as well",
                  },
                ],
              },
              {
                type: "folder",
                name: "assets",
              },
              {
                type: "folder",
                name: "hooks",
                tooltip:
                  "This folder contains the custom hooks used in the registry and not the ones in the Stratik UI Library",
              },
              {
                type: "folder",
                name: "packages",
                tooltip:
                  "This folder contains every component in the library. It maintains a proper structure and naming convention for the components so that the generation scripts can work properly. The children here are the category the component belongs to - components, hooks, or primitives",
                children: [
                  {
                    type: "folder",
                    name: "components",
                    tooltip:
                      "This folder contains the components in the library. This folder contains the components like hero section, authentication, etc. Anything that is a combination of multiple primitives or is more complex than a primitive is kept here.",
                    children: [
                      {
                        type: "folder",
                        name: "authentication",
                        tooltip: "This folder contains the authentication components",
                        children: [
                          {
                            type: "folder",
                            name: "01",
                            tooltip: "This folder contains the authentication variant",
                            children: [
                              {
                                type: "folder",
                                name: "default-ts",
                                tooltip: "This folder contains the default authentication variant in TypeScript.",
                                children: [
                                  {
                                    type: "file",
                                    name: "authentication.tsx",
                                    tooltip: "This file contains the authentication component in TypeScript.",
                                  },
                                  {
                                    type: "file",
                                    name: "example.tsx",
                                    tooltip:
                                      "This file contains an example of the authentication component in TypeScript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "folder",
                                name: "default-js",
                                tooltip: "This folder contains the default authentication variant in Javascript.",
                                children: [
                                  {
                                    type: "file",
                                    name: "authentication.jsx",
                                    tooltip: "This file contains the authentication component in Javascript.",
                                  },
                                  {
                                    type: "file",
                                    name: "example.jsx",
                                    tooltip:
                                      "This file contains an example of the authentication component in Javascript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "folder",
                                name: "react-aria-ts",
                                tooltip:
                                  "This folder contains the react-aria version of the authentication variant in TypeScript. It will use all the react_aria primitives.",
                                children: [
                                  {
                                    type: "file",
                                    name: "authentication.tsx",
                                    tooltip:
                                      "This file contains the react-aria authentication component in TypeScript.",
                                  },
                                  {
                                    type: "file",
                                    name: "example.tsx",
                                    tooltip:
                                      "This file contains an example of the react-aria authentication component in TypeScript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "folder",
                                name: "react-aria-js",
                                tooltip:
                                  "This folder contains the react-aria version of the authentication variant in Javascript. It will use all the react_aria primitives.",
                                children: [
                                  {
                                    type: "file",
                                    name: "authentication.jsx",
                                    tooltip:
                                      "This file contains the react-aria authentication component in Javascript.",
                                  },
                                  {
                                    type: "file",
                                    name: "example.jsx",
                                    tooltip:
                                      "This file contains an example of the react-aria authentication component in Javascript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "file",
                                name: "docs.md",
                                tooltip:
                                  "This file contains the documentation for the authentication variant. If you have both the variants make sure only to include the common documentation in this file like the frontmatter mentioned below. You need to follow docs.md naming convention for the documentation to be generated properly.",
                              },
                              {
                                type: "file",
                                name: "docs-default.md",
                                tooltip:
                                  "Now only include the documentation that is only applicable to the default variant of the authentication component. You need to follow docs.md naming convention for the documentation to be generated properly.",
                              },
                              {
                                type: "file",
                                name: "docs-react_aria.md",
                                tooltip:
                                  "Now only include the documentation that is only applicable to the react-aria variant of the authentication component. You need to follow docs.md naming convention for the documentation to be generated properly.",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "folder",
                    name: "hooks",
                    tooltip: "This folder contains the custom hooks used in the Stratik UI Library",
                    children: [
                      {
                        type: "folder",
                        name: "useCookies",
                        tooltip:
                          "This folder didn't need the 01 folder level but is kept to maintain the structure similar to primitives and components",
                        children: [
                          {
                            type: "folder",
                            name: "01",
                            children: [
                              {
                                type: "folder",
                                name: "default-ts",
                                tooltip: "This folder contains the hook in default TypeScript.",
                                children: [
                                  {
                                    type: "file",
                                    name: "useCookies.tsx",
                                    tooltip: "This is the hook itself",
                                  },
                                  {
                                    type: "file",
                                    name: "example.tsx",
                                    tooltip:
                                      "This file contains an example of the hook in TypeScript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "folder",
                                name: "default-js",
                                tooltip: "This folder contains the hook in default Javascript.",
                                children: [
                                  {
                                    type: "file",
                                    name: "useCookies.jsx",
                                    tooltip: "This is the hook itself",
                                  },
                                  {
                                    type: "file",
                                    name: "example.jsx",
                                    tooltip:
                                      "This file contains an example of the hook in Javascript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "folder",
                    name: "primitives",
                    tooltip:
                      "This folder contains the primitive components used in the Stratik UI Library. These are the building blocks that mainly carry out one specific task. For example, buttons, inputs, etc",
                    children: [
                      {
                        type: "folder",
                        name: "button",
                        tooltip: "This folder contains the button primitives used in the Stratik UI Library",
                        children: [
                          {
                            type: "folder",
                            name: "01",
                            tooltip:
                              "This is done to maintain an order and avoid name conflicts. It also improver readability and maintainability of the code.",
                            children: [
                              {
                                type: "folder",
                                name: "default-ts",
                                tooltip: "This folder contains the default button primitives in TypeScript.",
                                children: [
                                  {
                                    type: "file",
                                    name: "button.tsx",
                                    tooltip: "This file contains the default button primitive in TypeScript.",
                                  },
                                  {
                                    type: "file",
                                    name: "example.tsx",
                                    tooltip:
                                      "This file contains an example of the default button primitive in TypeScript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "folder",
                                name: "default-js",
                                tooltip: "This folder contains the default button primitives in Javascript.",
                                children: [
                                  {
                                    type: "file",
                                    name: "button.jsx",
                                    tooltip: "This file contains the default button primitive in Javascript.",
                                  },
                                  {
                                    type: "file",
                                    name: "example.jsx",
                                    tooltip:
                                      "This file contains an example of the default button primitive in Javascript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "folder",
                                name: "react_aria-ts",
                                tooltip:
                                  "This folder contains the react-aria version of the button primitives in TypeScript. Make sure to write it as react_aria-ts only",
                                children: [
                                  {
                                    type: "file",
                                    name: "button.tsx",
                                    tooltip: "This file contains the react-aria button primitive in TypeScript.",
                                  },
                                  {
                                    type: "file",
                                    name: "example.tsx",
                                    tooltip:
                                      "This file contains an example of the react-aria button primitive in TypeScript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "folder",
                                name: "react_aria-js",
                                tooltip:
                                  "This folder contains the react-aria version of the button primitives in Javascript. Make sure to write it as react_aria-ts only",
                                children: [
                                  {
                                    type: "file",
                                    name: "button.jsx",
                                    tooltip: "This file contains the react-aria button primitive in Javascript.",
                                  },
                                  {
                                    type: "file",
                                    name: "example.jsx",
                                    tooltip:
                                      "This file contains an example of the react-aria button primitive in Javascript. It needs to have an default export and the name as example only.",
                                  },
                                ],
                              },
                              {
                                type: "file",
                                name: "docs.md",
                                tooltip:
                                  "This file contains the documentation for the button primitive. If you have both the variants make sure only to include the common documentation in this file like the frontmatter mentioned below. You need to follow docs.md naming convention for the documentation to be generated properly.",
                              },
                              {
                                type: "file",
                                name: "docs-default.md",
                                tooltip:
                                  "Now only include the documentation that is only applicable to the default variant of the button primitive. You need to follow docs.md naming convention for the documentation to be generated properly.",
                              },
                              {
                                type: "file",
                                name: "docs-react_aria.md",
                                tooltip:
                                  "Now only include the documentation that is only applicable to the react-aria variant of the button primitive. You need to follow docs.md naming convention for the documentation to be generated properly.",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: "folder",
                name: "scripts",
                tooltip:
                  "This folder contains the scripts used to generate the documentation, sidebar data and search data.",
                children: [
                  {
                    type: "file",
                    name: "generateDocs.ts",
                    tooltip:
                      "This script is used to generate the documentation for the components in the library. It generates the mdx files for the components in the packages folder and with all the necessary formatting without manually maintaining the documentation.",
                  },
                  {
                    type: "file",
                    name: "generateSearchData.ts",
                    tooltip:
                      "This script is used to generate the search data. This ensures that the search data is always up to date and consistent with the components in the library. This also eliminates the need to manually maintain the search data whenever a new component is added or removed.",
                  },
                  {
                    type: "file",
                    name: "generateSidebarData.ts",
                    tooltip:
                      "This script is used to generate the sidebar data. This ensures that the sidebar data is always up to date and consistent with the components in the library. This also eliminates the need to manually maintain the sidebar data whenever a new component is added or removed.",
                  },
                  {
                    type: "file",
                    name: "helperFunctions.ts",
                    tooltip: "This file contains helper functions used in the scripts.",
                  },
                ],
              },
              {
                type: "folder",
                name: "ui",
                tooltip:
                  "This folder contains the custom UI components used in the examples and not the ones in the Stratik UI Library",
              },
              {
                type: "folder",
                name: "utils",
                tooltip: "This folder contains the utility functions used in the registry",
              },
            ],
          },
          {
            type: "file",
            name: ".gitignore",
          },
          {
            type: "file",
            name: "next.config.mjs",
            tooltip:
              "This file is used to configure the next.js project. Currently there is one rule to ignore the biome linting during the build step. This is done to avoid biome linting the code during the build step.",
          },
          {
            type: "file",
            name: "package-lock.json",
          },
          {
            type: "file",
            name: "package.json",
          },
          {
            type: "file",
            name: "postcss.config.mjs",
            tooltip: "Basic config",
          },
          {
            type: "file",
            name: "README.md",
          },
          {
            type: "file",
            name: "tailwind.config.ts",
            tooltip:
              "This file contains the tailwind configuration for all the components in the library. Make sure to update this file if you add or remove any components from the library. Please use a descriptive name for any property and make sure to give the path to the component it is used in.",
          },
          {
            type: "file",
            name: "tsconfig.json",
            tooltip:
              "It has enabled strict type checking, support for JavaScript files, and custom path aliases to make it easier to use the library components in other apps of the monorepo.",
          },
        ],
      },
      {
        type: "folder",
        name: "web",
        tooltip: "This folder contains the web application including the docs and the home page",
        children: [
          {
            type: "folder",
            name: "src",
            children: [
              {
                type: "folder",
                name: "app",
                children: [
                  {
                    type: "folder",
                    name: "docs",
                    tooltip:
                      "This folder contains the documentation for the components in the library. It has both generated and manually written documentation.",
                    children: [
                      {
                        type: "folder",
                        name: "(generatedDocs)",
                        tooltip:
                          "This folder is auto-generated by the generateDocs.ts script. It contains the documentation for the components in the library. Any manual changes here will be overwritten by the script.",
                      },
                      {
                        type: "folder",
                        name: "(manualDocs)",
                        tooltip:
                          "This folder contains the manual documentation like installation, changelog, etc. It is not auto-generated.",
                      },
                    ],
                  },
                  {
                    type: "file",
                    name: "globals.css",
                  },
                  {
                    type: "file",
                    name: "layout.tsx",
                  },
                  {
                    type: "file",
                    name: "page.tsx",
                    tooltip: "Just a welcome page for the playground",
                  },
                  {
                    type: "file",
                    name: "providers.tsx",
                    tooltip: "Contains theme provider and may contain other providers as well",
                  },
                ],
              },
              {
                type: "folder",
                name: "assets",
                children: [
                  {
                    type: "folder",
                    name: "Styles",
                    tooltip:
                      "This folder contains the css files like shiki.css, etc. Any custom css files can be added here.",
                  },
                ],
              },
              {
                type: "folder",
                name: "components",
                children: [
                  {
                    type: "folder",
                    name: "homepage",
                    tooltip:
                      "This folder contains the homepage components like the hero section, etc. It also contains the animations for the sections.",
                  },
                  {
                    type: "folder",
                    name: "mdx",
                    tooltip:
                      "This folder contains the mdx components like the mdx components requires for the documentation.",
                  },
                  {
                    type: "folder",
                    name: "search",
                    tooltip:
                      "This folder contains the search components like the search bar, etc. It also contains command palette that is used in the application to perform search actions.",
                  },
                  {
                    type: "folder",
                    name: "ui",
                    tooltip:
                      "This folder contains the ui components like the buttons, inputs, etc. It also contains the animations for the ui components.",
                  },
                ],
              },
              {
                type: "folder",
                name: "data",
                tooltip: "This folder contains the data for the application like the search data and the sidebar data.",
                children: [
                  {
                    type: "folder",
                    name: "generated",
                    tooltip:
                      "This folder contains the generated data for the application like the search data and the sidebar data.",
                    children: [
                      {
                        type: "file",
                        name: "generated-search.ts",
                        tooltip:
                          "This file contains the generated search data. It is auto-generated by the generateSearchData.ts script.",
                      },
                      {
                        type: "file",
                        name: "generated-sidebar.ts",
                        tooltip:
                          "This file contains the generated sidebar data. It is auto-generated by the generateSidebarData.ts script.",
                      },
                    ],
                  },
                  {
                    type: "file",
                    name: "search.ts",
                    tooltip:
                      "This file contains the export for the search data and also has the types for the search data. It is auto-generated by the generateSearchData.ts script. This is done in order to add any additional data manually.",
                  },
                  {
                    type: "file",
                    name: "sidebar.ts",
                    tooltip:
                      "This file contains the export for the sidebar data and also has the types for the sidebar data. It is auto-generated by the generateSidebarData.ts script. This is done in order to add any additional data manually.",
                  },
                ],
              },
              {
                type: "folder",
                name: "hooks",
                tooltip: "This folder contains the custom hooks used in the application.",
              },
              {
                type: "folder",
                name: "utils",
                tooltip: "This folder contains the utility functions used in the application.",
                children: [
                  {
                    type: "folder",
                    name: "mdx",
                    tooltip:
                      "This folder contains the utility functions used in the mdx components. They are used to setup the mdx integration with next.js.",
                  },
                ],
              },
              {
                type: "file",
                name: "env.js",
                tooltip:
                  "This file maintains the type-safety for the environment variables. It also warns if the environment variables are not set which is useful for development.",
              },
            ],
          },
          {
            type: "file",
            name: ".env.example",
          },
          {
            type: "file",
            name: ".env.local",
            tooltip: "Copy the values from the installation Step-3 and paste them here.",
          },
          {
            type: "file",
            name: ".gitignore",
          },
          {
            type: "file",
            name: "mdx-components.tsx",
            tooltip:
              "This file is used by mdx to change the default styles of mdx elements like h1, h2, a, code, etc. Do not change until necessary as it will affect the styling of the entire documentations.",
          },
          {
            type: "file",
            name: "next.config.mjs",
            tooltip:
              "This file is used to configure the next.js project. Currently there is one rule to ignore the biome linting during the build step. This is done to avoid biome linting the code during the build step.",
          },
          {
            type: "file",
            name: "package-lock.json",
          },
          {
            type: "file",
            name: "package.json",
          },
          {
            type: "file",
            name: "postcss.config.mjs",
            tooltip: "Basic config",
          },
          {
            type: "file",
            name: "README.md",
          },
          {
            type: "file",
            name: "tailwind.config.ts",
            tooltip:
              "This file contains the tailwind configuration for the website. It has the registry/tailwind.config.ts extended here so that the styling and animation for the example elements are maintained in the website.",
          },
          {
            type: "file",
            name: "tsconfig.json",
            tooltip:
              "It is configured to handle the MDX usage in the documentation. It has enabled strict type checking, support for JavaScript files, and custom path aliases to make it easier to use the library components in other apps of the monorepo.",
          },
        ],
      },
    ],
  },
  {
    type: "file",
    name: ".gitignore",
  },
  {
    type: "file",
    name: "biome.json",
    tooltip: "This file is used to configure the biome rules for the project",
  },
  {
    type: "file",
    name: "LICENSE.md",
    tooltip: "This file contains the license for the project. NOTE: DO NOT EDIT THIS FILE",
  },
  {
    type: "file",
    name: "package-lock.json",
  },
  {
    type: "file",
    name: "package.json",
  },
  {
    type: "file",
    name: "README.md",
  },
  {
    type: "file",
    name: "turbo.json",
    tooltip: "This file is used to configure the turbo project",
  },
];

export function FileTreeStructure() {
  return (
    <div className="w-full bg-primary rounded-md border border-outline-secondary py-4 px-4 overflow-x-auto scrollbar-y scrollbar-x">
      {Data.map((item, index) => {
        return (
          <Fragment key={index}>
            {item.type === "folder" ? (
              <Folder name={item.name} tooltip={item.tooltip} content={item.children} />
            ) : (
              <File name={item.name} tooltip={item.tooltip} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

function Folder({
  name,
  tooltip,
  content,
  defaultOpen = false,
}: { name: string; tooltip?: string; content?: DataProps[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <div className="py-1">
      <div className="flex justify-start items-center gap-2 text-primary-foreground cursor-pointer w-full">
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
          className="flex gap-2"
        >
          <div className="size-5 ml-1 flex justify-center items-center">
            {open ? <Icons.folderOpen className="size-[1.15rem]" /> : <Icons.folderClosed className="size-5" />}
          </div>
          <span className="text-sm">{name}</span>
        </button>
        {tooltip && <InfoButton msg={tooltip} />}
      </div>
      <div
        className={twMerge(
          "w-max overflow-y-hidden flex transition-all duration-500",
          content && content.length > 0 && open ? "h-max" : "h-0",
        )}
      >
        {/* Line */}
        <div className="min-h-[calc(100%-0.25rem)] border-r border  mx-[calc((0.77rem-1px))] border-outline rounded-full mt-1" />
        {/* Content */}
        <div className="h-max pt-2">
          {content?.map((item, index) => {
            return (
              <Fragment key={index}>
                {item.type === "folder" ? (
                  <Folder name={item.name} tooltip={item.tooltip} content={item.children} />
                ) : (
                  <File name={item.name} tooltip={item.tooltip} />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function File({ name, tooltip }: { name: string; tooltip?: string }) {
  return (
    <div className="flex justify-start items-center gap-2 text-primary-foreground py-1">
      <Icons.file className="size-5 m-0.5 pl-0.5" />
      <div className="text-sm">{name}</div>
      {tooltip && <InfoButton msg={tooltip} />}
    </div>
  );
}

function InfoButton({ msg }: { msg: string }) {
  return (
    <TooltipTrigger delay={500}>
      <Button>
        <Icons.info className="size-4 my-auto cursor-pointer" />
      </Button>
      <Tooltip placement="top" className="max-w-80 p-4 bg-white dark:bg-neutral-950">
        {msg}
      </Tooltip>
    </TooltipTrigger>
  );
}

const Icons = {
  folderClosed: (props: IconProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg height="200" width="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 9c0-1.886 0-2.828.586-3.414C5.172 5 6.114 5 8 5h.343c.818 0 1.226 0 1.594.152c.368.152.657.442 1.235 1.02l.656.656c.579.578.867.868 1.235 1.02c.368.152.776.152 1.594.152H16c1.886 0 2.828 0 3.414.586C20 9.172 20 10.114 20 12v3c0 1.886 0 2.828-.586 3.414C18.828 19 17.886 19 16 19H8c-1.886 0-2.828 0-3.414-.586C4 17.828 4 16.886 4 15z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  folderOpen: (props: IconProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg height="200" width="200" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m6.379 4.5l-.44-.44l-.621-.62A1.5 1.5 0 0 0 4.258 3H3a1.5 1.5 0 0 0-1.5 1.5v5.25l1.376-2.293A3 3 0 0 1 5.45 6h7.05A1.5 1.5 0 0 0 11 4.5zM14 6.026V6a3 3 0 0 0-3-3H7l-.621-.621A3 3 0 0 0 4.257 1.5H3a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h8.301a3 3 0 0 0 2.573-1.457l1.791-2.985A2.349 2.349 0 0 0 14 6.026M10 12.5h1.301a1.5 1.5 0 0 0 1.287-.728l1.791-2.986l1.286.772l-1.286-.772a.85.85 0 0 0-.728-1.286H5.449a1.5 1.5 0 0 0-1.287.728l-1.791 2.986a.85.85 0 0 0 .728 1.286z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  file: (props: IconProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg height="200" width="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13.172 3H9c-1.886 0-2.828 0-3.414.586C5 4.172 5 5.114 5 7v10c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V8.828c0-.408 0-.613-.076-.796c-.076-.184-.22-.329-.51-.618l-3.828-3.828c-.29-.29-.434-.434-.617-.51C13.785 3 13.58 3 13.172 3Z" />
        <path d="M13 3v4c0 .943 0 1.414.293 1.707C13.586 9 14.057 9 15 9h4" />
      </g>
    </svg>
  ),
  info: (props: IconProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg height="200" width="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor">
        <path d="M12 17.139v-6.167" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M11.958 7.563h.008" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <rect height="18.5" width="18.5" rx="6" strokeWidth="1.5" x="2.75" y="2.75" />
      </g>
    </svg>
  ),
};
