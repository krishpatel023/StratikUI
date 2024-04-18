import {
  Header,
  HeaderStringJsx,
  HeaderStringTsx,
  useClickOutsideStringJsx,
  useClickOutsideStringTsx,
} from "@/packages/components/headers/Header_1_Helper";

import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import React from "react";

function Demo() {
  return (
    <div className="w-full">
      <Header />
      <div className="min-h-[40rem] w-full text-center flex justify-center items-center">
        <h1 className="text-2xl text-s_textPrimary">Content</h1>
      </div>
    </div>
  );
}

const UsageString: string = `function Demo() {
  return (
    <div className="w-full">
      <Header />
      <div className="min-h-[40rem] w-full text-center flex justify-center items-center">
        <h1 className="text-2xl text-s_textPrimary">Content</h1>
      </div>
    </div>
  );
}`;

const LogoStringJsx: string = `export const Bars = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Cross = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
    ></path>
  </svg>
);
`;

const LogoStringTsx: string = `export const Bars = (props:IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Cross = (props:IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
    ></path>
  </svg>
);
`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "Header",
        content: [
          { language: "tsx", code: HeaderStringTsx },
          {
            language: "jsx",
            code: HeaderStringJsx,
          },
        ],
      },
      {
        name: "Implementation",
        content: [
          {
            language: "tsx",
            code: UsageString,
          },
          {
            language: "jsx",
            code: UsageString,
          },
        ],
      },
      {
        name: "UseClickOutsideHook",
        content: [
          {
            language: "tsx",
            code: useClickOutsideStringTsx,
          },
          {
            language: "jsx",
            code: useClickOutsideStringJsx,
          },
        ],
      },
      {
        name: "Logo",
        content: [
          {
            language: "tsx",
            code: LogoStringTsx,
          },
          {
            language: "jsx",
            code: LogoStringJsx,
          },
        ],
      },
    ],
  },
];

const HeroData: DataDescription = {
  name: "Responsive Default Header Section",
  description:
    "This is a default header section with half screen slider. It also has click outside hook to close the header when clicked outside.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.2",
  display: true,
};
export default HeroData;
