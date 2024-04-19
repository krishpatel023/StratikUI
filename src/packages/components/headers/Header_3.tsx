import {
  Header,
  HeaderStringJsx,
  HeaderStringTsx,
  LogoStringJsx,
  LogoStringTsx,
} from "@/packages/components/headers/Header_3_Helper";

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
      <div className="min-h-[80rem] w-full text-center flex justify-center items-center">
        <h1 className="text-2xl text-s_textPrimary">Content</h1>
      </div>
    </div>
  );
}

const UsageString = `function Demo() {
  return (
    <div className="w-full">
      <Header />
      <div className="min-h-[80rem] w-full text-center flex justify-center items-center">
        <h1 className="text-2xl text-s_textPrimary">Content</h1>
      </div>
    </div>
  );
}`;

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
  name: "Header Section",
  description: "This is a responsive header with animated Links and Button",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.2",
  display: true,
};
export default HeroData;
